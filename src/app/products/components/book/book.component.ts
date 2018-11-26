import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../../models/BookModel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: BookModel;
  @Output() buyButtonClicked = new EventEmitter<BookModel>();

  constructor(private router: Router){}

  ngOnInit(){}

  onBuyButtonClicked() {
    this.buyButtonClicked.emit(this.book);
  }
  onViewDetails(event: any): void {
   const link = ['/books', this.book.id];
   console.log(link)
   this.router.navigate(link);
 }
}
