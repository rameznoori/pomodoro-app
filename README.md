
# Pomodoro App with HTML, CSS and JavaScript

This Pomodoro App is a simple and visually appealing timer designed to help users manage their work sessions using the Pomodoro Technique. It features a 25-minute countdown timer with Start, Pause/Resume, and Reset controls, allowing users to easily begin, pause, or restart their focused work intervals. The app uses a clean color gradient background and a circular progress visualization for an engaging user experience. Audio notification signals the end of each session, encouraging effective time management and productivity.
## Features

- 25-minute countdown session timer
- Start button to begin the timer
- Pause/Resume button to temporarily stop and continue the timer
- Reset button to stop the timer and reset to the default time
- Circular visual representation of the timer
- Audio notification (bell sound) at session completion
- Clean, gradient background with subtle interactive buttons


## Getting Started / Installation

- Clone or download this repository to your local machine.

```bash
  git clone https://github.com/rameznoori/pomodoro-app.git
```
- Ensure you have a modern web browser installed (e.g., Chrome, Firefox, Edge).

- Open the `index.html` file in your web browser to start the app.

- No additional setup or dependencies required.
## Usage Instructions

- Click **Start** to begin the 25-minute countdown.

- Click **Pause** to stop the timer and **Resume** to continue from where you left off.

- Click **Reset** to stop the timer and reset it back to 25:00.

- When the timer ends, a bell sound will play to notify you.
## Technologies Used

**Structure:** HTML5

**Styling:** CSS

**Typography:** Google Fonts

**Functionality/Interactivity:** Vanilla JavaScript


## File Structure

```
/
├── index.html      # Main HTML file containing structure and buttons
├── style.css       # Styling for the app layout, colors, and buttons
├── app.js          # JavaScript logic for timer control and UI interaction
└── sounds/
    └── bell.wav    # Audio file for session completion notification
```
## Customization

- To change the default timer length, modify the initial value of `total_seconds` in `app.js` (currently 25 minutes).

- Colors, fonts, and layout styling can be adjusted in `style.css` to suit your preferences.
## Limitations

- Timer duration is fixed at 25 minutes for now; no options for custom session or break lengths.

- No long break or multiple session tracking functionality included.

- The audio notification depends on user device sound settings.
## Future Improvements

- Add customizable session and break durations.

- Implement long break timers and session counters.

- Store session history or statistics in local storage.

- Add visual progress animations to the circular timer.
## Contributing

Contributions are always welcome! To contribute:

- Fork the repository.

- Create a new branch for your feature or bugfix.

- Make your changes with clear comments.

- Submit a pull request describing your work.

## License


This project is open-source and available under the MIT License.
## Acknowledgements

 - Inspired by the Pomodoro Technique for productivity.

- Google Fonts for typography.

- Sound effect sourced from `https://mixkit.co/free-sound-effects/bell/`