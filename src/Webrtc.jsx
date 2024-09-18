// import { useEffect, useState } from 'react';
// import io from 'socket.io-client';
// import { v4 as uuidv4 } from 'uuid';

// const Webrtc = ({ socketUrl, pcConfig, logging }) => {
//     const [room, setRoom] = useState(null);
//     const [socket, setSocket] = useState(null);
//     const [myId, setMyId] = useState(null);
//     const [pcs, setPcs] = useState({});
//     const [streams, setStreams] = useState({});
//     const [inCall, setInCall] = useState(false);
//     const [isReady, setIsReady] = useState(false);
//     const [isInitiator, setIsInitiator] = useState(false);
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [localStream, setLocalStream] = useState(null);
//     const [mediaPermissions, setMediaPermissions] = useState({ audio: false, video: false });

//     const log = logging.log ? console.log : () => {};
//     const warn = logging.warn ? console.warn : () => {};
//     const error = logging.error ? console.error : () => {};

//     useEffect(() => {
//         const socket = io(socketUrl);
//         setSocket(socket);

//         socket.on('created', (room, socketId) => {
//             setRoom(room);
//             setMyId(socketId);
//             setIsInitiator(true);
//             setIsAdmin(true);
//             setMediaPermissions({ audio: true, video: true });
//             dispatchEvent(new CustomEvent('createdRoom', { detail: { roomId: room } }));
//         });

//         socket.on('joined', (room, socketId) => {
//             log('joined: ' + room);
//             setRoom(room);
//             setIsReady(true);
//             setMyId(socketId);
//             setMediaPermissions({ audio: false, video: false });
//             dispatchEvent(new CustomEvent('joinedRoom', { detail: { roomId: room } }));
//             socket.emit('newUserJoined', room, socketId);
//         });

//         socket.on('left room', (room) => {
//             if (room === room) {
//                 warn(`Left the room ${room}`);
//                 setRoom(null);
//                 removeUser();
//                 dispatchEvent(new CustomEvent('leftRoom', { detail: { roomId: room } }));
//             }
//         });

//         socket.on('join', (room) => {
//             log('Incoming request to join room: ' + room);
//             setIsReady(true);
//             dispatchEvent(new Event('newJoin'));
//         });

//         socket.on('ready', (user) => {
//             log('User: ', user, ' joined room');
//             if (user !== myId && inCall) setIsInitiator(true);
//         });

//         socket.on('kickout', (socketId) => {
//             log('kickout user: ', socketId);
//             if (socketId === myId) {
//                 dispatchEvent(new Event('kicked'));
//                 removeUser();
//             } else {
//                 removeUser(socketId);
//             }
//         });

//         socket.on('log', (log) => {
//             log.apply(console, log);
//         });

//         socket.on('message', (message, socketId) => {
//             log('From', socketId, ' received:', message.type);

//             if (message.type === 'leave') {
//                 log(socketId, 'Left the call.');
//                 removeUser(socketId);
//                 setIsInitiator(true);
//                 dispatchEvent(new CustomEvent('userLeave', { detail: { socketId } }));
//                 return;
//             }

//             if (pcs[socketId] && pcs[socketId].connectionState === 'connected') {
//                 log('Connection with ', socketId, 'is already established');
//                 return;
//             }

//             switch (message.type) {
//                 case 'gotstream':
//                     connect(socketId);
//                     break;
//                 case 'offer':
//                     if (!pcs[socketId]) {
//                         connect(socketId);
//                     }
//                     pcs[socketId].setRemoteDescription(new RTCSessionDescription(message)).then(() => {
//                         answer(socketId);
//                     }).catch((error) => {
//                         error('Error setting remote description: ', error);
//                     });
//                     break;
//                 case 'answer':
//                     pcs[socketId].setRemoteDescription(new RTCSessionDescription(message)).catch((error) => {
//                         error('Error setting remote description: ', error);
//                     });
//                     break;
//                 case 'candidate': {
//                     setInCall(true);
//                     const candidate = new RTCIceCandidate({
//                         sdpMLineIndex: message.label,
//                         candidate: message.candidate,
//                     });
//                     pcs[socketId].addIceCandidate(candidate).catch((error) => {
//                         error('Error adding ICE candidate: ', error);
//                     });
//                     break;
//                 }
//             }
//         });

//         socket.on('newUserJoined', (room, socketId) => {
//             if (isAdmin && room === room) {
//                 connect(socketId);
//             }
//         });

//         return () => {
//             socket.disconnect();
//         };
//     }, [socketUrl, logging, pcs, inCall, myId, room]);

//     const dispatchEvent = (event) => {
//         window.dispatchEvent(event);
//     };

//     const sendMessage = (message, toId = null, roomId = null) => {
//         socket.emit('message', message, toId, roomId);
//     };

//     const createPeerConnection = (socketId) => {
//         try {
//             if (pcs[socketId]) {
//                 warn('Connection with ', socketId, ' already established');
//                 return;
//             }

//             const pc = new RTCPeerConnection(pcConfig);
//             pc.onicecandidate = handleIceCandidate.bind(null, socketId);
//             pc.ontrack = handleOnTrack.bind(null, socketId);

//             setPcs((prevPcs) => ({ ...prevPcs, [socketId]: pc }));
//             log('Created RTCPeerConnnection for ', socketId);
//         } catch (error) {
//             error('RTCPeerConnection failed: ' + error.message);
//             dispatchEvent(new CustomEvent('error', { detail: { error: new Error(`RTCPeerConnection failed: ${error.message}`) } }));
//         }
//     };

//     const handleIceCandidate = (socketId, event) => {
//         log('icecandidate event');

