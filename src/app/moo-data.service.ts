import { Injectable } from '@angular/core';

@Injectable()
export class MooDataService {

  cowPuns = [{
    label: "These",
    pun: "How easy is it to milk a cow?",
    answer: "It’s a piece of steak."
  },
  {
    label: "Cow",
    pun: "How do you make a milkshake?",
    answer: "Give a cow a pogo stick."
  },
  {
    label: "Puns",
    pun: "What do cow detectives do?",
    answer: "They go on steakouts"
  },
  {
    label: "Are",
    pun: "Where do cows live in the US?",
    answer: "Moo York"
  },
  {
    label: "So",
    pun: "Where did the bull lose all his money?",
    answer: "The cowsino"
  },
  {
    label: "Hilarious!",
    pun: "What do you call a cow with a twitch?",
    answer: "Beef jerky"
  }];

  constructor() { }

}
