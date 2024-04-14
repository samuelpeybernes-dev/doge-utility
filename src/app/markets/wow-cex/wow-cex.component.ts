import { Component } from '@angular/core';
import { Cex as ExchangeData } from '../../interfaces/cex.interface';
import { NgFor } from '@angular/common';
import { CexService} from '../shared/cex.service';

@Component({
  selector: 'wow-cex',
  standalone: true,
  imports: [NgFor],
  templateUrl: './wow-cex.component.html',
  styleUrl: './wow-cex.component.css'
})
export class WowCexComponent {
  wowCex: ExchangeData = {} as ExchangeData; 

  constructor(private cexService: CexService) {}

  ngOnInit() {
    this.fetchData(); 
  }

  fetchData() {
    this.cexService.fetchWowCex().subscribe(
      data => {
          this.wowCex = data;
      },
      error => {
        console.error("Une erreur s'est produite:", error);
      }
    );
  }
}
