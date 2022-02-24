import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  list = ``;
  rows = 0;
  result: any = {};
  tries = 0;
  constructor() { }

  ngOnInit() {
    const tempList = localStorage.getItem('list');
    tempList !== null ? this.list = tempList : null;
  }

  generateRandom() {
    const listArray = this.list.split(/\r\n|\r|\n/);
    const min = 0;
    const max = listArray.length - 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const random = listArray[randomNumber];
    console.log(listArray.length, randomNumber);
    if (!random.length && this.tries <= max) {
      this.tries++;
      this.generateRandom();
    } else if(this.tries > max) {
      alert(`Tried ${max + 1} times with no values`);
      this.tries = 0;
    } else {
      this.tries = 0;
      this.randomByInput(random, randomNumber);
    };
  }

  randomByInput(random, randomNumber) {
    this.result = { random, line: randomNumber + 1, show: true };
    localStorage.setItem('list', this.list);
  }
}
