import { Component, OnInit } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { faAlignJustify, faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrls: ['./top-navigation-bar.component.scss'],
})
export class TopNavigationBarComponent implements OnInit {
  navbarCollapsed = true;

  constructor() {}

  ngOnInit(): void {}

  toggleNavbarCollapsing(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
