import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface ExchangeData {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class CexService {

  constructor(private http: HttpClient) { }

  
  fetchWowCex(): Observable<ExchangeData[]> {
    return this.http.get<any>('https://api.coincap.io/v2/exchanges').pipe(
      map(response => {
        // Filtrer les données pour ne récupérer que l'élément ayant le rang 1
        const rank1Data = response.data.find((exchange: any) => exchange.rank === '1');

        // Vérifier si l'élément avec le rang 1 existe
        if (rank1Data) {
          // Mapper les données dans la structure de données attendue
          return [{
            id: rank1Data.exchangeId, // Utiliser exchangeId comme ID pour l'échange
          }] as ExchangeData[]; // Retourner un tableau d'un seul élément
        } else {
          // Si aucun élément avec le rang 1 n'est trouvé, retourner un tableau vide
          return [] as ExchangeData[];
        }
      })
    );
  }

}
