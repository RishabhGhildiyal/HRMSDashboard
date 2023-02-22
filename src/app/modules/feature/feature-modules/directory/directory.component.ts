import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  infoForm!: FormGroup;
  department: string[] = ['Angular', 'Node js', 'IOS', 'Android'];

  constructor(private fb: FormBuilder, private service: FormService) {
    this.infoForm = this.createForm();
  }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    return this.fb.group({
      firstName: this.service.getControl('firstName')
    });
  }
}
