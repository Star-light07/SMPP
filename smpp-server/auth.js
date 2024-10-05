const axios = require('axios');
const config = require('./config.json'); // Load API URL or credentials from config

// Function to handle authentication
async function authenticate(pdu, session) {
    const systemId = pdu.system_id;
    const password = pdu.password;

    try {
        // Call external API for authentication
        const response = await axios.post(config.authUrl, {
            email: systemId,
            password: password
        });

        if (response.data.success) {
            session.send(pdu.response());
            console.log(`User ${systemId} authenticated successfully.`);
        } else {
            throw new Error('Invalid credentials');
        }
    } catch (error) {
        console.log(`Authentication failed for user: ${systemId}`, error.message);
        session.send(pdu.response({ command_status: smpp.ESME_RINVPASWD }));
        session.close();
    }
}

module.exports = {
    authenticate
};
