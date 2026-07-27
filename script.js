/* ==========================================================================
   BILLO BEAUTY - INTERACTIVE E-COMMERCE SCRIPT
   Inspired by Purplle.com
   ========================================================================== */

// 1. PRODUCT DATABASE
const PRODUCTS_DATA = [
  {
    id: 1,
    title: "Radiance Vitamin C Serum (30ml)",
    brand: "Billo Glow",
    category: "Skincare",
    price: 549,
    mrp: 799,
    rating: 4.8,
    reviews: 1420,
    badge: "BESTSELLER",
    image: "assets/billo_hero_banner_skincare_1785089198435.png",
    skinType: "Oily",
    shades: [],
    inStock: true,
    stockLeft: 12,
    description: "Brightens dark spots and boosts collagen for an immediate radiant glass-skin glow. Packed with 15% Pure Vitamin C & Hyaluronic Acid."
  },
  {
    id: 2,
    title: "Velvet Touch Ultra Matte Liquid Lipstick",
    brand: "Sugar Kiss",
    category: "Makeup",
    price: 399,
    mrp: 599,
    rating: 4.7,
    reviews: 2150,
    badge: "25% OFF",
    image: "assets/billo_hero_banner_makeup_1785089211176.png",
    skinType: "All",
    shades: ["#be185d", "#9f1239", "#881337", "#b91c1c"],
    inStock: true,
    stockLeft: 8,
    description: "16-hour transfer-proof lightweight matte lipstick enriched with Vitamin E. Keeps lips hydrated without drying."
  },
  {
    id: 3,
    title: "Hydramax Hyaluronic Acid Face Moisturizer",
    brand: "Billo Glow",
    category: "Skincare",
    price: 499,
    mrp: 699,
    rating: 4.9,
    reviews: 980,
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    skinType: "Dry",
    shades: [],
    inStock: true,
    stockLeft: 15,
    description: "72-hour intense moisture surge cream. Non-greasy gel-cream formula perfect for daily skin barrier repair."
  },
  {
    id: 4,
    title: "Rose Gold Eyeshadow Palette - 18 Shades",
    brand: "Glam Studio",
    category: "Makeup",
    price: 899,
    mrp: 1299,
    rating: 4.6,
    reviews: 840,
    badge: "MUST HAVE",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: ["#f43f5e", "#fb7185", "#fbbf24", "#d97706"],
    inStock: true,
    stockLeft: 5,
    description: "Highly pigmented mattes and sparkling shimmers. Blendable butter-smooth formula for day to night looks."
  },
  {
    id: 5,
    title: "Onion & Rosemary Hair Growth Oil (200ml)",
    brand: "Mama Earth Remedies",
    category: "Haircare",
    price: 349,
    mrp: 499,
    rating: 4.5,
    reviews: 3100,
    badge: "ORGANIC",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 22,
    description: "Controls hair fall and stimulates new follicle growth. 100% natural cold-pressed oil blend."
  },
  {
    id: 6,
    title: "Midnight Jasmine EDP Luxury Perfume (50ml)",
    brand: "Billo Luxe",
    category: "Fragrance",
    price: 1199,
    mrp: 1799,
    rating: 4.9,
    reviews: 620,
    badge: "LUXURY",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 4,
    description: "Sensual blend of Arabian Jasmine, Vanilla bean and Warm Amber. Long-lasting 24-hour stay."
  },
  {
    id: 7,
    title: "SPF 50 PA++++ Invisible Sunscreen Gel",
    brand: "Billo Glow",
    category: "Skincare",
    price: 425,
    mrp: 599,
    rating: 4.9,
    reviews: 4300,
    badge: "NO WHITECAST",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
    skinType: "Sensitive",
    shades: [],
    inStock: true,
    stockLeft: 18,
    description: "Ultra-lightweight water-resistant gel sunscreen. Zero white cast, oil-free finish with blue light protection."
  },
  {
    id: 8,
    title: "Luminous HD Foundation (30ml)",
    brand: "Lakmé Icon",
    category: "Makeup",
    price: 649,
    mrp: 899,
    rating: 4.7,
    reviews: 1890,
    badge: "HD FINISH",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    skinType: "Normal",
    shades: ["#fde047", "#f59e0b", "#d97706", "#92400e"],
    inStock: true,
    stockLeft: 9,
    description: "Medium to full buildable coverage with natural radiant skin finish. Sweat-proof for 12 hours."
  },
  {
    id: 9,
    title: "Keratin Smooth Repair Hair Mask",
    brand: "L'Oréal Pro",
    category: "Haircare",
    price: 525,
    mrp: 750,
    rating: 4.8,
    reviews: 1120,
    badge: "SALON PRO",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 14,
    description: "Deep conditioning hair mask that tames frizzy hair and seals split ends in just 5 minutes."
  },
  {
    id: 10,
    title: "Deep Clean Gentle Foaming Face Wash",
    brand: "Billo Glow",
    category: "Skincare",
    price: 299,
    mrp: 449,
    rating: 4.6,
    reviews: 870,
    badge: "CLEAN BEAUTY",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    skinType: "Acne-Prone",
    shades: [],
    inStock: true,
    stockLeft: 20,
    description: "Salicylic Acid 2% foaming cleanser that removes excess oil and unclogs pores without stripping moisture."
  },
  {
    id: 11,
    title: "Vanilla & Shea Butter Body Lotion",
    brand: "Bath Bliss",
    category: "Bath & Body",
    price: 375,
    mrp: 550,
    rating: 4.7,
    reviews: 1450,
    badge: "HYDRATING",
    image: "images/vanilla-body-lotion.png",
    skinType: "Dry",
    shades: [],
    inStock: true,
    stockLeft: 16,
    description: "Rich non-greasy body moisturizer infused with organic Shea butter and sweet intoxicating vanilla."
  },
  {
    id: 12,
    title: "Volumizing Waterproof Lash Mascara",
    brand: "Maybelline Glam",
    category: "Makeup",
    price: 449,
    mrp: 599,
    rating: 4.8,
    reviews: 5200,
    badge: "TOP RATED",
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: ["#000000"],
    inStock: true,
    stockLeft: 30,
    description: "Creates 10x instant volume and sky-high lift. Smudge-proof and clump-free all day long."
  },
  {
    id: 13,
    title: "Luxury Glow Skincare Ritual Set",
    brand: "Billo Glow",
    category: "Skincare",
    price: 1299,
    mrp: 1899,
    rating: 4.9,
    reviews: 760,
    badge: "GIFT SET",
    image: "images/skincare-luxury-tray.jpg",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 6,
    description: "Complete skincare ritual set with face serum, moisturizer, face oil & jade roller on a luxe marble tray."
  },
  {
    id: 14,
    title: "Dove Vanilla Body Spa Collection",
    brand: "Bath Bliss",
    category: "Bath & Body",
    price: 899,
    mrp: 1350,
    rating: 4.7,
    reviews: 1820,
    badge: "COMBO PACK",
    image: "images/bath-body-dove-collection.jpg",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 10,
    description: "Complete bath & body pampering set with body wash, body spray, vanilla scrub, hair serum & scented candle."
  },
  {
    id: 15,
    title: "Dove Deep Moisture Body Wash (500ml)",
    brand: "Bath Bliss",
    category: "Bath & Body",
    price: 349,
    mrp: 499,
    rating: 4.8,
    reviews: 6200,
    badge: "BESTSELLER",
    image: "images/dove-deep-moisture.jpg",
    skinType: "Dry",
    shades: [],
    inStock: true,
    stockLeft: 25,
    description: "24hr lotion-soft skin with NutriumMoisture technology. Clinically proven to nourish deep into skin surface."
  },
  {
    id: 16,
    title: "Amber Luxe Body Wash & Oil Duo",
    brand: "Mama Earth Remedies",
    category: "Bath & Body",
    price: 599,
    mrp: 850,
    rating: 4.6,
    reviews: 940,
    badge: "HERBAL",
    image: "images/body-wash-oil.jpg",
    skinType: "Normal",
    shades: [],
    inStock: true,
    stockLeft: 13,
    description: "Natural body wash and nourishing body oil duo with eucalyptus extract. Gentle cleansing with deep hydration."
  },
  {
    id: 17,
    title: "Glam Queen Complete Makeup Kit",
    brand: "Glam Studio",
    category: "Makeup",
    price: 1599,
    mrp: 2499,
    rating: 4.8,
    reviews: 2340,
    badge: "LUXURY SET",
    image: "images/makeup-luxury-flatlay.jpg",
    skinType: "All",
    shades: ["#be185d", "#d97706", "#92400e", "#fbbf24"],
    inStock: true,
    stockLeft: 7,
    description: "Premium makeup essentials with HD foundation, matte lipstick, highlighter, brushes & eyelash curler in a luxe kit."
  },
  {
    id: 18,
    title: "Herbal Hair Wellness Basket Kit",
    brand: "Mama Earth Remedies",
    category: "Haircare",
    price: 799,
    mrp: 1199,
    rating: 4.7,
    reviews: 1560,
    badge: "100% NATURAL",
    image: "images/haircare-herbal-basket.jpg",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 11,
    description: "Complete herbal haircare kit with coconut shampoo, conditioner, cold-pressed hair oil & deep conditioning mask."
  },
  {
    id: 19,
    title: "Nourish & Shine Luxe Strand Set",
    brand: "L'Oréal Pro",
    category: "Haircare",
    price: 1099,
    mrp: 1599,
    rating: 4.9,
    reviews: 890,
    badge: "SULFATE FREE",
    image: "images/haircare-luxe-strand.jpg",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 8,
    description: "Premium sulfate-free haircare set with nourishing shampoo, repair conditioner, growth serum & gloss hair oil."
  },
  {
    id: 20,
    title: "Oud & Sandalwood Luxury Attar (30ml)",
    brand: "Billo Luxe",
    category: "Fragrance",
    price: 1499,
    mrp: 2199,
    rating: 4.9,
    reviews: 430,
    badge: "PREMIUM",
    image: "images/oud-sandalwood-attar.png",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 3,
    description: "Handcrafted royal attar blending rare Indian Oud with Mysore Sandalwood. Lasts 48+ hours on pulse points."
  },
  {
    id: 21,
    title: "Retinol Anti-Aging Night Cream (50g)",
    brand: "Billo Glow",
    category: "Skincare",
    price: 699,
    mrp: 999,
    rating: 4.7,
    reviews: 1340,
    badge: "ANTI-AGING",
    image: "images/retinol-night-cream.png",
    skinType: "Normal",
    shades: [],
    inStock: true,
    stockLeft: 14,
    description: "0.5% pure Retinol night cream that reduces fine lines and wrinkles. Wake up to firmer, younger-looking skin."
  },
  {
    id: 22,
    title: "Matte Perfection Compact Powder",
    brand: "Lakmé Icon",
    category: "Makeup",
    price: 349,
    mrp: 499,
    rating: 4.5,
    reviews: 3400,
    badge: "OIL CONTROL",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    skinType: "Oily",
    shades: ["#fde68a", "#fbbf24", "#d97706", "#92400e"],
    inStock: true,
    stockLeft: 19,
    description: "Silk-smooth pressed powder that controls shine for 10 hours. Micro-fine formula blurs pores instantly."
  },
  {
    id: 23,
    title: "Coconut Milk Strengthening Shampoo (300ml)",
    brand: "Mama Earth Remedies",
    category: "Haircare",
    price: 399,
    mrp: 550,
    rating: 4.6,
    reviews: 2780,
    badge: "PARABEN FREE",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 21,
    description: "Sulfate-free coconut milk shampoo that strengthens hair from root to tip. Reduces breakage by 95%."
  },
  {
    id: 24,
    title: "Rose Petals & Musk EDT (100ml)",
    brand: "Billo Luxe",
    category: "Fragrance",
    price: 899,
    mrp: 1299,
    rating: 4.8,
    reviews: 520,
    badge: "FLORAL",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 9,
    description: "Romantic blend of Damask rose, white musk and peony. A fresh daytime fragrance that lasts 12 hours."
  },
  {
    id: 25,
    title: "Charcoal & Tea Tree Clay Mask (100g)",
    brand: "Billo Glow",
    category: "Skincare",
    price: 399,
    mrp: 549,
    rating: 4.7,
    reviews: 1890,
    badge: "DETOX",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80",
    skinType: "Oily",
    shades: [],
    inStock: true,
    stockLeft: 17,
    description: "Deep-cleansing activated charcoal mask that draws out impurities and tightens pores in just 10 minutes."
  },
  {
    id: 26,
    title: "Creamy Matte Lip Crayon Set (Pack of 4)",
    brand: "Sugar Kiss",
    category: "Makeup",
    price: 699,
    mrp: 999,
    rating: 4.8,
    reviews: 4100,
    badge: "VALUE PACK",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: ["#e11d48", "#be185d", "#9f1239", "#f43f5e"],
    inStock: true,
    stockLeft: 11,
    description: "Twist-up lip crayons in 4 bestselling Indian shades. Creamy, non-drying formula with 8-hour stay."
  },
  {
    id: 27,
    title: "Lavender Calming Bath Salt (500g)",
    brand: "Bath Bliss",
    category: "Bath & Body",
    price: 449,
    mrp: 650,
    rating: 4.6,
    reviews: 780,
    badge: "RELAXING",
    image: "images/lavender-bath-salt.png",
    skinType: "Sensitive",
    shades: [],
    inStock: true,
    stockLeft: 15,
    description: "Pure Himalayan bath salts infused with French lavender essential oil. Soothes sore muscles and calms the mind."
  },
  {
    id: 28,
    title: "Biotin Hair Growth Serum (60ml)",
    brand: "L'Oréal Pro",
    category: "Haircare",
    price: 649,
    mrp: 899,
    rating: 4.8,
    reviews: 1670,
    badge: "CLINICAL",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 10,
    description: "Concentrated biotin serum with caffeine and castor oil. Promotes thicker, denser hair growth in 8 weeks."
  },
  {
    id: 29,
    title: "Niacinamide 10% Pore Minimizer Serum",
    brand: "Billo Glow",
    category: "Skincare",
    price: 449,
    mrp: 649,
    rating: 4.9,
    reviews: 5600,
    badge: "VIRAL HIT",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=600&q=80",
    skinType: "Acne-Prone",
    shades: [],
    inStock: true,
    stockLeft: 7,
    description: "10% Niacinamide + 1% Zinc serum that visibly reduces pore size and controls excess sebum in 14 days."
  },
  {
    id: 30,
    title: "Precision Gel Eyeliner Pen (Waterproof)",
    brand: "Maybelline Glam",
    category: "Makeup",
    price: 299,
    mrp: 450,
    rating: 4.7,
    reviews: 3200,
    badge: "SMUDGE-PROOF",
    image: "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: ["#000000", "#1e3a5f"],
    inStock: true,
    stockLeft: 24,
    description: "Ultra-fine 0.1mm felt tip for razor-sharp wings. Waterproof, smudge-proof formula lasts 14 hours."
  },
  {
    id: 31,
    title: "Kumkumadi Tailam Glow Face Oil (30ml)",
    brand: "Mama Earth Remedies",
    category: "Skincare",
    price: 599,
    mrp: 799,
    rating: 4.8,
    reviews: 2100,
    badge: "AYURVEDIC",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80",
    skinType: "Dry",
    shades: [],
    inStock: true,
    stockLeft: 12,
    description: "Ancient Ayurvedic face oil with 26 herbs including saffron and sandalwood. Gives overnight golden glow."
  },
  {
    id: 32,
    title: "Citrus Burst Shower Gel (400ml)",
    brand: "Bath Bliss",
    category: "Bath & Body",
    price: 299,
    mrp: 425,
    rating: 4.5,
    reviews: 1340,
    badge: "REFRESHING",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 28,
    description: "Energizing shower gel with real orange peel extract and lemongrass. Wakes up your senses every morning."
  },
  {
    id: 33,
    title: "Color Correcting CC Cream SPF 30",
    brand: "Lakmé Icon",
    category: "Makeup",
    price: 499,
    mrp: 699,
    rating: 4.6,
    reviews: 1560,
    badge: "MULTI-USE",
    image: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=600&q=80",
    skinType: "Normal",
    shades: ["#fef3c7", "#fde68a", "#fbbf24", "#b45309"],
    inStock: true,
    stockLeft: 16,
    description: "Lightweight CC cream that evens tone, hides redness and provides SPF 30 sun protection in one step."
  },
  {
    id: 34,
    title: "Argan Oil Deep Conditioner (250ml)",
    brand: "L'Oréal Pro",
    category: "Haircare",
    price: 475,
    mrp: 675,
    rating: 4.7,
    reviews: 920,
    badge: "SMOOTHING",
    image: "https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 13,
    description: "Moroccan argan oil conditioner that detangles, smooths frizz and adds mirror-like shine to damaged hair."
  },
  {
    id: 35,
    title: "Vanilla Orchid Body Butter (200g)",
    brand: "Bath Bliss",
    category: "Bath & Body",
    price: 425,
    mrp: 599,
    rating: 4.8,
    reviews: 1780,
    badge: "RICH CREAM",
    image: "images/vanilla-body-butter.png",
    skinType: "Dry",
    shades: [],
    inStock: true,
    stockLeft: 18,
    description: "Ultra-rich whipped body butter with vanilla orchid, cocoa and mango seed butter. 48-hour deep moisture."
  },
  {
    id: 36,
    title: "Berry Blush Tinted Lip Balm (Set of 3)",
    brand: "Sugar Kiss",
    category: "Makeup",
    price: 349,
    mrp: 499,
    rating: 4.6,
    reviews: 2900,
    badge: "LIP CARE",
    image: "images/berry-lip-balm.png",
    skinType: "All",
    shades: ["#fb7185", "#f472b6", "#e11d48"],
    inStock: true,
    stockLeft: 20,
    description: "Hydrating tinted lip balms in 3 berry shades. SPF 15 protection with shea butter and jojoba oil."
  },
  {
    id: 37,
    title: "Aqua Fresh Micellar Cleansing Water (200ml)",
    brand: "Billo Glow",
    category: "Skincare",
    price: 299,
    mrp: 399,
    rating: 4.5,
    reviews: 1120,
    badge: "GENTLE",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80",
    skinType: "Sensitive",
    shades: [],
    inStock: true,
    stockLeft: 22,
    description: "No-rinse micellar water that removes makeup, dirt and oil in one swipe. Alcohol-free, pH balanced formula."
  },
  {
    id: 38,
    title: "Woody Leather Cologne Pour Homme (75ml)",
    brand: "Billo Luxe",
    category: "Fragrance",
    price: 1099,
    mrp: 1599,
    rating: 4.8,
    reviews: 680,
    badge: "FOR HIM",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 6,
    description: "Bold masculine fragrance with Italian bergamot, smoky leather and cedarwood. Projects power and confidence."
  },
  {
    id: 39,
    title: "Anti-Dandruff Scalp Treatment Shampoo (250ml)",
    brand: "Mama Earth Remedies",
    category: "Haircare",
    price: 375,
    mrp: 525,
    rating: 4.6,
    reviews: 2450,
    badge: "SCALP CARE",
    image: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 19,
    description: "Zinc pyrithione & tea tree oil shampoo that eliminates dandruff flakes from first wash. Soothes itchy scalp."
  },
  {
    id: 40,
    title: "24K Gold Illuminating Face Mist (100ml)",
    brand: "Glam Studio",
    category: "Skincare",
    price: 549,
    mrp: 799,
    rating: 4.7,
    reviews: 960,
    badge: "GLOW BOOST",
    image: "images/gold-face-mist.png",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 11,
    description: "Refreshing face mist with real 24K gold particles and rose water. Sets makeup and adds instant dewy glow."
  },
  {
    id: 41,
    title: "AHA BHA Exfoliating Peel Solution (30ml)",
    brand: "Billo Glow",
    category: "Skincare",
    price: 549,
    mrp: 749,
    rating: 4.8,
    reviews: 3800,
    badge: "EXFOLIANT",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    skinType: "Oily",
    shades: [],
    inStock: true,
    stockLeft: 9,
    description: "Professional-grade chemical peel with 10% AHA and 2% BHA. Resurfaces skin texture in just 10 minutes weekly."
  },
  {
    id: 42,
    title: "Silk Finish Setting Spray (120ml)",
    brand: "Glam Studio",
    category: "Makeup",
    price: 399,
    mrp: 549,
    rating: 4.7,
    reviews: 2100,
    badge: "LONG WEAR",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 16,
    description: "Micro-fine mist that locks makeup for 16 hours. Controls oil and prevents creasing without drying skin."
  },
  {
    id: 43,
    title: "Rice Water Brightening Toner (200ml)",
    brand: "Mama Earth Remedies",
    category: "Skincare",
    price: 349,
    mrp: 499,
    rating: 4.6,
    reviews: 1450,
    badge: "K-BEAUTY",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
    skinType: "Normal",
    shades: [],
    inStock: true,
    stockLeft: 20,
    description: "Fermented rice water toner inspired by Korean beauty rituals. Brightens, tightens and preps skin for serums."
  },
  {
    id: 44,
    title: "Bamboo Charcoal Detox Shampoo (300ml)",
    brand: "L'Oréal Pro",
    category: "Haircare",
    price: 449,
    mrp: 625,
    rating: 4.5,
    reviews: 1680,
    badge: "DEEP CLEAN",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 14,
    description: "Activated bamboo charcoal shampoo that removes product buildup and pollution. Leaves scalp fresh and clean."
  },
  {
    id: 45,
    title: "Jasmine & Tuberose Body Mist (150ml)",
    brand: "Billo Luxe",
    category: "Fragrance",
    price: 499,
    mrp: 699,
    rating: 4.7,
    reviews: 890,
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 18,
    description: "Light and fresh floral body mist with night-blooming jasmine and Indian tuberose. Perfect for everyday wear."
  },
  {
    id: 46,
    title: "Hydrating Aloe Vera Gel (250g)",
    brand: "Mama Earth Remedies",
    category: "Skincare",
    price: 249,
    mrp: 350,
    rating: 4.8,
    reviews: 7200,
    badge: "MULTIPURPOSE",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 35,
    description: "99% pure aloe vera gel for face, body and hair. Soothes sunburn, moisturizes and reduces acne inflammation."
  },
  {
    id: 47,
    title: "Smokey Eye Kohl Kajal Pencil (Pack of 2)",
    brand: "Lakmé Icon",
    category: "Makeup",
    price: 279,
    mrp: 399,
    rating: 4.6,
    reviews: 5400,
    badge: "INTENSE",
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: ["#000000", "#1a1a2e"],
    inStock: true,
    stockLeft: 27,
    description: "Ultra-pigmented waterproof kajal that glides smoothly. Rich black finish for dramatic smokey eyes that last all day."
  },
  {
    id: 48,
    title: "Coconut & Honey Hair Spa Cream (200g)",
    brand: "Mama Earth Remedies",
    category: "Haircare",
    price: 399,
    mrp: 575,
    rating: 4.7,
    reviews: 1340,
    badge: "SPA TREAT",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 12,
    description: "At-home hair spa cream with virgin coconut oil and raw honey. Repairs damage and restores silky softness."
  },
  {
    id: 49,
    title: "Strawberry Lip Scrub (15g)",
    brand: "Sugar Kiss",
    category: "Makeup",
    price: 199,
    mrp: 299,
    rating: 4.5,
    reviews: 2300,
    badge: "LIP PREP",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 22,
    description: "Sugar-based lip exfoliator with real strawberry extract. Buffs away dead skin for perfectly smooth, plump lips."
  },
  {
    id: 50,
    title: "Rose & Glycerin Hand Cream (75ml)",
    brand: "Bath Bliss",
    category: "Bath & Body",
    price: 199,
    mrp: 299,
    rating: 4.6,
    reviews: 1560,
    badge: "POCKET SIZE",
    image: "images/rose-hand-cream.png",
    skinType: "Dry",
    shades: [],
    inStock: true,
    stockLeft: 30,
    description: "Non-greasy hand cream with Bulgarian rose and glycerin. Absorbs instantly and keeps hands soft for 24 hours."
  },
  {
    id: 51,
    title: "Peptide Eye Contour Cream (15ml)",
    brand: "Billo Glow",
    category: "Skincare",
    price: 599,
    mrp: 849,
    rating: 4.8,
    reviews: 1120,
    badge: "DARK CIRCLES",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 8,
    description: "Triple-peptide under-eye cream that reduces dark circles, puffiness and crow's feet in 4 weeks."
  },
  {
    id: 52,
    title: "Bronzer & Contour Duo Palette",
    brand: "Glam Studio",
    category: "Makeup",
    price: 599,
    mrp: 849,
    rating: 4.7,
    reviews: 1890,
    badge: "SCULPTING",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: ["#d97706", "#92400e", "#78350f", "#451a03"],
    inStock: true,
    stockLeft: 10,
    description: "Matte bronzer and shimmer highlight duo for sculpted cheekbones. Blendable formula suits Indian skin tones."
  },
  {
    id: 53,
    title: "Hemp Seed Scalp Revival Oil (100ml)",
    brand: "Mama Earth Remedies",
    category: "Haircare",
    price: 449,
    mrp: 625,
    rating: 4.6,
    reviews: 780,
    badge: "ORGANIC",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 15,
    description: "Cold-pressed hemp seed oil with rosemary and peppermint. Relieves dry scalp and promotes healthy hair growth."
  },
  {
    id: 54,
    title: "Amber Noir Unisex Perfume (50ml)",
    brand: "Billo Luxe",
    category: "Fragrance",
    price: 1299,
    mrp: 1899,
    rating: 4.9,
    reviews: 340,
    badge: "UNISEX",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 4,
    description: "Dark and mysterious fragrance with black amber, tonka bean and smoky vetiver. A statement scent for bold souls."
  },
  {
    id: 55,
    title: "Exfoliating Coffee Body Scrub (200g)",
    brand: "Bath Bliss",
    category: "Bath & Body",
    price: 349,
    mrp: 499,
    rating: 4.7,
    reviews: 2400,
    badge: "ANTI-CELLULITE",
    image: "images/coffee-body-scrub.png",
    skinType: "Normal",
    shades: [],
    inStock: true,
    stockLeft: 17,
    description: "Arabica coffee scrub that exfoliates dead skin, boosts circulation and reduces appearance of cellulite."
  },
  {
    id: 56,
    title: "Vitamin E Overnight Repair Capsules (30pcs)",
    brand: "Billo Glow",
    category: "Skincare",
    price: 449,
    mrp: 599,
    rating: 4.8,
    reviews: 1670,
    badge: "CAPSULES",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80",
    skinType: "Dry",
    shades: [],
    inStock: true,
    stockLeft: 13,
    description: "Single-dose vitamin E facial oil capsules for overnight skin repair. Twist, apply and wake up to glowing skin."
  },
  {
    id: 57,
    title: "Full Coverage Concealer Wand (6ml)",
    brand: "Maybelline Glam",
    category: "Makeup",
    price: 349,
    mrp: 499,
    rating: 4.7,
    reviews: 3600,
    badge: "CREASE-FREE",
    image: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: ["#fef3c7", "#fde68a", "#d97706", "#92400e"],
    inStock: true,
    stockLeft: 21,
    description: "Creamy full-coverage concealer that hides dark circles and blemishes. Doe-foot applicator for precise control."
  },
  {
    id: 58,
    title: "Moroccan Argan Leave-In Spray (150ml)",
    brand: "L'Oréal Pro",
    category: "Haircare",
    price: 525,
    mrp: 749,
    rating: 4.8,
    reviews: 1240,
    badge: "FRIZZ CONTROL",
    image: "https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 11,
    description: "Lightweight leave-in spray with argan oil and keratin. Detangles, protects from heat and tames frizz all day."
  },
  {
    id: 59,
    title: "Shea & Cocoa Butter Foot Cream (100ml)",
    brand: "Bath Bliss",
    category: "Bath & Body",
    price: 249,
    mrp: 375,
    rating: 4.5,
    reviews: 890,
    badge: "CRACKED HEELS",
    image: "images/shea-foot-cream.png",
    skinType: "Dry",
    shades: [],
    inStock: true,
    stockLeft: 19,
    description: "Intensive repair foot cream with urea, shea and cocoa butter. Heals cracked heels and softens rough feet overnight."
  },
  {
    id: 60,
    title: "Turmeric & Saffron Brightening Face Pack (100g)",
    brand: "Mama Earth Remedies",
    category: "Skincare",
    price: 349,
    mrp: 499,
    rating: 4.7,
    reviews: 2800,
    badge: "INDIAN GLOW",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80",
    skinType: "All",
    shades: [],
    inStock: true,
    stockLeft: 16,
    description: "Traditional Ayurvedic face pack with pure Kashmiri saffron and wild turmeric. Instant brightness in 15 minutes."
  }
];

