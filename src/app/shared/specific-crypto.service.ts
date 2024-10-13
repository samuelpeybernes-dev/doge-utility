import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Price as PriceData } from '../interfaces/price.interface';
import { Candle, chartData } from '../interfaces/candle.interface';

@Injectable({
  providedIn: 'root',
})
export class SpecificCryptoPriceService {
  constructor(private http: HttpClient) {}

  fetchPrice(cryptoName: string): Observable<PriceData> {
    return this.http
      .get<{ data: PriceData }>(
        `https://api.coincap.io/v2/assets/${cryptoName}`
      )
      .pipe(
        map((response) => {
          return {
            priceUsd: response.data.priceUsd,
          } as PriceData;
        })
      );
  }

  fetchCandles(cryptoName: string): Observable<chartData> {
    return this.http
      .get<{ data: Candle[] }>(
        `https://api.coincap.io/v2/assets/${cryptoName}/history?interval=d1`
      )
      .pipe(
        map((response) => {
          return this.formatCandles(response.data);
        })
      );
  }

  formatCandles(candles: Candle[]): chartData {
    const labels = candles.map((item) =>
      new Date(item.time).toLocaleDateString()
    );
    const prices = candles.map((item) => parseFloat(item.priceUsd));

    return {
      labels: labels,
      prices: prices,
    };
  }
}
