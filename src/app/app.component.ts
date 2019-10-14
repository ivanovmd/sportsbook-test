import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { tap } from 'rxjs/operators';

const CATEGORIES_MAP = [
  {name: 'any', value: 0},
  {name: 'general', value: 9},
  {name: 'movies', value: 11},
  {name: 'sports', value: 21}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sportsbook';
  questions;
  category = 0;
  categories = CATEGORIES_MAP;
  loading = false;
  points = 0;

  constructor(
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  onCategoryChange() {
    this.getQuestions({category: this.category});
  }

  getQuestions(options?) {
    this.loading = true;
    this.api.getQuestions(options)
      .subscribe(questions => {
        this.questions = questions;
        this.loading = false;
      });
  }

  onAddPoint() {
    this.points++;
  }

  updateQuestions() {
    this.getQuestions({category: this.category});
  }
}
