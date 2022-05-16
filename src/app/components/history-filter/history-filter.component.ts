import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterService } from 'src/app/service/filter.service';

@Component({
  selector: 'app-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.css']
})
export class HistoryFilterComponent implements OnInit {

  form: FormGroup;

  constructor(private filterService: FilterService) {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.form = new FormGroup({
      start: new FormControl(new Date(year, 0, 1)),
      end: new FormControl(new Date(year, month, day)),
    });
  }

  filterByDates() {
    this.filterService.broadcast(this.form.value);
  }

  ngOnInit(): void {
  }

}
