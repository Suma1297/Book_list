import { Component, OnInit } from '@angular/core';


interface Book {
  title: string;
  price: number;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})



export class BookListComponent implements OnInit {

  Minprice: number | null = null;
  Maxprice: number | null = null;

  books:Book[] = [
    { title: 'book1', price: 20 },
    { title: 'book2', price: 28 },
    { title: 'book3', price: 40 }
  ]


  newBook = { 
    title:' ',
    price: 0
  }

  AddBook(){
    const addbook = {...this.newBook}
    this.books.push(addbook)
    this.newBook={title:'', price:0}
    this.filter();
    console.log(this.books)
  }

  filteredbooks = [...this.books]

  filter() {
    this.filteredbooks = this.books.filter(book => {
      const isminpricevalid = this.Minprice != null ? book.price >= this.Minprice : true
      const ismaxpricevalid = this.Maxprice != null ? book.price <= this.Maxprice : true
      return ismaxpricevalid && isminpricevalid
    })
  }

  reset() {
    this.Minprice = null;
    this.Maxprice = null;
    this.filteredbooks = [...this.books]
  }



  ngOnInit(): void {
  }

}