// 2. STATE MANAGEMENT
let cart = [];
let wishlist = new Set();
let currentCategoryFilter = 'All';
let currentBrandFilter = [];
let currentSkinTypeFilter = [];
let maxPriceFilter = 2000;
let currentSort = 'popularity';
let activeCoupon = null;

// 3. INITIALIZATION ON DOM LOAD
document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel();
  initFlashTimer();
  renderCatalog();
  initEventListeners();
  updateCartUI();
});

// 4. HERO BANNER CAROUSEL LOGIC
let currentSlide = 0;
let slideInterval;

function initHeroCarousel() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('carouselDots');
  if (!slides.length) return;

  // Render dots
  dotsContainer.innerHTML = '';
  slides.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = `dot ${idx === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');

  if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(1));

  startCarouselAutoPlay();
}

function goToSlide(index) {
  const slidesContainer = document.getElementById('carouselSlides');
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;

  currentSlide = index;
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSlide);
  });
}

function changeSlide(direction) {
  goToSlide(currentSlide + direction);
  resetCarouselAutoPlay();
}

function startCarouselAutoPlay() {
  slideInterval = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 5000);
}

function resetCarouselAutoPlay() {
  clearInterval(slideInterval);
  startCarouselAutoPlay();
}

// 5. FLASH SALE MIDNIGHT COUNTDOWN TIMER
function initFlashTimer() {
  let hours = 11;
  let mins = 45;
  let secs = 30;

  const hoursEl = document.getElementById('timerHours');
  const minsEl = document.getElementById('timerMins');
  const secsEl = document.getElementById('timerSecs');

  if (!hoursEl) return;

  setInterval(() => {
    secs--;
    if (secs < 0) {
      secs = 59;
      mins--;
      if (mins < 0) {
        mins = 59;
        hours--;
        if (hours < 0) {
          hours = 12; // Reset countdown
        }
      }
    }

    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');
  }, 1000);
}

// 6. RENDER CATALOG & FILTER ENGINE
function renderCatalog() {
  const grid = document.getElementById('productsGrid');
  const countEl = document.getElementById('resultsCount');
  if (!grid) return;

  // Filter Products
  let filtered = PRODUCTS_DATA.filter(p => {
    const matchCategory = currentCategoryFilter === 'All' || p.category === currentCategoryFilter;
    const matchPrice = p.price <= maxPriceFilter;
    const matchBrand = currentBrandFilter.length === 0 || currentBrandFilter.includes(p.brand);
    const matchSkin = currentSkinTypeFilter.length === 0 || currentSkinTypeFilter.includes(p.skinType);
    return matchCategory && matchPrice && matchBrand && matchSkin;
  });

  // Search Filter
  const searchInput = document.getElementById('searchInput');
  if (searchInput && searchInput.value.trim() !== '') {
    const query = searchInput.value.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.brand.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  }

  // Sorting
  if (currentSort === 'low-high') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'high-low') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Render Count
  if (countEl) countEl.innerHTML = `Showing <span>${filtered.length}</span> Products`;

  // Render Grid HTML
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search-minus"></i>
        <h3>No Products Found</h3>
        <p>Try resetting filters or searching for something else.</p>
        <button class="btn-reset-filters" style="margin-top: 12px; display: inline-block;" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = wishlist.has(product.id);
    const shadeHTML = product.shades.length > 0 
      ? `<div class="shade-swatches">
          ${product.shades.map((s, i) => `<span class="shade-dot ${i===0?'active':''}" style="background: ${s};" data-shade="${s}"></span>`).join('')}
         </div>`
      : '';

    return `
      <div class="product-card" data-id="${product.id}">
        <span class="card-badge">${product.badge}</span>
        <button class="card-wishlist ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id}, event)">
          <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
        </button>
        <div class="card-img-wrap" onclick="openQuickView(${product.id})">
          <img src="${product.image}" alt="${product.title}" loading="lazy">
          <button class="btn-quick-view">Quick View</button>
        </div>
        <div class="card-body">
          <div class="brand-name">${product.brand}</div>
          <div class="product-title" onclick="openQuickView(${product.id})">${product.title}</div>
          ${shadeHTML}
          <div class="rating-row">
            <span class="rating-badge">★ ${product.rating}</span>
            <span class="rating-count">(${product.reviews})</span>
          </div>
          <div class="price-row">
            <span class="current-price">₹${product.price}</span>
            <span class="mrp-price">₹${product.mrp}</span>
            <span class="discount-tag">${Math.round(((product.mrp - product.price)/product.mrp)*100)}% OFF</span>
          </div>
          <button class="btn-add-cart" onclick="addToCart(${product.id})">
            <i class="fas fa-shopping-bag"></i> Add To Cart
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// 7. EVENT LISTENERS SETUP
function initEventListeners() {
  // Category avatar clicks & megamenu clicks
  document.querySelectorAll('[data-category]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = el.getAttribute('data-category');
      currentCategoryFilter = cat;
      // Scroll to catalog
      document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
      renderCatalog();
    });
  });

  // Price Range Slider
  const priceSlider = document.getElementById('priceRange');
  const priceVal = document.getElementById('maxPriceVal');
  if (priceSlider) {
    priceSlider.addEventListener('input', (e) => {
      maxPriceFilter = parseInt(e.target.value);
      if (priceVal) priceVal.textContent = `₹${maxPriceFilter}`;
      renderCatalog();
    });
  }

  // Brand Filter Checkboxes
  document.querySelectorAll('.brand-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      currentBrandFilter = Array.from(document.querySelectorAll('.brand-checkbox:checked')).map(c => c.value);
      renderCatalog();
    });
  });

  // Skin Type Filter Checkboxes
  document.querySelectorAll('.skin-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      currentSkinTypeFilter = Array.from(document.querySelectorAll('.skin-checkbox:checked')).map(c => c.value);
      renderCatalog();
    });
  });

  // Sort Dropdown
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderCatalog();
    });
  }

  // Search Input & Autocomplete
  const searchInput = document.getElementById('searchInput');
  const searchDropdown = document.getElementById('searchResultsDropdown');

  if (searchInput && searchDropdown) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      renderCatalog();

      if (query.length < 2) {
        searchDropdown.classList.remove('active');
        return;
      }

      const matches = PRODUCTS_DATA.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.brand.toLowerCase().includes(query)
      ).slice(0, 4);

      if (matches.length > 0) {
        searchDropdown.innerHTML = matches.map(m => `
          <div class="search-result-item" onclick="openQuickView(${m.id})">
            <img src="${m.image}" alt="${m.title}">
            <div class="search-result-info">
              <div class="title">${m.title}</div>
              <div class="price">₹${m.price}</div>
            </div>
          </div>
        `).join('');
        searchDropdown.classList.add('active');
      } else {
        searchDropdown.classList.remove('active');
      }
    });

    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
        searchDropdown.classList.remove('active');
      }
    });
  }

  // Cart Drawer Triggers
  const cartTrigger = document.getElementById('cartTrigger');
  const closeCart = document.getElementById('closeCart');
  const cartDrawer = document.getElementById('cartDrawer');
  const modalOverlay = document.getElementById('modalOverlay');

  if (cartTrigger) {
    cartTrigger.addEventListener('click', () => openCartDrawer());
  }
  if (closeCart) {
    closeCart.addEventListener('click', () => closeCartDrawer());
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', () => {
      closeCartDrawer();
      closeModal('quickViewModal');
      closeModal('quizModal');
      closeModal('checkoutModal');
    });
  }
}

