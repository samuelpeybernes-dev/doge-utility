import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import {NgFor, NgForOf} from "@angular/common";

@Component({
  selector: 'much-price',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor],
  standalone: true,
  templateUrl: './much-price.component.html',
  styleUrl: './much-price.component.css'
})
export class MuchPriceComponent {
  @Input() assets: any[] = [];
}