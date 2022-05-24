import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @Output()
  public login = new EventEmitter()

  public onLogin(): void {
    this.login.emit();
  }

  constructor() {}

  ngOnInit(): void {
  }
}