import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

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
    this.route.navigate(['/book']);
  }
}
