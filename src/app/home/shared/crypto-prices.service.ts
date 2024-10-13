import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Price as PriceData } from '../../interfaces/price.interface';
import { CurrencyFormatService } from '../../shared/currency-format.service';

@Injectable({
  providedIn: 'root'
})
export class CryptoPricesService {

  constructor(private http: HttpClient, private currencyFormatService: CurrencyFormatService) { }

  fetchCryptoPrices(cryptosName: string[]): Observable<PriceData[]> {
    return this.http.get<{data: PriceData[]}>(`https://api.coincap.io/v2/assets?ids=${cryptosName}`).pipe(
      map(response => {
        let brutData = response.data;
        
        // On place le dogecoin en 2ème position
        const dogeAsset = brutData.splice(2, 1)[0];
        brutData.splice(1, 0, dogeAsset);
      
        return brutData.map((asset: PriceData) => ({
          name: asset.name,
          priceUsd: asset.priceUsd,
          explorer: asset.explorer,
          changePercent24Hr: asset.changePercent24Hr
        })) as PriceData[];
      })
    );
  }

}
