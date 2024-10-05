const smpp = require('smpp');
const auth = require('./auth');
const messageHandler = require('./messageHandler');

// Create the SMPP server
const server = smpp.createServer((session) => {
    console.log('SMPP session started');

    session.on('bind_transceiver', (pdu) => {
        auth.authenticate(pdu, session);  // Handle authentication
    });

    session.on('submit_sm', (pdu) => {
        messageHandler.handleMessage(pdu, session);  // Handle message submission
    });

    session.on('unbind', (pdu) => {
        session.send(pdu.response());
        session.close();
    });

    session.on('error', (error) => {
        console.error('Session error:', error);
    });
});

// Start the server
server.listen(2775, () => {
    console.log('SMPP server is listening on port 2775');
});
