import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  addForm: FormGroup;

  constructor(private fb: FormBuilder, private route: Router) {
    this.addForm = this.fb.group({
      title: ['', [Validators.required]],
    })
  }

  ngOnInit() {
  }

  update() {

  }
  
  back() {
    this.route.navigate(['/category']);
  }
}
