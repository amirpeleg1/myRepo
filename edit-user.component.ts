import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from "../../../services/service";
import { ButtonAction, Status, Speciality } from "../../../utils/enums";
import { User } from "../models/models";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  signupForm!: FormGroup;
  errorMessage!: string;
  user!: User;
  status!: Status;
  buttonAction!: ButtonAction;
  specialities: string[] = Object.values(Speciality);

  constructor(
    private formBuilder: FormBuilder,
    private service: ApiService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      speciality: ['', Validators.required],
    });

    this.service.userSubject.subscribe((user: User) => {
      if (user?.id) {
        this.status = user.status as Status;
        this.user = user;
        this.signupForm.patchValue(user);
        this.adjustActionButton();
      }
    });
  }

  onEdit(): void {
    if (this.signupForm.valid) {
      this.service.setUser({ ...this.user, ...this.signupForm.value }).subscribe(() => {
        this.toastr.info('User edited successfully');
        this.signupForm.reset();
      });
    }
  }

  toggleActivation(): void {
    this.service.toggleActivation(this.user.id, this.status).subscribe(() => {
      if (this.status === Status.INACTIVE) {
        this.user.status = Status.ACTIVE;
        this.status = Status.ACTIVE;
      } else if (this.user.status === Status.ACTIVE) {
        this.user.status = Status.INACTIVE;
        this.status = Status.INACTIVE;
      }
      this.toastr.info(`${this.buttonAction}d user successfully!`);
      this.adjustActionButton();
    });
  }

  adjustActionButton(): void {
    if (this.status === Status.INACTIVE) {
      this.buttonAction = ButtonAction.ACTIVATE;
    } else if (this.status === Status.ACTIVE) {
      this.buttonAction = ButtonAction.DEACTIVATE;
    }
  }
}
