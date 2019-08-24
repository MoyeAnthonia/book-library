import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addForm: FormGroup;

  constructor(private fb: FormBuilder, private route: Router) {
    this.addForm = this.fb.group({
      title: ['', [Validators.required]],
    })
  }

  ngOnInit() {
  }

  create() {

  }
  
  back() {
    this.route.navigate(['/category']);
  }
}
