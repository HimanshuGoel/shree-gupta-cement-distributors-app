import { filter } from 'rxjs/operators';

import { Location } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(NavbarComponent) navbar!: NavbarComponent;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private element: ElementRef,
    public location: Location
  ) {}
  ngOnInit() {
    this.resetSidebarOnNavigation();
    this.repositionNavbarOnScroll();
  }

  private resetSidebarOnNavigation() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (window.outerWidth > 991) {
          window.document.children[0].scrollTop = 0;
        } else {
          window.document.activeElement!.scrollTop = 0;
        }
        this.navbar.sidebarClose();
      });
  }

  private repositionNavbarOnScroll() {
    const navbar: HTMLElement =
      this.element.nativeElement.children[0].children[0];
    this.renderer.listen('window', 'scroll', () => {
      const number = window.scrollY;
      if (number > 150 || window.pageYOffset > 150) {
        navbar.classList.remove('navbar-transparent');
      } else {
        navbar.classList.add('navbar-transparent');
      }
    });
  }
}
