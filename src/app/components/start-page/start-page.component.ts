import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  public num: number = 0

  public openLogin(): void {
    this.num = 0;
  }

  public openRegistration(): void {
    this.num = 1;
  }

  public openReset(): void {
    this.num = 2;
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}