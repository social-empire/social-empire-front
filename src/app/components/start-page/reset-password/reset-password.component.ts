import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  @Output()
  public login = new EventEmitter()

  public onLogin(): void {
    this.login.emit();
  }
  
  constructor() {}

  ngOnInit(): void {
  }
}