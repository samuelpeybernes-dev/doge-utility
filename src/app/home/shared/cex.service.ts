import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cex as ExchangeData} from '../../interfaces/cex.interface'

@Injectable({
  providedIn: 'root'
})
export class CexService {

  constructor(private http: HttpClient) { }
  
  fetchWowCex(): Observable<ExchangeData> {
    return this.http.get<{ data: ExchangeData[] }>('https://api.coincap.io/v2/exchanges').pipe(
      map(response => {
        const rank1Data = response.data.find((exchange: ExchangeData) => exchange.rank === '1') ?? {
          name: '',
          exchangeUrl: ''
        };
          return {
            name: rank1Data.name, 
            exchangeUrl: rank1Data.exchangeUrl,
          } as ExchangeData; 
        
      })
    );
  }

}
