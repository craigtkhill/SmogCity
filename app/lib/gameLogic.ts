// app/lib/gameLogic.ts

class Game {
  private inputCounter: number;

  constructor() {
    // Initial value
    this.inputCounter = 0;
  }

  // Method to handle user input
  handleUserInput() {
    this.inputCounter += 1;
  }

  // Method to get the current image URL based on the number of user inputs
  getImageUrl() {
    if (this.inputCounter === 1) {
      return "/pollutedCityImage.png"; // Show polluted city image on first input
    } else if (this.inputCounter >= 2) {
      return "/cleanCityImage.png"; // Show clean city image on third input onwards
    }
    return "/cityImage.png"; // Default image
  }
}

// Export an instance of the Game class to be used throughout the app
const game = new Game();
export default game;
