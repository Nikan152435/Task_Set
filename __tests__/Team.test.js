import Team from '../src/Team';
import Character from '../src/Character';

test('should add character to team', () => {
    const team = new Team();
    const character = new Character('John', 'Warrior');
    team.add(character);
    expect(team.toArray()).toContain(character);
});

test('should not add duplicate character to team', () => {
    const team = new Team();
    const character = new Character('John', 'Warrior');
    team.add(character);
    expect(() => team.add(character)).toThrow('Character is already in the team.');
});

test('should add multiple characters to team', () => {
    const team = new Team();
    const character1 = new Character('John', 'Warrior');
    const character2 = new Character('Jane', 'Mage');
    team.addAll(character1, character2);
    expect(team.toArray()).toContain(character1);
    expect(team.toArray()).toContain(character2);
});