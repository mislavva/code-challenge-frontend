import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Output() submitLogin: EventEmitter<{ email: string, password: string; }> = new EventEmitter();

  public loginForm: FormGroup;
  public showPassword = false;

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }

  public get formFields() { return this.loginForm.controls; }

  private initializeForm(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.+[0-9])(?=.+[a-zA-z])/)
      ])
    });
  }
}
