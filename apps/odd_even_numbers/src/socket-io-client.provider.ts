import { Injectable } from '@nestjs/common';
import { Socket, io } from 'socket.io-client';

@Injectable()
export class SocketIoClientProvider {

  private socket: Socket;

  private connect() {
    this.socket = io(process.env.SOCKET);
    return this.socket;
  }

  getSocket = () => {
    if (!this.socket) return this.connect();
    return this.socket;
  };
}

