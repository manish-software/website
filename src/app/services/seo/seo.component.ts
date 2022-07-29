import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/core/meta.service';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.css'],
})
export class SeoComponent implements OnInit, AfterViewInit {
  // matcher: MediaQueryList | undefined;
  // mediaObservar: Observable<any> | undefined;
  panelOpenState = false;

  item: any = {
    development: '$300',
    developmentLink: 'https://buy.stripe.com/3cs9Du4kJckK2XKeVe',
  };

  services: any = [
    {
      text: 'SEO Audit',
      href: 'https://storage.googleapis.com/manishsoftwareapp.appspot.com/assets/icons/audit.png',
      description:
        'We run an SEO audit for Google web vitals to optimize website performance and enhance user experience.',
    },
    {
      text: 'On-Page Optimization',
      href: 'https://storage.googleapis.com/manishsoftwareapp.appspot.com/assets/icons/on-page.png',
      description:
        'On-page SEO includes improving HTML code, content, images, and page structure to rank high and get relevant traffic.',
    },
    {
      text: 'Off-Page Strategy',
      href: 'https://storage.googleapis.com/manishsoftwareapp.appspot.com/assets/icons/off-page.png',
      description:
        'Our Off-page search engine optimization services are keyword research, competitor analysis, and advanced SEO techniques.',
    },
    {
      text: 'Technical SEO Service',
      href: 'https://storage.googleapis.com/manishsoftwareapp.appspot.com/assets/icons/technical.png',
      description:
        'We identify technical errors, fix them, and take corrective actions to ensure proper indexing and page crawling.',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private metaService: MetaService // public breakpointObserver: BreakpointObserver, // public mediaMatcher: MediaMatcher
  ) {}

  ngOnInit(): void {
    this.metaService.setPageMata(
      'Best Search Engine Optimization (SEO) Service Company — Manish Software',
      'Our professional SEO experts help you boost your organic ranking in search engines and get more visitors with best practices and white hat strategies.',
      'https://res.cloudinary.com/manish-software/image/upload/v1639852238/website/seo_services_company_mrjhrc.jpg'
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
