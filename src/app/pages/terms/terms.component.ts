import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/core/meta.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css'],
})
export class TermsComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setPageMata(
      'Terms of Service — Manish Software',
      'To provide our mobile app development service. We need to obtain your agreement to our Terms of Service.',
      'https://res.cloudinary.com/manish-software/image/upload/v1630483566/website/manish-software-icon.jpg'
    );
  }
}
