import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.scss']
})
export class ValidationFormComponent implements OnInit {
  validationForm = this.formBuilder.group({
    name: new FormControl('', { 
      validators: [Validators.required],
      updateOn: 'submit' }),
    email: new FormControl('', { 
      validators: [Validators.email],
      updateOn: 'submit' }),
    password: new FormControl('', { 
      validators: [Validators.required],
      updateOn: 'submit' }),
    confirmPassword: new FormControl('', { 
      validators: [],
      updateOn: 'submit' }),
  });
  
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.validationForm.controls.name);
    this.isSubmitted = true;
  }

  isInvalidEmail() {
    return this.validationForm.controls.email.invalid;
  }

  blankName() {
    if(this.isSubmitted) {
      return this.validationForm.controls.name.invalid;
    }
    else {
      return false;
    }
  }

  blankPassword() {
    if(this.isSubmitted) {
      return this.validationForm.controls.password.invalid;
    }
    else {
      return false;
    }
  }

  passwordMissmatch() {
    if(this.isSubmitted && this.validationForm.controls.password.valid) {
      if(this.validationForm.controls.password.value === this.validationForm.controls.confirmPassword.value) {
        return false;
      }
      else {
        return true;
      }
    }
  }
}
