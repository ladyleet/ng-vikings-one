import { Injectable } from '@angular/core';

@Injectable()
export class BananaDataService {

    bananaPuns = [{ 
    pun: 'Why do bananas wear suntan lotion?',
    answer: 'Because they peel.' 
  },
  { 
    pun: 'Why don’t bananas snore?',
    answer: 'Because they don’t want to wake up the rest of the bunch.' 
  },
  { 
    pun: 'What do you call a banana who gets all the girls?',
    answer: 'A banana smoothie.' 
  },
  { 
    pun: 'How do monkeys get down the stairs?',
    answer: 'They slide down the banana-ster.' 
  },
  { 
    pun: 'Why did the banana go see the doctor?',
    answer: 'The banana was not peeling very well.' 
  },
  { 
    pun: 'What’s the easiest way to make a banana split',
    answer: 'Cut it in half.' 
  }];

  constructor() { }

}
