import Daemon from '../Daemon';

test('creat new right player', () => {
  const player = new Daemon('leo', 'Daemon');
  expect(player).toEqual({
    name: 'leo',
    type: 'Daemon',
    health: 100,
    level: 1,
    defence: 40,
  });
});

test('creat new player with a short name', () => {
  function createPlayer() {
    return new Daemon('l', 'Daemon');
  }
  expect(createPlayer).toThrow(new Error('Игрок не создан. Формат имени персонажа - строка, min 2 символа, max 10.'));
});

test('creat new player with a long name', () => {
  function createPlayer() {
    return new Daemon('leonardo2023', 'Daemon');
  }
  expect(createPlayer).toThrow(new Error('Игрок не создан. Формат имени персонажа - строка, min 2 символа, max 10.'));
});

test('creat new player with a not correct type', () => {
  function createPlayer() {
    return new Daemon('leo', 'Daem');
  }
  expect(createPlayer).toThrow(new Error('Игрок не создан. Тип персонажа неопределен. Требуется один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie.'));
});
