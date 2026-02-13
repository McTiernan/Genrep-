# ⌚ Watch Authenticity Challenge

A web-based game that tests your ability to distinguish genuine luxury watches from high-quality replicas. Perfect for watch enthusiasts who want to sharpen their eye for detail!

## 🎮 Game Features

- **12 Watch Challenges**: Test your knowledge across major luxury brands
- **Brands Included**: Rolex, Patek Philippe, Omega, Jaeger-LeCoultre, Audemars Piguet, Cartier, and IWC
- **Score Tracking**: Keep track of your score, rounds, and accuracy percentage
- **Educational Hints**: Learn what to look for when authenticating watches
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Elegant interface befitting luxury timepieces

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Watch images (genuine and replica pairs)

### Installation

1. Clone or download this repository
2. Create an `images` folder in the project directory
3. Add your watch images following the naming convention below
4. Open `index.html` in your web browser

### Image Setup

The game requires pairs of images (genuine and replica) for each watch. Create an `images` folder and add your images with the following names:

```
images/
├── rolex-submariner-genuine.jpg
├── rolex-submariner-replica.jpg
├── rolex-datejust-genuine.jpg
├── rolex-datejust-replica.jpg
├── rolex-daytona-genuine.jpg
├── rolex-daytona-replica.jpg
├── patek-nautilus-genuine.jpg
├── patek-nautilus-replica.jpg
├── patek-calatrava-genuine.jpg
├── patek-calatrava-replica.jpg
├── omega-seamaster-genuine.jpg
├── omega-seamaster-replica.jpg
├── omega-speedmaster-genuine.jpg
├── omega-speedmaster-replica.jpg
├── jlc-reverso-genuine.jpg
├── jlc-reverso-replica.jpg
├── jlc-master-moon-genuine.jpg
├── jlc-master-moon-replica.jpg
├── ap-royaloak-genuine.jpg
├── ap-royaloak-replica.jpg
├── cartier-santos-genuine.jpg
├── cartier-santos-replica.jpg
├── iwc-pilot-genuine.jpg
└── iwc-pilot-replica.jpg
```

**Note**: If images are not found, the game will display placeholder images. You can still play to test the functionality.

## 🎯 How to Play

1. **Study the Images**: Two watch images will appear - one genuine, one replica
2. **Look for Details**: Examine dial printing, hand finishing, alignment, fonts, and overall quality
3. **Make Your Selection**: Click the button under the watch you believe is authentic
4. **Get Feedback**: Learn whether you were correct and what details to look for
5. **Continue Playing**: Progress through all watch models and track your score

## 🔧 Customization

### Adding New Watches

Edit `script.js` and add new entries to the `watchDatabase` array:

```javascript
{
    brand: "Brand Name",
    model: "Model Name",
    genuine: "images/your-genuine-image.jpg",
    replica: "images/your-replica-image.jpg",
    hints: "Helpful tips for spotting the genuine watch"
}
```

### Changing Styles

Modify `styles.css` to customize:
- Color scheme (edit CSS variables in `:root`)
- Layout and spacing
- Fonts and typography
- Animation effects

## 📱 Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 🎨 Design Features

- **Luxury Aesthetic**: Gold accents and elegant typography
- **Smooth Animations**: Engaging transitions and effects
- **Responsive Grid**: Adapts to any screen size
- **High Contrast**: Easy to read in various lighting conditions

## 🎓 Educational Value

This game helps you learn:
- Key differences between genuine and replica luxury watches
- What details matter most in authentication
- Common tells that separate real from fake
- Brand-specific characteristics and finishing techniques

## 📝 Tips for Success

- **Take Your Time**: Don't rush - study both images carefully
- **Look at Details**: Focus on dial printing, hand alignment, and finishing quality
- **Check Proportions**: Font sizes and spacing are often tells
- **Learn from Mistakes**: Read the hints when you get an answer wrong
- **Practice Makes Perfect**: Play multiple rounds to improve your eye

## 🤝 Contributing

Want to improve the game? Feel free to:
- Add more watch models to the database
- Enhance the UI/UX
- Add new features (difficulty levels, timer mode, etc.)
- Improve the educational content

## ⚖️ Legal Notice

This game is for educational and entertainment purposes only. It is designed to help watch enthusiasts develop authentication skills. Users are responsible for sourcing their own images in compliance with copyright laws.

## 🙏 Acknowledgments

Built for watch enthusiasts who appreciate the artistry and craftsmanship of fine timepieces.

---

**Enjoy the game and happy authenticating! ⌚✨**
