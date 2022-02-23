import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css'],
})
export class BackComponent implements OnInit {
  @Input() title: String | undefined;
  constructor(public location: Location, private router: Router) {}

  ngOnInit(): void {}

  back() {
    if (window.history.length > 2) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }
}
