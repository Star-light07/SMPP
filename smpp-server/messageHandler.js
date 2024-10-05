const axios = require('axios');
const config = require('./config.json'); // Load API URL or credentials from config

// Function to handle incoming SMS messages
async function handleMessage(pdu, session) {
    const message = pdu.short_message.message;
    const to = pdu.destination_addr;
    const from = pdu.source_addr;

    try {
        // Call external API to send the SMS
        const response = await axios.post(config.smsApiUrl, {
            to: to,
            from: from,
            message: message
        });

        if (response.data.success) {
            session.send(pdu.response());  // Acknowledge successful message submission
            console.log(`SMS sent to ${to}: ${message}`);
        } else {
            throw new Error('Failed to send SMS');
        }
    } catch (error) {
        console.error('Failed to send SMS:', error.message);
        session.send(pdu.response({ command_status: smpp.ESME_RSUBMITFAIL }));  // Respond with error status
    }
}

module.exports = {
    handleMessage
};
