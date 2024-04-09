import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import {NgFor, NgForOf} from "@angular/common";

@Component({
  selector: 'much-price',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor],
  standalone: true,
  templateUrl: './much-price.component.html',
  styleUrl: './much-price.component.css'
})
export class muchPriceComponent {
  @Output() selected = new EventEmitter<string>();

  assets = [
    { value: 'bitcoin', label: 'Bitcoin' },
    { value: 'litecoin', label: 'Litecoin' },
    { value: 'ethereum', label: 'Ethereum' }
  ];
}