import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/core/meta.service';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.css'],
})
export class WebDesignComponent implements OnInit, AfterViewInit {
  // matcher: MediaQueryList | undefined;
  // mediaObservar: Observable<any> | undefined;
  panelOpenState = false;

  item: any = {
    development: '$300',
    developmentLink: 'https://buy.stripe.com/8wM6ri7wV1G6fKw4gz',
    feature: '$60',
    featureLink: 'https://buy.stripe.com/cN24ja3gF4Si69WaEV',
    maintenance: '$30',
    maintenanceLink: 'https://buy.stripe.com/3cs16YcRf98y2XK8wO',
  };

  services: any = [
    {
      text: 'Personal Website Design',
      href: 'https://storage.googleapis.com/manishsoftwareapp.appspot.com/assets/icons/personal.png',
      description:
        'Professional personal website design for you. Example bio, portfolio, resume, blog, or personal branding websites.',
    },
    {
      text: 'Small Business Website Design',
      href: 'https://storage.googleapis.com/manishsoftwareapp.appspot.com/assets/icons/small-business.png',
      description:
        'Website design for Small businesses such as professional, scientific, and technical service; retailing; wholesaling; manufacturing; and hotels and restaurants.',
    },
    {
      text: 'Company Website Design',
      href: 'https://storage.googleapis.com/manishsoftwareapp.appspot.com/assets/icons/company.png',
      description:
        'Company website designs optimized for loading speed and lead generation.',
    },
    {
      text: 'Corporate Website Design',
      href: 'https://storage.googleapis.com/manishsoftwareapp.appspot.com/assets/icons/corporate.png',
      description:
        'Corporate website designing with custom UI/UX methodologies to give a seamless web experience for your audience.',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private metaService: MetaService // public breakpointObserver: BreakpointObserver, // public mediaMatcher: MediaMatcher
  ) { }

  ngOnInit(): void {
    this.metaService.setPageMata(
      'Top Website Design & Development Company — Manish Software',
      'Manish Software is the top mobile responsive website design & development company providing commercial web design service for corporates and small businesses.',
      'https://res.cloudinary.com/manish-software/image/upload/v1638532423/website/top_website_design_services_company_fiqkre.jpg'
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
