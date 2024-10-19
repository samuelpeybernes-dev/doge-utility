import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'dropdown',
  standalone: true,
  imports: [FormsModule, AutoCompleteModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  @Input() listData: any[] | undefined;
  @Input() selectedLabel: string;
  @Output() emitSelectedLabel = new EventEmitter<string>();

  filteredLabel: any[];

  filterLabel(event: AutoCompleteCompleteEvent) {
    let query = event.query.toLowerCase();

    if (this.listData) {
      this.filteredLabel = this.listData.filter((country) =>
        country.toLowerCase().startsWith(query)
      );
    }
  }

  onLabelSelect() {
    this.emitSelectedLabel.emit(this.selectedLabel);
  }
}