function resetAllFilters() {
  currentCategoryFilter = 'All';
  currentBrandFilter = [];
  currentSkinTypeFilter = [];
  maxPriceFilter = 2000;
  currentSort = 'popularity';

  const priceSlider = document.getElementById('priceRange');
  if (priceSlider) priceSlider.value = 2000;
  const priceVal = document.getElementById('maxPriceVal');
  if (priceVal) priceVal.textContent = '₹2000';

  document.querySelectorAll('.brand-checkbox, .skin-checkbox').forEach(cb => cb.checked = false);
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';

  renderCatalog();
  showToast("Filters reset!");
}

// 8. CART & WISHLIST LOGIC
function addToCart(productId, selectedShade = null) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const shade = selectedShade || (product.shades.length > 0 ? product.shades[0] : null);
  const existingIndex = cart.findIndex(item => item.id === productId && item.shade === shade);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      ...product,
      shade: shade,
      quantity: 1
    });
  }

  updateCartUI();
  openCartDrawer();
  showToast(`Added "${product.title}" to cart!`);
}

function updateCartQuantity(index, delta) {
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    updateCartUI();
  }
}

function removeCartItem(index) {
  cart.splice(index, 1);
  updateCartUI();
  showToast("Item removed from cart");
}

function updateCartUI() {
  const cartBadge = document.getElementById('cartBadgeCount');
  const cartItemsContainer = document.getElementById('cartItemsBody');
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountEl = document.getElementById('cartDiscount');
  const totalEl = document.getElementById('cartTotal');
  const freeShipBar = document.getElementById('freeShipProgress');
  const freeShipText = document.getElementById('freeShipText');

  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBadge) cartBadge.textContent = totalItemCount;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <h4>Your Cart is Empty</h4>
        <p>Discover top beauty picks and add them to your bag!</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '₹0';
    if (discountEl) discountEl.textContent = '₹0';
    if (totalEl) totalEl.textContent = '₹0';
    if (freeShipBar) freeShipBar.style.width = '0%';
    if (freeShipText) freeShipText.textContent = 'Add ₹499 for FREE Delivery!';
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = activeCoupon ? Math.round(subtotal * activeCoupon.percent) : 0;
  const total = subtotal - discount;

  // Free shipping meter (Threshold: ₹499)
  const shippingThreshold = 499;
  const shipProgress = Math.min((subtotal / shippingThreshold) * 100, 100);
  if (freeShipBar) freeShipBar.style.width = `${shipProgress}%`;
  if (freeShipText) {
    if (subtotal >= shippingThreshold) {
      freeShipText.innerHTML = '<i class="fas fa-check-circle"></i> You unlocked <strong>FREE Delivery!</strong>';
    } else {
      freeShipText.textContent = `Add ₹${shippingThreshold - subtotal} more to get FREE Delivery!`;
    }
  }

  cartItemsContainer.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.image}" class="cart-item-img" alt="${item.title}">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.title}</div>
        ${item.shade ? `<div class="cart-item-shade">Shade: <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${item.shade};vertical-align:middle;"></span></div>` : ''}
        <div class="cart-item-bottom">
          <div class="cart-price">₹${item.price * item.quantity}</div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateCartQuantity(${idx}, -1)">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity(${idx}, 1)">+</button>
          </div>
          <button class="btn-remove-item" onclick="removeCartItem(${idx})"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    </div>
  `).join('');

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (discountEl) discountEl.textContent = `-₹${discount}`;
  if (totalEl) totalEl.textContent = `₹${total}`;
}

function applyCoupon() {
  const input = document.getElementById('couponInput');
  const code = input ? input.value.trim().toUpperCase() : '';
  const msgEl = document.getElementById('couponAppliedMsg');

  if (code === 'BILLO20' || code === 'PURPLLE20') {
    activeCoupon = { code: code, percent: 0.20 };
    if (msgEl) msgEl.textContent = `🎉 Coupon '${code}' applied! (20% OFF)`;
    updateCartUI();
    showToast(`20% Discount Applied!`);
  } else if (code === 'BEAUTY10') {
    activeCoupon = { code: code, percent: 0.10 };
    if (msgEl) msgEl.textContent = `🎉 Coupon '${code}' applied! (10% OFF)`;
    updateCartUI();
    showToast(`10% Discount Applied!`);
  } else {
    if (msgEl) msgEl.textContent = `❌ Invalid Coupon Code. Try 'BILLO20'`;
  }
}

function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();
  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    showToast("Removed from Wishlist");
  } else {
    wishlist.add(productId);
    showToast("Added to Wishlist ❤️");
  }
  
  const wishBadge = document.getElementById('wishlistBadgeCount');
  if (wishBadge) wishBadge.textContent = wishlist.size;

  renderCatalog();
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('modalOverlay');
  if (drawer) drawer.classList.add('active');
  if (overlay) overlay.classList.add('active');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('modalOverlay');
  if (drawer) drawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
}

// 9. QUICK VIEW MODAL LOGIC
function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const overlay = document.getElementById('modalOverlay');
  const body = document.getElementById('quickViewContent');

  if (!modal || !body) return;

  const isWishlisted = wishlist.has(product.id);
  const shadeHTML = product.shades.length > 0 
    ? `<div style="margin-bottom: 16px;">
        <label style="font-weight: 700; font-size: 0.85rem; display: block; margin-bottom: 8px;">Select Shade:</label>
        <div class="shade-swatches" id="qvShadeSwatches">
          ${product.shades.map((s, i) => `<span class="shade-dot ${i===0?'active':''}" style="background: ${s}; width: 22px; height: 22px;" data-shade="${s}" onclick="selectQVShade(this)"></span>`).join('')}
        </div>
       </div>`
    : '';

  body.innerHTML = `
    <div class="quickview-layout">
      <div class="qv-img-wrap">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="qv-details">
        <div class="qv-brand">${product.brand}</div>
        <h2 class="qv-title">${product.title}</h2>
        <div class="rating-row" style="margin-bottom: 12px;">
          <span class="rating-badge">★ ${product.rating}</span>
          <span class="rating-count">(${product.reviews} customer reviews)</span>
        </div>
        <div class="price-row" style="margin-bottom: 16px;">
          <span class="current-price" style="font-size: 1.4rem;">₹${product.price}</span>
          <span class="mrp-price" style="font-size: 1rem;">₹${product.mrp}</span>
          <span class="discount-tag">${Math.round(((product.mrp - product.price)/product.mrp)*100)}% OFF</span>
        </div>
        <p class="qv-desc">${product.description}</p>
        ${shadeHTML}
        <div style="display: flex; gap: 12px; margin-top: auto;">
          <button class="btn-add-cart" style="flex: 1; padding: 12px 0;" onclick="addToCart(${product.id}); closeModal('quickViewModal');">
            <i class="fas fa-shopping-bag"></i> Add To Bag
          </button>
          <button class="card-wishlist ${isWishlisted ? 'active' : ''}" style="position: static; width: 46px; height: 46px;" onclick="toggleWishlist(${product.id}, event)">
            <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  overlay.classList.add('active');
}

