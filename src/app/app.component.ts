import { Component, OnInit } from '@angular/core';

declare const require
const uuid = require('uuid')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  columns = [
    {
      name: 'Winnie',
      cards: [
        {
          id: uuid(),
          taskDesc: 'Get This done ASAP'
        },
        {
          id: uuid(),
          taskDesc: 'Don\'t sweat this one as much'
        }
      ],
      bgColor: 'bg-purple'
    },
    {
      name: 'Bob',
      cards: [
        {
          id: uuid(),
          taskDesc: 'Nicely done!'
        },
        {
          id: uuid(),
          taskDesc: 'Awesome!'
        }
      ],
      bgColor: 'bg-teal'
    },
    {
      name: 'Thomas',
      cards: [
        {
          id: uuid(),
          taskDesc: 'Get This done ASAP'
        },
        {
          id: uuid(),
          taskDesc: 'Don\'t sweat this one as much'
        }
      ],
      bgColor: 'bg-blue'
    },
    {
      name: 'George',
      cards: [
        {
          id: uuid(),
          taskDesc: 'Nicely done!'
        },
        {
          id: uuid(),
          taskDesc: 'Awesome!'
        }
      ],
      bgColor: 'bg-yellow'
    }
  ]

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('astronauts')) {
      this.columns = JSON.parse(localStorage.getItem('astronauts'))
    }
  }

  saveStuff() {
    localStorage.clear()
    localStorage.setItem('astronauts', JSON.stringify(this.columns))
  }

  addCard(columnName) {
    this.columns.find(column => column.name === columnName)
      .cards.push({
        taskDesc: prompt('Description:'),
        id: uuid()
      })
    this.saveStuff()
  }

  moveCardLeft(column, card) {
    console.log(card);
    const newIndex = this.columns.findIndex(col => col.name === column.name) - 1
    this.columns[newIndex].cards.push(card)
    console.log(this.columns[newIndex].cards);
    column.cards = column.cards.filter(c => c.id !== card.id)
    this.saveStuff()
  }

  moveCardRight(column, card) {
    const newIndex = this.columns.findIndex(col => col.name === column.name) + 1;
    this.columns[newIndex].cards.push(card)
    column.cards = column.cards.filter(c => c.id !== card.id)
    this.saveStuff()
  }
}
