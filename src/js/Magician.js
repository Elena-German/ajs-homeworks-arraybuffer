import Stoned from './Stoned';

export default class Magician extends Stoned {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.defence = 40; // защита
  }
}
