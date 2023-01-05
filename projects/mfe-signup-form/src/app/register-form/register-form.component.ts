import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    p1: new FormControl(''),
    p2: new FormControl('')
  });

  registerUser() {
    alert(
      `
      Username: ${this.registerForm.value.username}
      Email: ${this.registerForm.value.email}
      P1: ${this.registerForm.value.p1}
      P2: ${this.registerForm.value.p2}
      `
    );
  }
}
