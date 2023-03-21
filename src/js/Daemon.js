import Stoned from './Stoned';

export default class Daemon extends Stoned {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.defence = 40;
  }
}
