import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  @Input() opened: boolean;
  @Output() burgerNav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitToggleEvent() {
    this.burgerNav.emit(!this.opened);
  }

}
