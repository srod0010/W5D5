// Towers of Hanoi Game

class Game {
  constructor () {
    this.towers = [[],[],[3,2,1]];
  }

  promptMove () {

  }

  move (startTower, endTower) {
    if (this.validMove) {
      let temp = this.towers[startTower].pop();
      this.towers[endTower].push(temp);
    }
  }

  validMove (startTower, endTower) {
    if (this.towers[startTower].length === 0){
      return false;
    } else if (this.towers[endTower][-1] > this.towers[startTower][-1]) {
      return false;
    } else {
      return true;
    }
  }
}
