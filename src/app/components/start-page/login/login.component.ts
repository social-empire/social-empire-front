import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output()
  public registration = new EventEmitter()

  public onRegister(): void {
    this.registration.emit();
  }

  @Output()
  public reset = new EventEmitter()

  public onResetter(): void {
    this.reset.emit();
  }

  constructor() {}

  ngOnInit(): void {
  }
}