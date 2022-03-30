import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { faAlignJustify, faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrls: ['./top-navigation-bar.component.scss'],
})
export class TopNavigationBarComponent implements OnInit {
  @Output() backgroundImageLink: EventEmitter<string> = new EventEmitter<string>();
  navbarCollapsed = true;

  @HostListener('window:resize', ['$event'])
  setBackgroundImage(): void {
    const windowSize = window.screen.width;
    if (windowSize > 575 && windowSize <= 992) {
      this.backgroundImageLink.emit('../assets/home/background-home-tablet.jpg');
    } else if (windowSize > 992) {
      this.backgroundImageLink.emit('../assets/home/background-home-desktop.jpg');
    } else {
      this.backgroundImageLink.emit('../assets/home/background-home-mobile.jpg');
    }
  }


  constructor() {}

  ngOnInit(): void {
    this.setBackgroundImage();
  }

  toggleNavbarCollapsing(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
