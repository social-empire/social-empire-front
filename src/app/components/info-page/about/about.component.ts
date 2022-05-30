import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public usersCounter: number = 0
  public messagesCounter: number = 0
  public likesCounter: number = 0
  public languagesCounter: number = 0

  constructor() {}

  ngOnInit(): void {
  }
}