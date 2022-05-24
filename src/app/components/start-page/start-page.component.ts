import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  public isGuest: boolean = false

  public isUser(): void {
    this.isGuest = !this.isGuest;
  }

  constructor(private Router: Router) {
    this.Router.events.subscribe(console.log);
  }

  ngOnInit(): void {
  }
}