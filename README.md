# Company Website

A modern, professional, and fully responsive company website built with React, TypeScript, Vite, Tailwind CSS, and React Router.

## 🚀 Features

- **Three Pages**: Home, About Us, and Careers
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Modern Design**: Clean, minimalistic UI with smooth animations
- **Centralized Configuration**: All company data in one place (`src/config/company.ts`)
- **Type-Safe**: Built with TypeScript for enhanced reliability
- **Fast Development**: Powered by Vite for lightning-fast HMR
- **Production Ready**: Optimized build with code splitting

## 📋 Pages

### Home Page (/)
- Hero section with company name and tagline
- Company introduction
- Products showcase with images, descriptions, and features
- YouTube videos section with thumbnails and links
- Contact information and social media links

### About Us Page (/about)
- Company overview
- Mission and vision statements
- Core values presentation
- What makes the company unique

### Careers Page (/careers)
- Job listings with descriptions, location, and type
- Application links for each position
- Professional "No openings" message when no vacancies exist
- Benefits and culture highlights

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

## 🚀 Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📝 Configuration

All company information, products, careers, and content are centralized in `src/config/company.ts`. 

### What to Update:

1. **Company Information** (`companyInfo`)
   - Name, tagline, description
   - Email, phone, address

2. **About Information** (`aboutInfo`)
   - Overview, mission, vision
   - Values and unique selling points

3. **Products** (`products`)
   - Add your actual products with:
     - Name, description, features
     - Images (replace placeholder URLs)
     - Links to product pages

4. **YouTube Videos** (`youtubeVideos`)
   - Replace video IDs with actual YouTube video IDs
   - Update titles and thumbnails

5. **Career Listings** (`careers`)
   - Add actual job openings
   - Set to empty array `[]` when no vacancies
   - Update application links

6. **Social Media** (`socialLinks`)
   - Replace URLs with actual social media profiles

### Placeholders

All placeholders are clearly marked with `// PLACEHOLDER:` comments. Search for "PLACEHOLDER" in the config file to find and replace all dummy content.

## 🎨 Customization

### Colors

Modify the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Update these values
  }
}
```

### Fonts

The site uses Inter font from Google Fonts. Change it in `index.html` and `tailwind.config.js`.

### Images

Replace placeholder images with actual product images:
- Update URLs in `src/config/company.ts`
- Use high-quality images (recommended: 600x400px for products)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for icons and buttons
- Keyboard navigation support
- Color contrast compliance

## 🔗 Navigation

- Sticky navigation bar
- Mobile hamburger menu
- Active link highlighting
- Smooth scroll to sections

## 📄 License

Private - All rights reserved

## 🤝 Support

For questions or issues, contact: [your-email@example.com]

---

**Note**: Remember to replace all placeholder content in `src/config/company.ts` before deploying to production!
