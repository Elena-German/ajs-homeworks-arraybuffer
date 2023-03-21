import Daemon from '../Daemon';

test.each([
  [2, '2', 9],
  [11, '11', 0],
  [0, '0', 10],
])('атака без дурмана на ячейку № %i - ', (distance, description, expected) => {
  const player = new Daemon('leo');
  player.stoned = false;
  player.attack = distance;
  expect(player.attack).toBe(expected);
});

test.each([
  [2, '3', 4],
  [11, '11', 0],
  [0, '0', 10],
])('атака c дурманом на ячейку № %i - ', (distance, description, expected) => {
  const player = new Daemon('leo');
  player.stoned = true;
  player.attack = distance;
  expect(player.attack).toBe(expected);
});

test('тест геттера stoned', () => {
  const player = new Daemon('leo');
  player.stoned = true;
  expect(player.stoned).toBe(true);
});
