import { Injectable } from '@angular/core';

@Injectable()
export class MeowDataService {

  catPuns = [{
    pun: "What is a cat's favourite song?",
    answer: "Three Blind Mice."
  },
  {
    pun: "What is a cat's favourite colour?",
    answer: "Purrrrrrrple!"
  },
  {
    pun: "What does a cat like to eat on a hot day?",
    answer: "A mice cream cone."
  },
  {
    pun: "Why did the cat put oil on the mouse?",
    answer: "Because it squeaked."
  },
  {
    pun: "What is a cat's way of keeping law & order?",
    answer: "Claw Enforcement."
  },
  {
    pun: "What is a cat's favourite movie?",
    answer: "The Sound of Mewsic."
  }];
  
  constructor() { }

}
