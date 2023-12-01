import { Component, OnInit } from '@angular/core';
import{ HttpClient} from  '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  TrendingItems:any;
  AllItems:any

  constructor( private http: HttpClient) { }
  ngOnInit(): void {
    this.getTrendingItems();
    
  }
  getTrendingItems() {
    this.http
    .get(`../assets/data/TrendingItems.json`)
    .subscribe((items) => {
      this.TrendingItems = items;
      console.log(this.TrendingItems)
    });
  }
  getAllItems() {
    this.http
    .get(`../assets/data/AllItems.json`)
    .subscribe((items) => {
      this.TrendingItems = items;
      console.log(this.AllItems)
    });
  }
}
