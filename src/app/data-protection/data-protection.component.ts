import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss']
})
export class DataProtectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Scroll to top position on init
    document.getElementById('drawerContainer').scrollIntoView();

  }

}
