import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebarService.toggle(false, 'sidebar');
  }

}
