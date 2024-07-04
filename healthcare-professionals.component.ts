import {Component, OnInit} from '@angular/core';
import {HealthcareProfessional} from "../models/healtcare-professional";
import {ApiService} from "../../../services/service";

@Component({
  selector: 'app-healthcare-professionals',
  templateUrl: './healthcare-professionals.component.html',
  styleUrls: ['./healthcare-professionals.component.css']
})
export class HealthcareProfessionalsComponent implements OnInit {
  healthcareProfessionals: HealthcareProfessional[] = [];

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe((professionals: HealthcareProfessional[]) => this.healthcareProfessionals = professionals);
  }
}
