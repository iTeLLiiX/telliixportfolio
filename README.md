# TeLLiiX Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional portfolio layout
- **Responsive**: Works perfectly on all devices
- **Custom Styling**: Unique CSS variables and animations
- **Interactive Elements**: Hover effects and smooth transitions
- **Media Integration**: Spotify, SoundCloud, YouTube, and custom audio player
- **Loading Animations**: Smooth page transitions and loading states

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **Deployment**: Vercel
- **Audio**: React H5 Audio Player
- **Video**: React Player

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/telliix-portfolio.git
cd telliix-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
npm start
```

## 📁 Project Structure

```
telliix-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
├── public/
├── package.json
├── vercel.json
└── README.md
```

## 🎨 Customization

### Colors and Themes
Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --theme-color: #ffffff;
  --icon-color: #F97316;
  --primary-text-color: #FFFFFF;
  --secondary-text-color: #A8A29E;
  --background-color: #090909;
  /* ... more variables */
}
```

### Content
Update the content in `src/app/page.tsx`:
- Change the username from "TeLLiiX" to your name
- Update links and social media URLs
- Modify tags and descriptions
- Replace media embeds with your own content

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations.

### Build Configuration
The project uses Next.js 14 with the App Router. Configuration can be modified in:
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**TeLLiiX Portfolio** - Built with ❤️ using Next.js
