import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


interface AssetData {
  id: string;
  priceUsd: string;
}

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }

  fetchAssets(): Observable<AssetData[]> {
    return this.http.get<any>('https://api.coincap.io/v2/assets').pipe(
      map(response => {
        // Filtrer les données pour ne récupérer que Bitcoin, Dogecoin et Ethereum
        const filteredData = response.data.filter((asset: any) => 
          asset.id === 'bitcoin' || asset.id === 'dogecoin' || asset.id === 'ethereum'
        );

        // Mapper les données filtrées dans la structure de données attendue
        return filteredData.map((asset: any) => ({
          id: asset.id,
          priceUsd: asset.priceUsd
        })) as AssetData[];
      })
    );
  }

}
