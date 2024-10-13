import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CryptoNameService {
  constructor(private http: HttpClient) {}

  fetchAllCryptosName(): Observable<string[]> {
    return this.http
      .get<{ data: { name: string }[] }>('https://api.coincap.io/v2/assets')
      .pipe(
        map((response) => {
          return response.data.map((crypto) => crypto.name);
        })
      );
  }
}
