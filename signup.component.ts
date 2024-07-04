import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from "../../../services/service";
import { ToastrService } from "ngx-toastr";
import {Speciality} from "../../../utils/enums";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formGroup!: FormGroup;
  specialities = Object.values(Speciality);

  constructor(
    private formBuilder: FormBuilder,
    private service: ApiService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      speciality: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.service.setUser(this.formGroup.value).subscribe(() => {
        this.toastr.info('User created successfully');
        this.router.navigate(['/healthcare-professionals']);
      });
    }
  }

  passwordMatchValidator(formGroup: FormGroup): void {
    const confirmPasswordControl = formGroup.get('confirmPassword');
    const passwordControl = formGroup.get('password');
    if (confirmPasswordControl && passwordControl) {
      const errors = passwordControl.value !== confirmPasswordControl.value ? { passwordMatch: true } : null;
      confirmPasswordControl.setErrors(errors);
    }
  }
}
