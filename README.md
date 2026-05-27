# Sudoku Game

A simple, interactive Sudoku game built with HTML, CSS, and JavaScript.  
Play directly in your web browser—no installation or server required!

---

## 📝 Description

This project provides a visually intuitive Sudoku game with three difficulty levels: Beginner, Medium, and Advanced.  
You can select the level, fill in the grid, check your solution, and reset the board. The game highlights mistakes and completed cells for a better user experience.

---

## 📂 Project Structure

```
sudoku/
├── index.html      # Main HTML file (UI and structure)
├── style.css       # Styles for the game (visuals)
└── app.js          # Game logic (board generation, validation, level selection)
```

---

## 🏗️ How the Program Works

- **index.html**  
  This file provides the structure of the game, including the title, level selection dropdown, control buttons, the Sudoku board container, and a message area. It links to `style.css` for styling and `app.js` for game logic.

- **style.css**  
  This file styles the game, making the board visually appealing and user-friendly. It defines the grid layout, colors, borders for 3x3 boxes, highlights for valid/invalid entries, and button styles.

- **app.js**  
  This file contains all the game logic:
  - Stores Sudoku puzzles for each difficulty level.
  - Dynamically generates the board based on the selected level.
  - Handles user input and validates entries in real time.
  - Provides functions to check the solution, reset the board, and switch levels.
  - Highlights mistakes and correct entries for better interactivity.

---

## 🚀 How to Run

1. Download or clone this repository.
2. Open the `sudoku` folder.
3. Double-click `index.html` to open it in your web browser.
   - Or right-click and choose **Open with** your preferred browser.
   - (Optional) Use the "Live Server" extension in VS Code for auto-reload.

---

## 🎮 How to Play

1. **Select Level:** Use the dropdown to choose Beginner, Medium, or Advanced.
2. **Fill the Grid:** Click on empty cells and enter numbers 1–9.
   - Each number must appear only once in each row, column, and 3x3 box.
   - Invalid entries are highlighted in red.
3. **Check Solution:** Click **Check Solution** to validate your answers.
   - Correct solutions are highlighted in green.
   - Mistakes are highlighted in red.
4. **Reset:** Click **Reset** to clear your inputs and start over.
5. **Change Level:** Select a different level at any time to load a new puzzle.

---

## ✨ Features

- Three difficulty levels
- Interactive 9x9 Sudoku grid
- Real-time input validation (highlights mistakes)
- Solution checking and reset functionality
- Modern, intuitive user interface

---

Enjoy solving Sudoku!