# Watch Authenticity Challenge

A mobile-friendly web game that tests your ability to spot genuine luxury watches from replicas. Built with vanilla HTML, CSS, and JavaScript with zero dependencies.

## How It Works

Each round renders two detailed watch face illustrations side by side using the HTML Canvas API. One is the genuine version with perfect proportions, the other is a replica with subtle defects. Your job is to spot which is real.

**Replica defects include:**
- Misaligned hour markers
- Dial color shifts
- Wrong hand proportions
- Off-center brand text
- Date window sizing issues
- Lume color variations
- Bezel misalignment
- Crown proportion errors

Defects get more subtle as difficulty increases.

## Features

- **3 Game Modes**: Classic (12 rounds), Time Attack (90 seconds), Endless
- **12 Luxury Watch Models**: Rolex Submariner, Daytona, Datejust; Patek Philippe Nautilus, Calatrava; Omega Seamaster, Speedmaster; AP Royal Oak; Cartier Santos; IWC Pilot; JLC Reverso; TAG Heuer Carrera
- **Streak & Multiplier System**: Build combos for 2x, 3x, and 5x score multipliers
- **Sound Effects**: Web Audio API synthesized sounds (toggleable)
- **Particle Effects**: Confetti celebrations on streaks and game completion
- **High Score Tracking**: Persistent leaderboard via localStorage
- **Share Results**: Native share API or clipboard copy
- **Keyboard Support**: Arrow keys and number keys for desktop play
- **PWA Ready**: Installable as a standalone app with offline support
- **Mobile First**: Responsive design from 320px to 4K displays
- **Accessibility**: Reduced motion support, focus indicators, ARIA labels

## Hosting

This is a static site. Deploy anywhere:

**GitHub Pages:**
```bash
git push origin main
# Enable Pages in repo Settings > Pages > Deploy from branch
```

**Netlify / Vercel / Cloudflare Pages:**
Point to the repository. No build step needed.

**Any static server:**
```bash
npx serve .
# or
python -m http.server 8000
```

## Tech Stack

- HTML5, CSS3, vanilla JavaScript (ES6+)
- Canvas API for watch face rendering
- Web Audio API for sound effects
- Service Worker for offline caching
- Web Share API for social sharing
- localStorage for persistent scores

## Browser Support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## Legal Notice

This game is for educational and entertainment purposes only. All watch brand names are trademarks of their respective owners.