function selectQVShade(el) {
  document.querySelectorAll('#qvShadeSwatches .shade-dot').forEach(d => d.classList.remove('active'));
  el.classList.add('active');
}

// 10. BEAUTY QUIZ MODAL LOGIC
let quizStep = 1;
let quizAnswers = {};

function openBeautyQuiz() {
  quizStep = 1;
  quizAnswers = {};
  renderQuizStep();
  const modal = document.getElementById('quizModal');
  const overlay = document.getElementById('modalOverlay');
  if (modal) modal.classList.add('active');
  if (overlay) overlay.classList.add('active');
}

function renderQuizStep() {
  const container = document.getElementById('quizModalBody');
  const progressFill = document.getElementById('quizStepFill');
  if (!container) return;

  if (progressFill) progressFill.style.width = `${(quizStep / 3) * 100}%`;

  if (quizStep === 1) {
    container.innerHTML = `
      <h3 class="quiz-question-title">Step 1: What is your primary skin concern?</h3>
      <div class="quiz-options-grid">
        <div class="quiz-option-card" onclick="selectQuizOption('concern', 'Glow & Brightening')">✨ Glow & Brightening</div>
        <div class="quiz-option-card" onclick="selectQuizOption('concern', 'Acne & Pores')">🌿 Acne & Pores</div>
        <div class="quiz-option-card" onclick="selectQuizOption('concern', 'Hydration & Dryness')">💧 Hydration & Dryness</div>
        <div class="quiz-option-card" onclick="selectQuizOption('concern', 'Anti-Aging')">🌸 Anti-Aging</div>
      </div>
    `;
  } else if (quizStep === 2) {
    container.innerHTML = `
      <h3 class="quiz-question-title">Step 2: What is your skin type?</h3>
      <div class="quiz-options-grid">
        <div class="quiz-option-card" onclick="selectQuizOption('type', 'Oily')">⚡ Oily / Combination</div>
        <div class="quiz-option-card" onclick="selectQuizOption('type', 'Dry')">🍃 Dry / Flaky</div>
        <div class="quiz-option-card" onclick="selectQuizOption('type', 'Normal')">☀️ Normal</div>
        <div class="quiz-option-card" onclick="selectQuizOption('type', 'Sensitive')">🛡️ Sensitive</div>
      </div>
    `;
  } else if (quizStep === 3) {
    container.innerHTML = `
      <h3 class="quiz-question-title">Step 3: What product category are you looking for?</h3>
      <div class="quiz-options-grid">
        <div class="quiz-option-card" onclick="selectQuizOption('cat', 'Skincare')">🧴 Skincare Serums</div>
        <div class="quiz-option-card" onclick="selectQuizOption('cat', 'Makeup')">💄 Makeup Essentials</div>
        <div class="quiz-option-card" onclick="selectQuizOption('cat', 'Haircare')">💇‍♀️ Hair Repair</div>
        <div class="quiz-option-card" onclick="selectQuizOption('cat', 'All')">🎁 All Round Beauty</div>
      </div>
    `;
  } else {
    // Show Recommendations
    const recs = PRODUCTS_DATA.slice(0, 2);
    container.innerHTML = `
      <h3 class="quiz-question-title" style="text-align: center; color: var(--primary);">🎉 Your Perfect Beauty Matches!</h3>
      <p style="text-align: center; margin-bottom: 20px; color: var(--text-muted);">Based on your skin profile, we recommend:</p>
      <div style="display: flex; gap: 16px; margin-bottom: 20px;">
        ${recs.map(p => `
          <div style="flex:1; border: 1px solid var(--border); border-radius: 10px; padding: 12px; text-align: center;">
            <img src="${p.image}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 6px; margin-bottom: 8px;">
            <div style="font-weight: 700; font-size: 0.88rem;">${p.title}</div>
            <div style="color: var(--primary); font-weight: 800; margin: 4px 0;">₹${p.price}</div>
            <button class="btn-add-cart" style="font-size: 0.78rem; padding: 6px 0;" onclick="addToCart(${p.id}); closeModal('quizModal');">Add To Bag</button>
          </div>
        `).join('')}
      </div>
      <button class="btn-checkout" onclick="closeModal('quizModal');">Explore Catalog</button>
    `;
  }
}

function selectQuizOption(key, value) {
  quizAnswers[key] = value;
  quizStep++;
  renderQuizStep();
}

// 11. CHECKOUT MODAL LOGIC
function openCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById('checkoutModal');
  const overlay = document.getElementById('modalOverlay');
  if (modal) modal.classList.add('active');
  if (overlay) overlay.classList.add('active');
}

function processOrder(e) {
  e.preventDefault();
  const modal = document.getElementById('checkoutModal');
  cart = [];
  activeCoupon = null;
  updateCartUI();
  closeModal('checkoutModal');
  showToast("🎉 Order Placed Successfully! Thank you for shopping with Billo Beauty.");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const overlay = document.getElementById('modalOverlay');
  if (modal) modal.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
}

// 12. TOAST NOTIFICATION UTILITY
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle" style="color: var(--success)"></i> ${message}`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
