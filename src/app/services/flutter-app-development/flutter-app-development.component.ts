import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/core/meta.service';

@Component({
  selector: 'app-flutter-app-development',
  templateUrl: './flutter-app-development.component.html',
  styleUrls: ['./flutter-app-development.component.css'],
})
export class FlutterAppDevelopmentComponent implements OnInit, AfterViewInit {
  // matcher: MediaQueryList | undefined;
  // mediaObservar: Observable<any> | undefined;
  panelOpenState = false;


  constructor(
    private route: ActivatedRoute,
    private metaService: MetaService // public breakpointObserver: BreakpointObserver, // public mediaMatcher: MediaMatcher
  ) {}

  ngOnInit(): void {
    this.metaService.setPageMata(
      'Top Flutter Mobile App Development Services Company — Manish Software',
      'Manish Software is the leading flutter app development company providing flutter mobile application development services for Android & iOS.',
      'https://res.cloudinary.com/manish-software/image/upload/v1645376901/website/flutter_app_development_company_waalqv.jpg'
    );
    // this.mediaObservar = this.breakpointObserver.observe([
    //   Breakpoints.Small,
    //   Breakpoints.HandsetPortrait,
    // ]);
  }

  ngAfterViewInit() {
    this.route.queryParamMap.subscribe((i: any) => {
      if (i.params.id) {
        this.scrollToElement(i.params.id);
      }
    });
  }

  scrollToElement(id: string): void {
    return document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
