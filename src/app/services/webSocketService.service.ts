import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
 providedIn: 'root',
})
export class webSocketService {
 private webSocket: Socket;
 constructor() {
  this.webSocket = new Socket({
    
   url: "wss://ws.coincap.io/prices?assets=ALL",
   options: {},
  });
 }

 listenForPrices() {
   return this.webSocket.fromEvent<any>('message');
 }
}