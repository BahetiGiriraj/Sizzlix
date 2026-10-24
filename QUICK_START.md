# Quick Start Guide

## 🚀 View Your Website Now

**Already Running:** http://localhost:5173

Just open this URL in your browser!

---

## ✏️ Customize Your Content (1 File!)

**Open:** `src/config/company.ts`

### What to Change:

#### 1. Company Basic Info (Lines 40-47)
```typescript
name: 'Sizzlix Sauces',        // ← Your company name
tagline: 'Flavor in Every Drop', // ← Your tagline
email: 'info@sizzlix.com',     // ← Your email
phone: '+91 98765 43210',      // ← Your phone
```

#### 2. Product Prices (Search for "TBC")
```typescript
price: '₹199',  // ← Change from 'TBC'
```

#### 3. Product Links (Search for "link: '#'")
```typescript
link: 'https://yourstore.com/red-chilli-sauce',
```

#### 4. Social Media (Lines 181-200)
```typescript
url: 'https://linkedin.com/company/sizzlix',
url: 'https://twitter.com/sizzlix',
url: 'https://facebook.com/sizzlix',
url: 'https://instagram.com/sizzlix',
```

**Save the file → Website updates instantly!**

---

## 🎨 Change Colors

**Open:** `tailwind.config.js`

```javascript
primary: {
  500: '#0ea5e9',  // ← Change this hex color
  600: '#0284c7',  // ← And this one
}
```

[Use this tool to generate colors](https://uicolors.app/create)

---

## 📦 Deploy Your Website

### Option 1: Vercel (Recommended - Free)
```bash
npm install -g vercel
vercel
```
Follow prompts → Done!

### Option 2: Netlify
1. Go to https://app.netlify.com
2. Drag the `dist/` folder
3. Done!

### Option 3: Any Hosting
```bash
npm run build
```
Upload the `dist/` folder to your host.

---

## 🎯 Important Commands

| Command | What It Does |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Test production build |

---

## 📱 Test Your Website

✅ **Desktop:** Open in Chrome  
✅ **Mobile:** Open browser dev tools → Toggle device toolbar  
✅ **Click Products:** Should open modal with full details  
✅ **Try Navigation:** All 3 pages should work  

---

## 🆘 Quick Fixes

**Port already in use?**
```bash
# Kill the process and restart
pkill -f vite
npm run dev
```

**Changes not showing?**
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

**Build errors?**
```bash
npx tsc --noEmit  # Shows what's wrong
```

---

## 📚 Read More

- **Full details:** `FINAL_SUMMARY.md`
- **Step-by-step guide:** `CUSTOMIZATION_GUIDE.md`
- **All features:** `CHECKLIST.md`

---

## ✨ Your Website Has:

✅ 3 Pages (Home, About, Careers)  
✅ 7 Products with full images  
✅ Interactive product modals  
✅ Mobile responsive  
✅ Contact information  
✅ Social media links  
✅ Professional design  

**Just customize and deploy!** 🎉
