# Quick Customization Guide

This guide will help you customize the website with your actual company information.

## 📍 Single File to Edit

**All content is in one file**: `src/config/company.ts`

Search for `PLACEHOLDER` in this file to find every item that needs updating.

## 🔧 Step-by-Step Customization

### 1. Company Basic Information (Lines ~40-47)

```typescript
export const companyInfo = {
  name: 'Your Company Name',           // ← Change this
  tagline: 'Innovating the Future',    // ← Change this
  description: '...',                   // ← Change this
  email: 'contact@yourcompany.com',    // ← Change this
  phone: '+1 (555) 123-4567',          // ← Change this
  address: '123 Business Street...',   // ← Change this
};
```

### 2. About Page Content (Lines ~50-80)

```typescript
export const aboutInfo = {
  overview: '...',      // ← Your company story
  mission: '...',       // ← Your mission statement
  vision: '...',        // ← Your vision statement
  values: [             // ← Your company values (4 recommended)
    {
      title: 'Innovation',
      description: '...'
    },
    // Add/remove values as needed
  ],
  uniqueSellingPoints: [  // ← What makes you unique
    'Point 1',
    'Point 2',
    // Add more points
  ],
};
```

### 3. Products (Lines ~83-125)

For each product, update:

```typescript
{
  id: '1',                    // Keep sequential
  name: 'Product One',        // ← Product name
  description: '...',         // ← Product description
  features: [                 // ← Product features
    'Feature 1',
    'Feature 2',
  ],
  image: 'https://...',       // ← IMPORTANT: Replace with real image URL
  link: '#',                  // ← Replace with actual product page link
}
```

**Important**: Replace the placeholder image URLs with your actual product images.

### 4. YouTube Videos (Lines ~128-145)

For each video:

```typescript
{
  id: '1',
  title: 'Company Introduction',           // ← Video title
  videoId: 'dQw4w9WgXcQ',                 // ← YouTube video ID
  thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
}
```

**How to get YouTube video ID**:
- From URL: `https://www.youtube.com/watch?v=**VIDEO_ID**`
- Thumbnail auto-generates from video ID

### 5. Career Listings (Lines ~148-175)

For each job opening:

```typescript
{
  id: '1',
  title: 'Senior Software Engineer',      // ← Job title
  location: 'San Francisco, CA / Remote', // ← Location
  type: 'Full-time',                      // ← Full-time, Part-time, Contract, or Remote
  description: '...',                      // ← Job description
  applicationLink: '#',                    // ← IMPORTANT: Replace with application form link
}
```

**No job openings?** Set the careers array to empty:
```typescript
export const careers: Career[] = [];
```

### 6. Social Media (Lines ~181-200)

```typescript
{
  platform: 'LinkedIn',
  url: 'https://linkedin.com/company/yourcompany',  // ← Your LinkedIn URL
  icon: 'linkedin',  // Don't change this
}
```

Update URLs for: LinkedIn, Twitter, Facebook, Instagram

## 🎨 Design Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',   // Lightest
    100: '#e0f2fe',
    // ... change these hex values
    900: '#0c4a6e',  // Darkest
  },
}
```

**Quick color generators**:
- https://uicolors.app/create
- https://tailwindcss.com/docs/customizing-colors

### Change Font

1. Update Google Fonts link in `index.html`
2. Update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

### Change Logo

The logo shows the first letter of your company name. To use an image instead:

Edit `src/components/Navigation.tsx` and `src/components/Footer.tsx`, replace:

```tsx
<div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-xl">
    {companyInfo.name.charAt(0)}
  </span>
</div>
```

With:

```tsx
<img src="/path-to-your-logo.png" alt={companyInfo.name} className="w-10 h-10" />
```

## 📸 Adding Real Images

### Product Images

1. **Option A - External URLs**: Use image hosting (Cloudinary, Imgur, etc.)
   ```typescript
   image: 'https://your-cdn.com/product1.jpg'
   ```

2. **Option B - Local files**: Put images in `public/images/` folder
   ```typescript
   image: '/images/product1.jpg'
   ```

**Recommended size**: 600x400px or 1200x800px (same aspect ratio)

## 🔗 Making Links Work

### Product Links

Replace `#` with actual URLs:
```typescript
link: 'https://yourcompany.com/products/product-one'
// or relative:
link: '/products/product-one'
```

### Application Links

Replace `#` with actual job application URLs:
```typescript
applicationLink: 'https://yourcompany.com/apply/job-123'
// or email:
applicationLink: 'mailto:careers@yourcompany.com?subject=Application for Senior Engineer'
```

## ✅ Testing Your Changes

1. Save `src/config/company.ts`
2. Check browser - Vite auto-reloads
3. Test all three pages
4. Click every link and button
5. Test on mobile (browser dev tools)

## 🚀 Deployment

### Build for production:
```bash
npm run build
```

### Deploy the `dist/` folder to:
- Vercel (recommended for React)
- Netlify
- AWS S3 + CloudFront
- Your hosting provider

## 🆘 Quick Fixes

**Images not loading?**
- Check URL is accessible
- Use HTTPS URLs
- Check file path if using local images

**Links not working?**
- Make sure to replace all `#` placeholders
- Test external links in new tab
- Check mailto: links have correct format

**Content too long/short?**
- Adjust text in `company.ts`
- All sections auto-adjust to content length

**Styling issues?**
- Run `npm run build` to check for errors
- Check browser console for errors
- Verify Tailwind classes are correct

## 📞 Need Help?

All styling is in:
- `src/index.css` - Global styles
- `tailwind.config.js` - Theme configuration
- Individual component files - Component-specific styles

**Pro tip**: Use browser dev tools to inspect elements and see what classes are applied!

---

Remember: After making changes, always test the production build:
```bash
npm run build
npm run preview
```
