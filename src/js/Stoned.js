/* eslint no-underscore-dangle: 0 */
import Character from './Character';

export default class Stoned extends Character {
  #attack = 0;
  #distance = 1;
  #stoned = false;
  #realAttack = 0;

  get attack() {
    if (this.#distance == 1) {
      this.#attack = this.#realAttack;
    }
    if (this.#distance > 1 && this.#distance < 11) {
      this.#attack = (this.#realAttack * (110 - (this.#distance * 10))) / 100;
      if (this.#stoned) {
        this.#attack = this.#attack - (Math.log2(this.#distance) * 5);
      }
    } else if (this.#distance >= 11) {
      this.#attack = 0;
    }
    return this.#attack;
  }

  set attack(attack) {
    this.#realAttack = attack;
    this.#attack = attack;
  }

  set stoned(stoned) {
    this.#stoned = Boolean(stoned);
  }

  get stoned() {
    return this.#stoned;
  }

  set distance(distance) {
    this.#distance = Math.max(1, distance);
  }
}
