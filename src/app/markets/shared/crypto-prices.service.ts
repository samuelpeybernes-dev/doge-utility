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

  fetchCryptoPrices(): Observable<PriceData[]> {
    return this.http.get<any>('https://api.coincap.io/v2/assets').pipe(
      map(response => {
        // Filtrer les données pour ne récupérer que Bitcoin, Dogecoin et Ethereum
        const filteredData = response.data.filter((asset: any) => 
          asset.id === 'bitcoin' || asset.id === 'dogecoin' || asset.id === 'ethereum'
        );

        // Mapper les données filtrées dans la structure de données attendue
        return filteredData.map((asset: any) => ({
          name: asset.name,
          priceUsd: this.currencyFormatService.formatUsdPrice(asset.priceUsd)
        })) as PriceData[];
      })
    );
  }

 
}
