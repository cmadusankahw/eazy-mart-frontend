import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.secondFormGroup = this._formBuilder.group({
      addressl1: ['', Validators.required],
      addressl2: [''],
      contactno: ['', Validators.maxLength(10) ]
    });
  }

  signUp(){
    alert('Successfully Registered!');
  }

  getData(){
    alert('First Name : ' + this.firstFormGroup.value.firstName);
    alert('Last Name : ' + this.firstFormGroup.value.lastName);
    alert('Contact No : ' + this.secondFormGroup.value.contactno);
  }

}
