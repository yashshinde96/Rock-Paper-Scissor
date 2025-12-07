# 🎮 Rock Paper Scissors Game

A modern, feature-rich Rock Paper Scissors game built with vanilla HTML, CSS, and JavaScript. Features stunning animations, two game modes, and comprehensive statistics tracking.

![Game Preview](https://img.shields.io/badge/Status-Complete-success)
![Version](https://img.shields.io/badge/Version-1.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Two Game Modes**
  - 🎯 **Best of 5** - First to win 3 rounds wins the match
  - ♾️ **Infinite Mode** - Play endlessly and track your stats

- **Real-time Statistics**
  - Rounds played counter
  - Win rate percentage
  - Current winning streak

- **Round History**
  - View your last 10 rounds
  - Visual indicators for wins, losses, and draws

- **Beautiful UI/UX**
  - Modern gradient design with glassmorphism effects
  - Smooth animations and transitions
  - Responsive design for all screen sizes
  - Interactive hover effects

- **Visual Feedback**
  - Battle display showing both choices
  - Color-coded results (green/red/yellow)
  - Glowing text effects
  - Pulse animations

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation

1. **Download the files**
   ```
   project-folder/
   ├── index.html
   ├── style.css
   └── script.js
   ```

2. **Place all three files in the same folder**

3. **Open `index.html` in your web browser**
   - Double-click the file, or
   - Right-click → Open with → Your browser, or
   - Drag and drop into your browser window

That's it! The game should now be running.

## 🎯 How to Play

1. **Select a Game Mode**
   - Click **"Best of 5"** for a competitive match
   - Click **"Infinite Mode"** for casual play

2. **Make Your Choice**
   - Click on Rock ✊, Paper ✋, or Scissors ✌️

3. **View Results**
   - See who won the round
   - Check the updated scores and statistics

4. **Reset Game**
   - Click "Reset Game" to start fresh while keeping the same mode

## 🎨 Game Rules

- **Rock** ✊ beats **Scissors** ✌️
- **Scissors** ✌️ beats **Paper** ✋
- **Paper** ✋ beats **Rock** ✊
- Same choice = Draw

### Best of 5 Mode
- Play exactly 5 rounds
- Winner is determined by who has more wins after 5 rounds
- Draws don't count towards either player's score
- Game automatically ends after 5 rounds

### Infinite Mode
- Play as many rounds as you want
- Track your performance with live statistics
- No end condition - perfect for practice

## 📁 Project Structure

```
rock-paper-scissors/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Game logic and functionality
└── README.md           # This file
```

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
  - CSS Grid & Flexbox
  - Glassmorphism effects
  - Custom animations
  - Responsive design
- **Vanilla JavaScript** - Game logic
  - ES6+ features
  - DOM manipulation
  - Event handling

## 🎨 Customization

### Changing Colors

Edit the color values in `style.css`:

```css
/* Background gradient */
background: linear-gradient(135deg, #1e3a8a 0%, #312e81 50%, #1e293b 100%);

/* Accent colors */
color: #60a5fa;  /* Blue accent */
color: #a78bfa;  /* Purple accent */
```

### Modifying Game Rules

Edit the `choices` object in `script.js`:

```javascript
const choices = {
    rock: { icon: '✊', beats: 'scissors' },
    paper: { icon: '✋', beats: 'rock' },
    scissors: { icon: '✌️', beats: 'paper' }
};
```

### Changing Round Limit

Modify the target score in `script.js`:

```javascript
targetScore: 5  // Change to any number
```

## 📱 Responsive Design

The game is fully responsive and works on:
- 💻 Desktop computers
- 📱 Tablets
- 📱 Mobile phones

## 🐛 Troubleshooting

### Styling Not Loading?

1. Make sure all files are in the same folder
2. Check that `style.css` doesn't have a `.txt` extension
3. Verify the link in HTML: `<link rel="stylesheet" href="style.css">`

### JavaScript Not Working?

1. Check browser console (F12) for errors
2. Ensure `script.js` is in the same folder as `index.html`
3. Verify the script tag: `<script src="script.js"></script>`

### Emojis Not Displaying?

- Make sure your system supports emoji fonts
- Try a different browser
- Update your operating system

## 🚀 Future Enhancements

Possible features to add:
- [ ] Sound effects
- [ ] Multiple difficulty levels (AI)
- [ ] Local storage for high scores
- [ ] Multiplayer mode
- [ ] Custom themes
- [ ] Animation speed controls
- [ ] Tournament mode

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ for learning and fun!

## 🤝 Contributing

Feel free to fork this project and make it your own! Suggestions and improvements are welcome.

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Ensure all files are properly named and in the same folder
3. Try opening in a different browser

---

**Enjoy the game! May your rock be steady, your paper be smooth, and your scissors be sharp!** ✊✋✌️
