import '../css/style.css';
import Team from './Team';
import Character from './Character'; // Если у вас есть класс Character

// Примеры использования
const team = new Team();
const character1 = new Character('John', 'Warrior'); // Пример создания персонажа
const character2 = new Character('Jane', 'Mage');

team.add(character1);
team.addAll(character1, character2);

console.log(team.toArray());
