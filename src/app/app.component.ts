import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { muchPriceComponent } from './components/much-price/much-price.component';
import { PriceApiService } from './services/price.service';
import { Observable, BehaviorSubject, of, combineLatest } from 'rxjs';
import { mergeMap, map, shareReplay } from 'rxjs/operators';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, muchPriceComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doge-utility';
  
  public price$: Observable<string | undefined>;
  public isInWaitingState$: Observable<boolean>;
  public currency$ = new BehaviorSubject<string | undefined>(undefined);

  constructor(private api: PriceApiService) { }

  ngOnInit() {
    this.price$ = this.currency$.pipe(
      mergeMap((currency: string | undefined) => {
        return currency ? this.api.getPrice(currency) : of(undefined);
      }),
      shareReplay(1)
    );
  }

  onCryptoSelected(currency: string) {
    if (this.currency$.value) {
      this.api.unsubscribe();
    }

    this.currency$.next(currency);
  }
}
