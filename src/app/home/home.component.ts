import { Component, OnInit } from '@angular/core';
import { NbSearchService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value="";
  constructor(private searchService: NbSearchService) { }

  ngOnInit(): void {
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.value = data.term;
      })
  }

}
