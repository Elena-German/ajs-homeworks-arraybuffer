/* eslint no-underscore-dangle: 0 */
import Character from './Character';

export default class Stoned extends Character {
  get attack() {
    return this._attack;
  }

  set attack(distance) {
    if (distance < 1) {
      this._attack = 10;
    } else if (distance >= 1 && distance < 11) {
      this._attack = (10 * (110 - (distance * 10))) / 100;
      if (this._stoned) {
        this._attack -= (Math.log2(distance) * 5);
      }
    } else {
      this._attack = 0;
    }
  }

  set stoned(flag) {
    if (flag) {
      this._stoned = true;
    } else { this._stoned = false; }
  }

  get stoned() {
    return this._stoned;
  }
}
