import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-covid-dialog',
  templateUrl: './covid-dialog.component.html',
  styleUrls: ['./covid-dialog.component.scss']
})
export class CovidDialogComponent implements OnInit {
  covidForm!: FormGroup;

  constructor(private _fb:FormBuilder,private formService: FormService) {
    this.covidForm = this.createForm();

   }
   createForm() {
    return this._fb.group({
      title:['',[Validators.required]],
      mobile:['',[Validators.required]],
      address:['',[Validators.required]],
      description:['',[Validators.required]],

    });
  }

  ngOnInit(): void {
  }


  onSubmit(){
    this.covidForm.markAllAsTouched()
  }
}
