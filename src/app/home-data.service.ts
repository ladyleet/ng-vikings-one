import { Injectable } from '@angular/core';

@Injectable()
export class HomeDataService {

  puns = [{
    type: "cat",
    image: "cat-emoji.jpg",
    altText: "cat emoji",
    route: "/meow",
    chip1: "cat",
    chip2: "meow",
    chip3: "kitty"  
  },
  {
    type: "banana",
    image: "banana-emoji.jpg",
    altText: "banana emoji",
    route: "/banana",
    chip1: "banana",
    chip2: "fruit",
    chip3: "yellow"  
  },
  {
    type: "cow",
    image: "cow-emoji.jpg",
    altText: "cow emoji",
    route: "/moo",
    chip1: "cow",
    chip2: "animal",
    chip3: "moo"  
  },
  {
    type: "duck",
    image: "duck-emoji.jpg",
    altText: "duck emoji",
    chip1: "duck",
    chip2: "quack",
    chip3: "bird",
    toolTip: "oops, this isn't done yet"  
  }];

  constructor() { }

}
