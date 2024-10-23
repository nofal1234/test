import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contant',
  standalone: true,
  imports: [NgIf],
  templateUrl: './contant.component.html',
  styleUrl: './contant.component.css'
})
export class ContantComponent {
  submitted = false;
  errors = {
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  };

  onSubmit(event: Event) {
    event.preventDefault(); 
    this.clearErrors();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const mobile = (document.getElementById('mobile') as HTMLInputElement).value;
    const subject = (document.getElementById('subject') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    let isValid = true;

    if (!name || name.length < 3) {
      this.errors.name = 'Name must be at least 3 characters long.';
      isValid = false;
    }

    if (!email || !this.validateEmail(email)) {
      this.errors.email = 'Invalid email format.';
      isValid = false;
    }

    if (!mobile || mobile.length < 10) {
      this.errors.mobile = 'Mobile number must be at least 10 digits.';
      isValid = false;
    }

    if (!subject) {
      this.errors.subject = 'Subject is required.';
      isValid = false;
    }

    if (!message || message.length < 10) {
      this.errors.message = 'Message must be at least 10 characters long.';
      isValid = false;
    }

    if (isValid) {
      this.submitted = true;
     
      setTimeout(() => {
        this.submitted = false;
      }, 2000);

      (document.getElementById('name') as HTMLInputElement).value = '';
      (document.getElementById('email') as HTMLInputElement).value = '';
      (document.getElementById('mobile') as HTMLInputElement).value = '';
      (document.getElementById('subject') as HTMLInputElement).value = '';
      (document.getElementById('message') as HTMLTextAreaElement).value = '';
    }
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  clearErrors() {
    this.errors = {
      name: '',
      email: '',
      mobile: '',
      subject: '',
      message: ''
    };
  }
}