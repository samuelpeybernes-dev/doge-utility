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
    return this.http.get<{data: PriceData[]}>('https://api.coincap.io/v2/assets').pipe(
      map(response => {
        const filteredData = this.getSelectedCryptos(response, ['bitcoin', 'dogecoin', 'ethereum']);
        // On place le dogecoin en 2ème position
        const dogeAsset = filteredData.splice(2, 1)[0];
        filteredData.splice(1, 0, dogeAsset);
      
        return filteredData.map((asset: PriceData) => ({
          name: asset.name,
          priceUsd: asset.priceUsd,
          explorer: asset.explorer
        })) as PriceData[];
      })
    );
  }

  // Filtre les données pour ne récupérer que les crypto nécessaires
  private getSelectedCryptos(response: { data: PriceData[]; }, selectedCryptos: string[]) {
    return response.data.filter((asset: PriceData) => selectedCryptos.includes(asset.id));
  }
}
