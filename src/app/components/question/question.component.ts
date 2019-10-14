import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() category: string;
  @Input() question: string;
  @Input() correct: string;
  @Input() incorrect: string[];
  @Output() addPoint = new EventEmitter();
  options: string[];
  answer: string;
  isCorrect: boolean;
  answered: boolean;

  constructor() { }

  ngOnInit() {
    this.options = [...this.incorrect, this.correct].sort(() => Math.random() - 0.5);
  }

  onAswerSelect() {
    this.isCorrect = this.answer === this.correct;
    this.answered = true;
    if (this.isCorrect) {
      this.addPoint.emit(1);
    }
  }
}
