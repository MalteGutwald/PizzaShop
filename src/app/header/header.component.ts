import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  isMenuOpened: boolean = false;

    toggleMenu(): void {
      this.isMenuOpened = !this.isMenuOpened;
    }

    clickedOutside(): void {
      this.isMenuOpened = false;
    }
}
