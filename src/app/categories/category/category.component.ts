import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  elements: any = [
    { id: 1, name: 'Educational' },
    { id: 2, name: 'Inspirational' },
    { id: 3, name: 'Religious' },
  ];

  headElements = ['id', 'Name', '', ''];

  add() {
    this.router.navigate(['/add-category']);
  }
  edit() {
    this.router.navigate(['/edit-category']);
  }
}
