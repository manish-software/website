import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  path: string = '';

  constructor(
    private title: Title,
    private meta: Meta,
    router: Router,
    @Inject(DOCUMENT) private doc: any
  ) {
    router.events.forEach((item) => {
      if (item instanceof NavigationEnd) {
        if (item.url !== '/') this.path = item.url;
      }
    });
  }

  setPageMata(title: string, description: string, imageURL: string) {
    this.title.setTitle(title);

    this.meta.updateTag({
      name: 'description',
      content: description,
    });
    this.meta.updateTag({
      property: 'og:title',
      content: title,
    });
    this.meta.updateTag({
      property: 'og:description',
      content: description,
    });
    this.meta.updateTag({
      property: 'og:url',
      content: `https://manishsoftware.com${this.path}/`,
    });

    this.meta.updateTag({
      property: 'og:image',
      content: imageURL,
    });
    this.meta.updateTag({
      property: 'og:image:alt',
      content: title,
    });


    let links = this.doc.getElementsByTagName('link');
    links[0].setAttribute('href', `https://manishsoftware.com${this.path}/`);
  }
}
