import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('toggle') toggle!:ElementRef;
  @ViewChild('nav') nav!:ElementRef;

  navActive = false;

  constructor(){

  }

  toggleNav(){
    const toggle= this.toggle.nativeElement;
    const nav = this.nav.nativeElement;
    nav.classList.toggle('active');
    this.navActive = !this.navActive;
  }



}
