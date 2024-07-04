import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/service';
import { Treatment } from '../models/models';
import {TreatmentStatus} from "../../../utils/enums";

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  protected readonly TreatmentStatus = TreatmentStatus;
  treatments!: Treatment[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTreatments().subscribe(data => this.treatments = data);
  }

  changeTreatmentStatus(treatment: Treatment): void {
    this.apiService.setTreatmentDone(treatment.id).subscribe(
       () => {
         const index: number = this.treatments.findIndex(potentialTreatment => potentialTreatment.id == treatment.id);
         if (index > -1) {
           this.treatments[index].treatmentStatus = TreatmentStatus.DONE;
         }
       },
      error => {
        console.error('Error updating treatment status', error);
      }
    );
  }
}
