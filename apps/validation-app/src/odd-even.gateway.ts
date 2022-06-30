import {
  OnGatewayDisconnect, OnGatewayInit,
  WebSocketGateway, WebSocketServer
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { INumberType } from './interfaces/numberType.interface';


@WebSocketGateway()
export class OddEvenGateway implements OnGatewayInit, OnGatewayInit, OnGatewayDisconnect {

  @WebSocketServer() server: Server;

  afterInit() {
    console.log('Socket initialized 🚀');
  }

  handleConnection(client: any) {
    console.log(`Client with id: ${client.id} connected`);
  }

  handleDisconnect(client: any) {
    console.log(`Client with id: ${client.id} disconnected`);
  }

  /**
   * Send number value and number type to the client
   * 
   * @param {INumberType} numberType
   */
  sendNumbers(numberType:INumberType) {
    this.server.emit("sendNumbers", numberType);
  }

}
