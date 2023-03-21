/* eslint no-underscore-dangle: 0 */
const typeList = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Игрок не создан. Формат имени персонажа - строка, min 2 символа, max 10.');
    }

    if (!typeList.includes(type)) {
      throw new Error('Игрок не создан. Тип персонажа неопределен. Требуется один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }
}
