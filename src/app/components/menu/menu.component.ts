import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  path: string = '';

  constructor(router: Router) {
    router.events.forEach((item) => {
      if (item instanceof NavigationEnd) {
        if (item.url !== '/') this.path = item.url;
      }
    });
  }

  ngOnInit(): void {
  }
}
