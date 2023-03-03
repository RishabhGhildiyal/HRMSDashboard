import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-add-pitch',
  templateUrl: './add-pitch.component.html',
  styleUrls: ['./add-pitch.component.scss']
})
export class AddPitchComponent implements OnInit {
  infoForm!:FormGroup;
  today=new Date();
  url:any
  constructor(private fb:FormBuilder, private service: FormService,
    ) {
    this.infoForm= this.createForm()
  }

  ngOnInit(): void {
  }
  createForm(){
    return this.fb.group({
      pitchName:this.service.getControl('pitchName'),
      empId:this.service.getControl('empId'),
      empTitle:this.service.getControl('empTitle'),
      dateOfBirth:this.service.getControl('dateOfBirth'),
      industry:this.service.getControl('industry'),
      type:this.service.getControl('type')

    })
  }
  valid(){
    this.infoForm.markAllAsTouched();
    // this.snack.open("fill all the field first");
  }
  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }
    // this.snack.open("image uploaded")
    var mimeType = event.target.files[0].type;
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    };
  }

}
