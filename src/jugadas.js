
class game {
  constructor() {
    this.score = 0;
    this.rolls = [];
    this.currentRoll = 0;
  }

  roll(pins) {
    this.score += pins;
    this.rolls.push(pins);
  }

  getScore() {
    return this.score;
  }

  rollmany(n, pins) {
    for (let i = 0; i < n; i++) {
      this.roll(pins);
    }
  }

  rollSpare() {
    this.roll(5);
    this.roll(5);
  }
}

export default game;