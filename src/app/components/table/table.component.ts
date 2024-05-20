import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/json.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  searchQuery: string = '';
  data: any[] = [];
  newUser: any = {};

  constructor(private apiService: JsonService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe((response: any) => {
      this.data = response;
    });

    this.loadData();
  }

  loadData() {
    this.apiService.getData().subscribe((response: any) => {
      this.data = response;
    });
  }

  removeItem(firstName: string) {
    this.data = this.data.filter(item => item.first_name !== firstName);
  }

  addNew() {
    this.data.push({
      first_name: this.newUser.first_name,
      second_name: this.newUser.second_name,
      last_name: this.newUser.last_name
    });

    // this.newUser = {};
  }

}
