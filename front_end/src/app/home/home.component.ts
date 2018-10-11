import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
// import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
 products: any;

  constructor(
      private data: DataService,
      
  ) { }

  async ngOnInit() {
     
  }

}
