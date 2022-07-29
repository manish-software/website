import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/core/meta.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit, AfterViewInit {
  // matcher: MediaQueryList | undefined;
  // mediaObservar: Observable<any> | undefined;
  panelOpenState = false;

  packages: any = [
    {
      id: 'Android App Development',
      development: '$3,000',
      developmentLink: 'https://buy.stripe.com/dR6aHy8AZ3OegOA3cc',
      feature: '$600',
      featureLink: 'https://buy.stripe.com/7sI16YbNbckK41OcMT',
      maintenance: '$300',
      maintenanceLink: 'https://buy.stripe.com/bIY16Y9F3esS9m86oy',
    },
    {
      id: 'iOS App Development',
      development: '$4,000',
      developmentLink: 'https://buy.stripe.com/dR6aHy8AZ3OegOA3cc',
      feature: '$800',
      featureLink: 'https://buy.stripe.com/9AQeXO3gF2Ka41O6os',
      maintenance: '$400',
      maintenanceLink: 'https://buy.stripe.com/00g6ri3gF4Sicyk6ot',
    },
    {
      id: 'Android & iOS App Development',
      development: '$6,000',
      developmentLink: 'https://buy.stripe.com/dR6aHy8AZ3OegOA3cc',
      feature: '$1200',
      featureLink: 'https://buy.stripe.com/bIY7vm8AZ3Oe2XK8wx',
      maintenance: '$600',
      maintenanceLink: 'https://buy.stripe.com/6oE16YaJ75Wm8i4dQZ',
    },
  ];

  services: any = [
    {
      text: 'Business Applications Development',
      href: 'https://storage.googleapis.com/manishsoftwareapp.appspot.com/assets/icons/business-and-trade.png',
      description:
        'Innovative business & enterprise apps will help you track your data in real time.',
    },
    {
      text: 'SaaS Application Development',
      href: 'https://storage.googleapis.com/manishsoftwareapp.appspot.com/assets/icons/saas.png',
      description:
        'Developing web-based, on-demand, or hosted apps with secure managed access.',
    },
    {
      text: 'Educational App Development',
      href: 'https://storage.googleapis.com/manishsoftwareapp.appspot.com/assets/icons/presentation.png',
      description:
        'We design and develop custom Android and iOS Apps to host and live stream extensive courses and content.',
    },
    {
      text: 'Fintech App Development',
      href: 'https://storage.googleapis.com/manishsoftwareapp.appspot.com/assets/icons/smartphone.png',
      description:
        'The Finance mobile application design will track spending, saving, and investing for a better financial future.',
    },
    {
      text: 'E-commerce Application Development',
      href: 'https://storage.googleapis.com/manishsoftwareapp.appspot.com/assets/icons/shopping.png',
      description:
        'Our top android and ios developers will design a custom e-commerce solution tailored to your needs.',
    },
    {
      text: 'Social Media App Development',
      href: 'https://storage.googleapis.com/manishsoftwareapp.appspot.com/assets/icons/network.png',
      description:
        'Social media app connects you with friends, family, colleagues, customers, or clients.',
    },
  ];

  faqs: any = [
    {
      ques: 'Where are Manish Software offices located?',
      ans: 'Manish Software is headquartered and has a research & development center in Gurgaon, India. We are a top mobile app development company with a worldwide app development clientele from the USA, Canada, India, UK, Australia, Malaysia, UAE, South Africa, Indonesia, Italy, Germany, and 50+ countries.',
    },
    {
      ques: 'How much does it cost to develop a mobile app?',
      ans: 'The simple app starts from $3,000 and can go up to $3,00,000 depending on various factors such as the app’s complexity, skills of mobile app developers, location of app development companies, technology, and others.',
    },
    {
      ques: 'Which technology is best for custom mobile app development?',
      ans: 'Google technology stack is the best for mobile app development. Flutter and Firebase are backed by Google and help to create beautiful and successful mobile apps. Manish Software uses Flutter and Firebase as core tech stack for Android, iOS, iPad, and Multi-platform custom mobile app development.',
    },
    {
      ques: 'Who owns your mobile app source code?',
      ans: 'The client is the owner of the source code. You have access to source code from day one with live project management and development updates using GitHub.',
    },
    {
      ques: 'What support do you provide after the completion of a mobile app?',
      ans: 'We provide 45 days of complimentary support for backups, bugs, or any other technical problems. We guide you step by step in case you need any help. After 45 days, optionally, you can subscribe to various available mobile app maintenance packages from our website.',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private metaService: MetaService // public breakpointObserver: BreakpointObserver, // public mediaMatcher: MediaMatcher
  ) {}

  ngOnInit(): void {
    this.metaService.setPageMata(
      'Best Custom Mobile App Design & Development Service Company',
      'Manish Software is the best affordable custom mobile app design & development company providing iPhone App Development, Android App Development, Multi-platform Mobile Apps, iPad Application Development, Custom Software Development, Flutter App Development, and Firebase App Development Services.',
      'https://res.cloudinary.com/manish-software/image/upload/v1630483590/website/best-mobile-app-development-company.jpg'
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
