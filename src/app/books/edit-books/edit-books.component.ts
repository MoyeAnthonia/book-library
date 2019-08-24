import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {

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
    this.route.navigate(['/book']);
  }
}