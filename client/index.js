import React from 'react';
import SocketIOClient from 'socket.io-client';

class Main extends React.Component {
    constructor(props) {
        super(props);

        // Creating socket client instance to auto connect to server
        this.socket = SocketIOClient('http://localhost:3000');
    }
}

module.exports = Main;