//         if (event.candidate) {
//             log('Sending ICE candidate: ', event.candidate);
//             sendMessage(
//                 {
//                     type: 'candidate',
//                     label: event.candidate.sdpMLineIndex,
//                     id: event.candidate.sdpMid,
//                     candidate: event.candidate.candidate,
//                 },
//                 socketId
//             );
//         } else {
//             log('End of candidates.');
//         }
//     };

//     const handleCreateOfferError = (event) => {
//         error('ERROR creating offer');
//         dispatchEvent(new CustomEvent('error', { detail: { error: new Error('Error while creating an offer') } }));
//     };

//     const makeOffer = (socketId) => {
//         log('Sending offer to ', socketId);

//         pcs[socketId].createOffer().then(
//             (offer) => {
//                 log('Offer created: ', offer.sdp);
//                 setSendLocalDescription(socketId, offer);
//             },
//             handleCreateOfferError
//         );
//     };

//     const answer = (socketId) => {
//         log('Sending answer to ', socketId);

//         pcs[socketId].createAnswer().then(
//             (answer) => {
//                 log('Answer created: ', answer.sdp);
//                 setSendLocalDescription(socketId, answer);
//             },
//             handleSDPError
//         );
//     };

//     const setSendLocalDescription = (socketId, sessionDescription) => {
//         pcs[socketId].setLocalDescription(sessionDescription);
//         sendMessage(sessionDescription, socketId);
//     };

//     const handleSDPError = (error) => {
//         log('Session description error: ' + error.toString());
//         dispatchEvent(new CustomEvent('error', { detail: { error: new Error(`Session description error: ${error.toString()}`) } }));
//     };

//     const handleOnTrack = (socketId, event) => {
//         log('Remote stream added for ', socketId);

//         if (streams[socketId]?.id !== event.streams[0].id) {
//             setStreams((prevStreams) => ({ ...prevStreams, [socketId]: event.streams[0] }));
//             dispatchEvent(new CustomEvent('newUser', { detail: { socketId, stream: event.streams[0] } }));
//         }
//     };

//     const removeUser = (socketId = null) => {
//         if (!socketId) {
//             Object.values(pcs).forEach((pc) => {
//                 log('closing', pc);
//                 pc.close();
//             });
//             setPcs({});
//             setStreams({});
//         } else {
//             if (!pcs[socketId]) return;
//             pcs[socketId].close();
//             setPcs((prevPcs) => {
//                 const newPcs = { ...prevPcs };
//                 delete newPcs[socketId];
//                 return newPcs;
//             });
//             setStreams((prevStreams) => {
//                 const newStreams = { ...prevStreams };
//                 delete newStreams[socketId];
//                 return newStreams;
//             });
//         }
//         dispatchEvent(new CustomEvent('removeUser', { detail: { socketId } }));
//     };

//     const connect = (socketId) => {
//         if (typeof localStream !== 'undefined' && isReady) {
//             log('Create peer connection to ', socketId);
//             createPeerConnection(socketId);
//             if (localStream) {
//                 pcs[socketId].addStream(localStream);
//             } else {
//                 warn('Local stream is null');
//             }
//             if (isInitiator) {
//                 log('Creating offer for ', socketId);
//                 makeOffer(socketId);
//             }
//         } else {
//             warn('NOT connecting');
//         }
//     };

//     const gotStream = () => {
//         if (room) {
//             sendMessage({ type: 'gotstream' }, null, room);
//         } else {
//             warn('Should join room before sending stream');
//             dispatchEvent(new CustomEvent('notification', { detail: { notification: `Should join room before sending a stream.` } }));
//         }
//     };

//     const joinRoom = (room) => {
//         if (room) {
//             warn('Leave current room before joining a new one');
//             dispatchEvent(new CustomEvent('notification', { detail: { notification: `Leave current room before joining a new one` } }));
//             return;
//         }
//         if (!room) {
//             room = uuidv4();
//         }
//         socket.emit('create or join', room);
//     };

//     const leaveRoom = () => {
//         if (!room) {
//             warn('You are currently not in a room');
//             dispatchEvent(new CustomEvent('notification', { detail: { notification: `You are currently not in a room` } }));
//             return;
//         }
//         setIsInitiator(false);
//         socket.emit('leave room', room);
//     };

//     const getLocalStream = (audioConstraints, videoConstraints) => {
//         return navigator.mediaDevices.getUserMedia({
//             audio: mediaPermissions.audio ? audioConstraints : false,
//             video: mediaPermissions.video ? videoConstraints : false,
//         }).then((stream) => {
//             log('Got local stream.');
//             setLocalStream(stream);
//             return stream;
//         }).catch(() => {
//             error("Can't get usermedia");
//             dispatchEvent(new CustomEvent('error', { detail: { error: new Error(`Can't get usermedia`) } }));
//         });
//     };

//     const kickUser = (socketId) => {
//         if (!isAdmin) {
//             dispatchEvent(new CustomEvent('notification', { detail: { notification: 'You are not an admin' } }));
//             return;
//         }
//         removeUser(socketId);
//         socket.emit('kickout', socketId, room);
//     };

//     const grantAudioPermission = (socketId) => {
//         setMediaPermissions((prevPermissions) => ({ ...prevPermissions, [socketId]: { audio: true, video: prevPermissions[socketId]?.video || false } }));
//         sendMessage({ type: 'grantAudioPermission' }, socketId);
//     };

//     const grantVideoPermission = (socketId) => {
//         setMediaPermissions((prevPermissions) => ({ ...prevPermissions, [socketId]: { audio: prevPermissions[socketId]?.audio || false, video: true } }));
//         sendMessage({ type: 'grantVideoPermission' }, socketId);
//     };

//     return (
//         <div>
//             {/* Render your UI components here */}
//         </div>
//     );
// };

// export default Webrtc;