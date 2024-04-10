import { Component, Input } from '@angular/core';
import { ExchangeData } from '../../services/cex.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'wow-cex',
  standalone: true,
  imports: [NgFor],
  templateUrl: './wow-cex.component.html',
  styleUrl: './wow-cex.component.css'
})
export class WowCexComponent {
  @Input() wowCex: ExchangeData[] = [];
}
