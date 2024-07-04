import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-drug-details-dialog',
  templateUrl: './drug-details-dialog.component.html',
  styleUrls: ['./drug-details-dialog.component.css']
})
export class DrugDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
