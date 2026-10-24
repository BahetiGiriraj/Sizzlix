// Company Configuration File
// Replace all placeholder content with actual company information

export interface Product {
  id: string;
  name: string;
  description: string;
  keyBenefits: string;
  ingredients: string;
  features: string[];
  image: string;
}

export interface Career {
  id: string;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  description: string;
  applicationLink: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  videoId: string; // YouTube video ID
  thumbnail: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// ===== COMPANY INFORMATION =====
export const companyInfo = {
  name: 'Sizzlix',
  tagline: 'Restaurant-Style Flavour, Made for Home',
  description: 'Sizzlix is an Indo-Chinese and Italian sauce brand built for the modern Indian kitchen. We make restaurant-style flavour accessible at home — from schezwan and red chilli to dark soya and pizza pasta sauce — so a weeknight stir-fry or a lazy-Sunday pasta can taste like it came from your favourite restaurant, not a bottle.',
  email: 'customercare@sjmdfoods.com',
  phone: '+91 9119132499',
  address: 'India', // PLACEHOLDER: Add full address if needed
};

// ===== ABOUT US INFORMATION =====
export const aboutInfo = {
  overview: 'Sizzlix is an Indo-Chinese and Italian sauce brand built for the modern Indian kitchen. We make restaurant-style flavour accessible at home — from schezwan and red chilli to dark soya and pizza pasta sauce — so a weeknight stir-fry or a lazy-Sunday pasta can taste like it came from your favourite restaurant, not a bottle.',
  mission: 'Our mission is simple: bring the taste of restaurant-quality Indo-Chinese and Italian cooking into everyday home kitchens, without the effort of building flavour from scratch every time. We believe great taste shouldn\'t be reserved for eating out.',
  vision: 'To become India\'s most trusted kitchen companion, making restaurant-quality cooking accessible to every home cook, transforming everyday meals into extraordinary dining experiences.',
  values: [
    {
      title: 'Quality First',
      description: 'We\'re committed to quality ingredients and consistent taste in every bottle, ensuring reliability you can count on.',
    },
    {
      title: 'Authenticity',
      description: 'Our sauces deliver genuine restaurant-style flavours that honor traditional recipes while fitting modern lifestyles.',
    },
    {
      title: 'Versatility',
      description: 'One brand covering the full flavour spectrum a home cook needs — from fiery to savory, all designed to work together.',
    },
    {
      title: 'Accessibility',
      description: 'Great taste shouldn\'t require hours in the kitchen. We make restaurant-quality cooking achievable for everyone.',
    },
  ],
  uniqueSellingPoints: [
    'Complete range covering Indo-Chinese and Italian cuisines in one brand',
    'Restaurant-quality taste designed specifically for home cooking',
    'Versatile products that work together across different dishes',
    'Quality ingredients with consistent, reliable flavour profiles',
    'Not just condiments, but genuine shortcuts to better food',
    'Pantry basics and specialty sauces — everything your kitchen needs',
  ],
};

// ===== PRODUCTS =====
export const products: Product[] = [
  {
    id: '1',
    name: 'Red Chilli Sauce',
    description: 'Hot & Zesty',
    keyBenefits: 'Our red chilli sauce delivers the perfect balance of heat and flavour. Made from premium red chillies, it adds a spicy kick to snacks, noodles, momos, rolls. Smooth in texture and vibrant in colour, its your go-to sauce for turning ordinary meals into bold, flavourful experiences.',
    ingredients: 'Water, Red Chilli Pulp (10%), Red Chilli Powder (6%), Iodized Salt, Sugar stabilizer (INS(422) (INS415), ACidity Regulator, INS(260), Spice Extract, Preservative (INS211)',
    features: [
      'Perfect balance of heat and flavour',
      'Made from premium red chillies',
      'Smooth texture, vibrant colour',
      'Ideal for snacks, noodles, momos, rolls',
    ],
    image: '/images/red Chilli Sauce Glass Jar.jpg',
  },
  {
    id: '2',
    name: 'Green Chilli Sauce',
    description: 'Hot & Zesty',
    keyBenefits: 'A premium quality green chilli sauce made from fresh green chillies to deliver a sharp, spicy and refreshing flavour. Perfect for momos, noodles, snacks, marinades and dips.',
    ingredients: 'Water, Green Chilli Paste (25%), Iodized Salt, Sugar, Stabilizer (INS1422) (INS415), Acidity regulator (INS260), Spice Extract, Preservatives (INS211)',
    features: [
      'Made from fresh green chillies',
      'Sharp, spicy and refreshing flavour',
      'Perfect for momos, noodles, snacks',
      'Ideal for marinades and dips',
    ],
    image: '/images/Green Chilli Sauce Glass Jar.jpg',
  },
  {
    id: '3',
    name: 'Schezwan Hot & Spicy Sauce',
    description: 'Hot & Spicy',
    keyBenefits: 'Shezwan Hot & SPICY Sauce is fiery, versatile Indo-Chinese condiment known for its bold, spicy, and tangy profile. It is Distinctively crafted by blending Sichuan peppers, pungent garlic and fiery red chillies to create a unique Chinese flavour.',
    ingredients: 'Water, Garlic Paste(15%), Ginger Paste (13%), Red Chilli Paste 9&%), Sugar, Refined Soyabean Oil, Iodized Salt, Flavour enhancer (INS635), Natural Colour (INS150c), Stabilizers (INS1422)(INS415), White Pepper (1%), Acidity Regulator (INS 260), Spice Extract, Soya Sauce Powder, Preservatives (INS211) (INS202)',
    features: [
      'Bold, spicy, and tangy profile',
      'Blended with Sichuan peppers',
      'Pungent garlic and fiery red chillies',
      'Authentic Indo-Chinese flavour',
    ],
    image: '/images/Schezwan Glass Jar 1.jpeg',
  },
  {
    id: '4',
    name: 'Dark Soya Sauce',
    description: 'Dark Soya',
    keyBenefits: 'Our Dark Soya Sauce delivers a deep, rich colour and bold umami flavour. Made from High-Quality soy extracts, it enhances the taste, aroma, and appearance of your favourite dishes. Perfect for stir fries, noodles, fried rice, marinades and gravies.',
    ingredients: 'Water, Sugar, Caramel (INS150c), Soya Bean Extract (10%), Iodized Salt, Stabilizer (INS1422) (INS415), Acidity Regulator (INS260), Preservatives (INS211)',
    features: [
      'Deep, rich colour and bold umami flavour',
      'Made from high-quality soy extracts',
      'Enhances taste, aroma, and appearance',
      'Perfect for stir fries, noodles, fried rice',
    ],
    image: '/images/Dark Soy Sauce Glass Jar.jpg',
  },
  {
    id: '5',
    name: 'Italian Pizza Pasta Sauce',
    description: 'Pizza Pasta',
    keyBenefits: 'Crafted from handpicked tomatoes and infused with classic italian herbs, this pizza pasta sauce delivers the perfect balance of tanginess and savoury flavour. Ideal for creating restaurant-style pizzas, pastas and more at home.',
    ingredients: 'Water, Tomato paste (36%), Sugar, Refined Soyabean Oil, Iodized Salt, Stabilizers (INS1422) (INS415), Acidity Regulator (INS260), Red Chilli Powder (1%), Spices & Herbs, Preservatives (INS211) (INS202)',
    features: [
      'Handpicked tomatoes with Italian herbs',
      'Perfect balance of tanginess and savour',
      'Restaurant-style pizzas and pastas',
      'Ready to use at home',
    ],
    image: '/images/Pizza Pasta Sauce Small Jar.jpg',
  },
  {
    id: '6',
    name: 'White Vinegar',
    description: 'Synthetic',
    keyBenefits: 'Our White Vinegar is made from high-grade acetic acid and purified water. Offering a clean, sharp taste and crystal-clear appearance. Ideal for cooking, pickling, salad dressings, and food preservation.',
    ingredients: 'Water, Acetic Acid (INS260) (4%)',
    features: [
      'High-grade acetic acid and purified water',
      'Clean, sharp taste, crystal-clear',
      'Ideal for cooking and pickling',
      'Perfect for salad dressings',
    ],
    image: '/images/White Vinegar Glass Jar.jpg',
  },
  {
    id: '7',
    name: 'Ginger Garlic Paste',
    description: 'Fresh & Aromatic',
    keyBenefits: 'Our Ginger Garlic Paste is prepared from carefully selected fresh ginger and garlic to deliver rich aroma and authentic taste in your everyday cooking. It enhances the flavour of curries, gravies, marinades and stir-fried dishes while saving preparation time in the kitchen.',
    ingredients: 'Fresh Ginger (35%), Fresh Garlic (35%), Water, Iodized Salt, Acidity Regulator, (INS260), Stabilizer (INS415), Preservative (INS211)',
    features: [
      'Fresh ginger (35%) and garlic (35%)',
      'Rich aroma and authentic taste',
      'Enhances curries, gravies, marinades',
      'Saves preparation time',
    ],
    image: '/images/Ginger Garlic Paste Small Jar.jpg',
  },
];

// ===== YOUTUBE VIDEOS =====
export const youtubeVideos: YouTubeVideo[] = [
  {
    id: '1',
    title: 'Sizzlix Sauces - Brand Introduction', // PLACEHOLDER: Replace with actual video title
    videoId: 'dQw4w9WgXcQ', // PLACEHOLDER: Replace with actual YouTube video ID from @SizzlixSauces
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  {
    id: '2',
    title: 'How to Use Sizzlix Products', // PLACEHOLDER: Replace with actual video title
    videoId: 'dQw4w9WgXcQ', // PLACEHOLDER: Replace with actual YouTube video ID from @SizzlixSauces
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  {
    id: '3',
    title: 'Sizzlix Recipe Ideas', // PLACEHOLDER: Replace with actual video title
    videoId: 'dQw4w9WgXcQ', // PLACEHOLDER: Replace with actual YouTube video ID from @SizzlixSauces
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
];

// ===== CAREERS =====
export const careers: Career[] = [
  {
    id: '1',
    title: 'Senior Software Engineer', // PLACEHOLDER: Replace with actual job title
    location: 'San Francisco, CA / Remote', // PLACEHOLDER: Replace with actual location
    type: 'Full-time',
    description: 'We are seeking an experienced software engineer to join our growing team. You will be responsible for designing, developing, and maintaining high-quality software solutions that power our products.', // PLACEHOLDER: Replace with actual job description
    applicationLink: 'mailto:Hr@sjmdfoods.com?subject=Application for Senior Software Engineer',
  },
  {
    id: '2',
    title: 'Product Manager', // PLACEHOLDER: Replace with actual job title
    location: 'New York, NY', // PLACEHOLDER: Replace with actual location
    type: 'Full-time',
    description: 'Join our product team to help shape the future of our products. You will work closely with engineering, design, and business teams to define product strategy and drive execution.', // PLACEHOLDER: Replace with actual job description
    applicationLink: 'mailto:Hr@sjmdfoods.com?subject=Application for Product Manager',
  },
  {
    id: '3',
    title: 'UX/UI Designer', // PLACEHOLDER: Replace with actual job title
    location: 'Remote', // PLACEHOLDER: Replace with actual location
    type: 'Remote',
    description: 'We are looking for a talented designer to create beautiful and intuitive user experiences. You will work on diverse projects and have the opportunity to impact millions of users.', // PLACEHOLDER: Replace with actual job description
    applicationLink: 'mailto:Hr@sjmdfoods.com?subject=Application for UX/UI Designer',
  },
];

// Set to empty array if no vacancies available
// export const careers: Career[] = [];

// ===== SOCIAL MEDIA =====
export const socialLinks: SocialLink[] = [
  {
    platform: 'YouTube',
    url: 'https://www.youtube.com/@SizzlixSauces',
    icon: 'youtube',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/sizzlixsauces?exln=cWtqbGQ3bGdneHVn',
    icon: 'instagram',
  },
];
