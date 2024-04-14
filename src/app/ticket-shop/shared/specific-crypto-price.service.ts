import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Price as PriceData } from '../../interfaces/price.interface';

@Injectable({
  providedIn: 'root'
})
export class SpecificCryptoPriceService {

  constructor(private http: HttpClient) { }

  fetchSpecificCrypto(cryptoName: string): Observable<PriceData> {
    return this.http.get<any>(`https://api.coincap.io/v2/assets/${cryptoName}`).pipe(
      map(response => {
        return {
          priceUsd: response.data.priceUsd
        } as PriceData;
      })
    );
  }
}
