# SMPP Server with OAuth 2.0 and HTTP API Integration

## Overview

This project is a Node.js-based SMPP (Short Message Peer-to-Peer) server designed to handle SMS message submissions and integrate with external APIs for authentication and message delivery. It incorporates OAuth 2.0 authentication for secure API communication and sends SMS messages through a configurable HTTP API endpoint.

## Key Features

- **SMPP Protocol**: Fully functional SMPP server for handling SMS transactions.
- **OAuth 2.0 Authentication**: Secure communication using OAuth 2.0 tokens obtained from an API endpoint.
- **API Integration**: Sends SMS messages through an external HTTP API using either OAuth tokens or static API tokens.
- **Modular Structure**: Separates authentication, message handling, and configuration into dedicated modules, making the project more maintainable and scalable.

## Configuration

- OAuth 2.0 credentials (token endpoint, client ID/secret) and API tokens are stored in a `config.json` or `.env` file for easy management.
- Supports both static API tokens and dynamic OAuth 2.0 token retrieval for secure API communication.

## How to Use

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>


2 .**Install dependencies**:
  ```npm install```
3.**Configure credentials**:
Update the config.json or .env file with your OAuth 2.0 credentials and API endpoints.

4. **Run the server:**
   ```npm start```

