import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { DrugDetailsDialogComponent } from "../drug-details-dialog/drug-details-dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-drug-search',
  templateUrl: './drug-search.component.html',
  styleUrls: ['./drug-search.component.css']
})
export class DrugSearchComponent implements OnInit {
  searchControl = new FormControl();
  filteredOptions: Observable<any[]>;

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      switchMap(value => this.fetchDrugs(value))
    );
  }

  fetchDrugs(query: string): Observable<any[]> {
    if (!query) {
      return new Observable<any[]>((observer) => observer.next([]));
    }

    const params = new HttpParams().set('terms', query);
    return this.http.get<any>('https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search', { params }).pipe(
      map(response => response[1] || [])
    );
  }

  onDrugSelected(event: any) {
    const drug = event.option.value;
    this.fetchDrugDetails(drug).subscribe(details => {
      this.dialog.open(DrugDetailsDialogComponent, {
        data: this.formatDrugDetails(details)
      });
      console.log('Drug details:', details);
    });
  }

  fetchDrugDetails(drug: string): Observable<any> {
    const params = new HttpParams().set('terms', drug);
    return this.http.get<any>('https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?ef=STRENGTHS_AND_FORMS&authenticity_token=', { params }).pipe(
      map(response => response[2] || {})
    );
  }

  formatDrugDetails(details: any): any {
    if (details && details.STRENGTHS_AND_FORMS) {
      return details.STRENGTHS_AND_FORMS[0].map((form: string) => {
        return { form: form };
      });
    }
    return [];
  }
}
