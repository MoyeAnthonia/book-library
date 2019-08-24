import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  elements: any = [
    { id: 1, name: 'Unscripted' },
    { id: 2, name: 'Rich Dad Poor Dad' },
    { id: 3, name: 'Power' },
  ];

  headElements = ['id', 'Name', '', ''];

  add() {
    this.router.navigate(['/add-book']);
  }
  edit() {
    this.router.navigate(['/edit-book']);
  }
}
