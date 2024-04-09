import { Injectable } from '@angular/core';
import { PriceApi } from '../interfaces/price.interface';
import { Observable } from 'rxjs';

const WEB_SOCKET_ENDPOINT = 'wss://api.coincap.io/v2/';

@Injectable({ providedIn: 'root' })
export class PriceApiService implements PriceApi {
  private webSocket: WebSocket;

  public getPrice(currency: string): Observable<string> {
    return this.connectToPriceStream(currency);
  }

  public unsubscribe() {
    this.webSocket.close();
  }

  private connectToPriceStream(asset: string): Observable<string> {
    this.createConnection(asset);

    return new Observable(observer => {
      const webSocket = this.webSocket;

      webSocket.onmessage = (msg: MessageEvent) => {
        const data = JSON.parse(msg.data);
        observer.next(data[asset]);
      };

      return {
        unsubscribe(): void {
          webSocket.close();
        }
      };
    });
  }

  private createConnection(asset: string) {
    if (this.webSocket) {
      this.webSocket.close();
    }

    this.webSocket = new WebSocket(
      WEB_SOCKET_ENDPOINT + `?assets=${asset}`
    );
  }
}