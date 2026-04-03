/* ============================================
   GOLDEN COLLECTION — Product Catalog
   ============================================ */

const PRODUCTS = [
  // ===== CASUAL WEAR =====
  {
    id: 1,
    name: "Classic Polo Shirt",
    brand: "Ralph Lauren",
    price: 8999,
    originalPrice: 12999,
    category: "casual",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Timeless Ralph Lauren polo shirt crafted from premium breathable cotton piqué. Features the iconic embroidered pony logo on the chest. Perfect for smart-casual occasions with a tailored fit that flatters every physique.",
    image: "https://images.unsplash.com/photo-1625910513413-5fc36e7ec900?w=600&h=800&fit=crop&q=80",
    rating: 4.8,
    reviews: 234,
    isFeatured: true,
    isTrending: false,
    colors: ["Navy", "White", "Black"]
  },
  {
    id: 2,
    name: "Slim Fit Oxford Shirt",
    brand: "Tommy Hilfiger",
    price: 6499,
    originalPrice: 8999,
    category: "casual",
    sizes: ["S", "M", "L", "XL"],
    description: "A versatile Tommy Hilfiger oxford shirt in premium cotton with a slim fit silhouette. Features button-down collar, signature flag logo embroidery, and contrast interior placket for refined detail.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop&q=80",
    rating: 4.6,
    reviews: 189,
    isFeatured: false,
    isTrending: true,
    colors: ["Light Blue", "White", "Pink"]
  },
  {
    id: 3,
    name: "Piqué Cotton Polo",
    brand: "Lacoste",
    price: 7999,
    originalPrice: 10999,
    category: "casual",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Signature Lacoste L.12.12 polo shirt in petit piqué cotton. The iconic crocodile embroidered on the chest. Ribbed collar and armbands, two-button placket with mother-of-pearl buttons.",
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=800&fit=crop&q=80",
    rating: 4.7,
    reviews: 312,
    isFeatured: true,
    isTrending: true,
    colors: ["Green", "Navy", "Red"]
  },
  {
    id: 4,
    name: "Heritage Striped Polo",
    brand: "US Polo Assn.",
    price: 3499,
    originalPrice: 4999,
    category: "casual",
    sizes: ["M", "L", "XL", "XXL"],
    description: "US Polo Assn. heritage striped polo with classic American sporty style. Lightweight cotton blend for all-day comfort. Features contrast collar and signature double horsemen logo.",
    image: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=600&h=800&fit=crop&q=80",
    rating: 4.3,
    reviews: 156,
    isFeatured: false,
    isTrending: false,
    colors: ["Blue/White", "Red/Navy"]
  },
  {
    id: 5,
    name: "Premium Cotton Crew T-Shirt",
    brand: "Calvin Klein",
    price: 4299,
    originalPrice: 5999,
    category: "casual",
    sizes: ["S", "M", "L", "XL"],
    description: "Calvin Klein premium cotton crew neck t-shirt with minimalist CK monogram. Ultra-soft Supima cotton with a modern regular fit. Clean lines and understated luxury for everyday wear.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&q=80",
    rating: 4.5,
    reviews: 278,
    isFeatured: false,
    isTrending: true,
    colors: ["Black", "White", "Gray"]
  },

  // ===== FORMAL WEAR =====
  {
    id: 6,
    name: "Italian Wool Slim Fit Suit",
    brand: "Hugo Boss",
    price: 52999,
    originalPrice: 69999,
    category: "formal",
    sizes: ["38", "40", "42", "44", "46"],
    description: "Hugo Boss slim-fit suit in virgin wool Italian fabric. Modern two-button closure, peak lapels, and fully lined interior. Includes matching flat-front trousers with a refined tapered leg.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop&q=80",
    rating: 4.9,
    reviews: 87,
    isFeatured: true,
    isTrending: false,
    colors: ["Charcoal", "Navy", "Black"]
  },
  {
    id: 7,
    name: "French Cuff Dress Shirt",
    brand: "Armani Exchange",
    price: 9999,
    originalPrice: 13999,
    category: "formal",
    sizes: ["S", "M", "L", "XL"],
    description: "Armani Exchange refined French cuff dress shirt in crisp poplin cotton. Spread collar complements any tie width. Slim fit with AX emblem on cuff. Perfect under a blazer for boardroom to evening events.",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&h=800&fit=crop&q=80",
    rating: 4.7,
    reviews: 143,
    isFeatured: true,
    isTrending: true,
    colors: ["White", "Light Blue", "Lavender"]
  },
  {
    id: 8,
    name: "Tailored Fit Blazer",
    brand: "Ralph Lauren",
    price: 34999,
    originalPrice: 45999,
    category: "formal",
    sizes: ["38", "40", "42", "44"],
    description: "Ralph Lauren tailored blazer in premium Italian wool-blend fabric. Notch lapels, two-button closure, and flap pockets. Full canvas construction with natural shoulder for refined silhouette.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop&q=80",
    rating: 4.8,
    reviews: 98,
    isFeatured: false,
    isTrending: true,
    colors: ["Navy", "Charcoal"]
  },
  {
    id: 9,
    name: "Slim Fit Formal Trousers",
    brand: "Calvin Klein",
    price: 7499,
    originalPrice: 9999,
    category: "formal",
    sizes: ["30", "32", "34", "36", "38"],
    description: "Calvin Klein slim-fit formal trousers in stretch wool blend. Flat front with extended hook-and-bar closure. Side and back pockets, tapered leg. Ideal for modern office and formal occasions.",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop&q=80",
    rating: 4.5,
    reviews: 167,
    isFeatured: false,
    isTrending: false,
    colors: ["Black", "Navy", "Charcoal"]
  },
  {
    id: 10,
    name: "Tuxedo Shirt with Bib Front",
    brand: "Hugo Boss",
    price: 14999,
    originalPrice: 19999,
    category: "formal",
    sizes: ["S", "M", "L", "XL"],
    description: "Hugo Boss tuxedo shirt crafted from fine cotton with pleated bib front. Wing collar, French cuffs, and concealed button placket. The ultimate black-tie essential for gala events.",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&h=800&fit=crop&q=80",
    rating: 4.9,
    reviews: 56,
    isFeatured: true,
    isTrending: false,
    colors: ["White"]
  },

  // ===== STREETWEAR =====
  {
    id: 11,
    name: "Logo Graphic Hoodie",
    brand: "Versace",
    price: 45999,
    originalPrice: 59999,
    category: "streetwear",
    sizes: ["S", "M", "L", "XL"],
    description: "Versace Medusa logo graphic hoodie in heavyweight French terry cotton. Bold baroque-inspired print on front. Kangaroo pocket, ribbed cuffs and hem. A statement piece merging luxury with street style.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&q=80",
    rating: 4.6,
    reviews: 72,
    isFeatured: true,
    isTrending: true,
    colors: ["Black", "White"]
  },
  {
    id: 12,
    name: "Bomber Jacket",
    brand: "Tommy Hilfiger",
    price: 18999,
    originalPrice: 24999,
    category: "streetwear",
    sizes: ["S", "M", "L", "XL"],
    description: "Tommy Hilfiger classic bomber jacket in water-resistant nylon with quilted lining. Ribbed collar, cuffs and hem. Zip front closure, dual slash pockets. Signature flag on sleeve.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&q=80",
    rating: 4.7,
    reviews: 201,
    isFeatured: false,
    isTrending: true,
    colors: ["Navy", "Black", "Olive"]
  },
  {
    id: 13,
    name: "Oversized Logo T-Shirt",
    brand: "Armani Exchange",
    price: 5999,
    originalPrice: 7999,
    category: "streetwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Armani Exchange oversized cotton t-shirt with bold AX logo print. Drop-shoulder design with relaxed fit. Premium jersey cotton for ultimate comfort. Street-ready style with luxury branding.",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop&q=80",
    rating: 4.4,
    reviews: 289,
    isFeatured: false,
    isTrending: true,
    colors: ["Black", "White", "Gray"]
  },
  {
    id: 14,
    name: "Track Pants",
    brand: "Versace",
    price: 38999,
    originalPrice: 49999,
    category: "streetwear",
    sizes: ["S", "M", "L", "XL"],
    description: "Versace logo-tape track pants with Greca border detail. Elasticated waist with drawstring. Side zip pockets and tapered leg. The perfect fusion of athletic and luxury aesthetics.",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop&q=80",
    rating: 4.5,
    reviews: 63,
    isFeatured: false,
    isTrending: false,
    colors: ["Black/Gold", "Navy"]
  },
  {
    id: 15,
    name: "Quilted Vest Jacket",
    brand: "Ralph Lauren",
    price: 15999,
    originalPrice: 21999,
    category: "streetwear",
    sizes: ["M", "L", "XL", "XXL"],
    description: "Ralph Lauren quilted down vest with water-repellent finish. Stand collar, full zip front, and side pockets. Embroidered pony logo on chest. Lightweight layering piece for transitional weather.",
    image: "https://images.unsplash.com/photo-1544923246-77307dd270f9?w=600&h=800&fit=crop&q=80",
    rating: 4.6,
    reviews: 134,
    isFeatured: true,
    isTrending: false,
    colors: ["Black", "Navy", "Olive"]
  },
  {
    id: 16,
    name: "Leather Biker Jacket",
    brand: "Hugo Boss",
    price: 62999,
    originalPrice: 79999,
    category: "streetwear",
    sizes: ["S", "M", "L", "XL"],
    description: "Hugo Boss genuine leather biker jacket with asymmetric zip closure. Lambskin leather, satin lining. Notch lapels, zippered pockets and cuffs. A timeless investment in rebel luxury.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop&q=80",
    rating: 4.9,
    reviews: 41,
    isFeatured: true,
    isTrending: true,
    colors: ["Black", "Dark Brown"]
  },

  // ===== ACCESSORIES =====
  {
    id: 17,
    name: "Medusa Buckle Leather Belt",
    brand: "Versace",
    price: 32999,
    originalPrice: 42999,
    category: "accessories",
    sizes: ["85cm", "90cm", "95cm", "100cm"],
    description: "Versace iconic Medusa head buckle belt in genuine Italian leather. Polished gold-tone hardware with 3.5cm width. Smooth calfskin leather with embossed logo interior. A bold signature accessory.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop&q=80",
    rating: 4.8,
    reviews: 95,
    isFeatured: true,
    isTrending: true,
    colors: ["Black/Gold", "Brown/Gold"]
  },
  {
    id: 18,
    name: "GG Supreme Wallet",
    brand: "Gucci",
    price: 28999,
    originalPrice: 35999,
    category: "accessories",
    sizes: ["One Size"],
    description: "Gucci GG Supreme canvas bifold wallet with leather trim. Features gold-toned GG hardware. Six card slots, two bill compartments, and ID window. Comes in signature Gucci dust bag.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=800&fit=crop&q=80",
    rating: 4.7,
    reviews: 178,
    isFeatured: false,
    isTrending: true,
    colors: ["Beige/Brown", "Black"]
  },
  {
    id: 19,
    name: "Classic Check Cashmere Scarf",
    brand: "Burberry",
    price: 41999,
    originalPrice: 54999,
    category: "accessories",
    sizes: ["One Size"],
    description: "Burberry iconic Nova Check scarf in 100% cashmere. Lightweight and luxuriously soft with fringed ends. The signature plaid pattern in camel, black, red and white. Made in Scotland.",
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop&q=80",
    rating: 4.9,
    reviews: 112,
    isFeatured: true,
    isTrending: false,
    colors: ["Classic Check", "Navy Check"]
  },
  {
    id: 20,
    name: "Aviator Sunglasses",
    brand: "Tommy Hilfiger",
    price: 9999,
    originalPrice: 13999,
    category: "accessories",
    sizes: ["One Size"],
    description: "Tommy Hilfiger aviator sunglasses with gold metal frame and gradient lenses. UV400 protection. TH logo on temple arms. Includes branded case and cleaning cloth. Classic American cool.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=800&fit=crop&q=80",
    rating: 4.4,
    reviews: 203,
    isFeatured: false,
    isTrending: false,
    colors: ["Gold/Brown", "Silver/Gray"]
  },
  {
    id: 21,
    name: "Chronograph Watch",
    brand: "Armani Exchange",
    price: 19999,
    originalPrice: 27999,
    category: "accessories",
    sizes: ["One Size"],
    description: "Armani Exchange chronograph watch with brushed stainless steel case. 44mm dial with date display. Three-link bracelet with deployment clasp. Water resistant to 50m. Subtle AX logo at 12 o'clock.",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=800&fit=crop&q=80",
    rating: 4.6,
    reviews: 245,
    isFeatured: true,
    isTrending: true,
    colors: ["Silver", "Gold", "Rose Gold"]
  },
  {
    id: 22,
    name: "Leather Card Holder",
    brand: "Calvin Klein",
    price: 4999,
    originalPrice: 6999,
    category: "accessories",
    sizes: ["One Size"],
    description: "Calvin Klein minimalist leather card holder in smooth calfskin. Four card slots with central compartment. Embossed CK logo. Ultra-slim design fits any pocket. Modern essential accessory.",
    image: "https://images.unsplash.com/photo-1606503153255-59d8b2e4b0a4?w=600&h=800&fit=crop&q=80",
    rating: 4.3,
    reviews: 167,
    isFeatured: false,
    isTrending: false,
    colors: ["Black", "Brown", "Navy"]
  },
  {
    id: 23,
    name: "Trench Coat",
    brand: "Burberry",
    price: 89999,
    originalPrice: 119999,
    category: "formal",
    sizes: ["S", "M", "L", "XL"],
    description: "Burberry Kensington Heritage trench coat in gabardine cotton. Double-breasted with horn-look buttons, storm shield, and belted waist. Signature check lining. An enduring icon of British style.",
    image: "https://images.unsplash.com/photo-1544923246-77307dd270f9?w=600&h=800&fit=crop&q=80",
    rating: 4.9,
    reviews: 34,
    isFeatured: true,
    isTrending: false,
    colors: ["Honey", "Black"]
  },
  {
    id: 24,
    name: "Casual Linen Shirt",
    brand: "Lacoste",
    price: 8499,
    originalPrice: 11999,
    category: "casual",
    sizes: ["S", "M", "L", "XL"],
    description: "Lacoste regular fit linen shirt with relaxed summer appeal. Mother-of-pearl buttons, spread collar, and embroidered crocodile logo. Pure linen for breathable, effortless style.",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop&q=80",
    rating: 4.5,
    reviews: 138,
    isFeatured: false,
    isTrending: true,
    colors: ["White", "Sky Blue", "Beige"]
  },
  {
    id: 25,
    name: "Slim Chino Pants",
    brand: "Tommy Hilfiger",
    price: 6999,
    originalPrice: 8999,
    category: "casual",
    sizes: ["30", "32", "34", "36"],
    description: "Tommy Hilfiger Bleecker slim fit chinos in premium stretch cotton. Classic five-pocket styling, zip fly with button closure. Flag logo on back pocket. Versatile wardrobe essential.",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop&q=80",
    rating: 4.4,
    reviews: 221,
    isFeatured: false,
    isTrending: false,
    colors: ["Khaki", "Navy", "Olive"]
  },
  {
    id: 26,
    name: "Premium Denim Jacket",
    brand: "Calvin Klein",
    price: 12999,
    originalPrice: 17999,
    category: "streetwear",
    sizes: ["S", "M", "L", "XL"],
    description: "Calvin Klein premium denim jacket in mid-wash stretch denim. Classic trucker style with clean lines. CK branding on back yoke. Button front, chest pockets. Modern urban staple.",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=800&fit=crop&q=80",
    rating: 4.5,
    reviews: 176,
    isFeatured: false,
    isTrending: true,
    colors: ["Medium Wash", "Dark Wash", "Black"]
  }
];

// Category data for display
const CATEGORIES = [
  {
    id: "casual",
    name: "Casual Wear",
    description: "Effortless style for everyday luxury",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=400&fit=crop&q=80",
    count: PRODUCTS.filter(p => p.category === "casual").length
  },
  {
    id: "formal",
    name: "Formal Wear",
    description: "Command every room with distinction",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop&q=80",
    count: PRODUCTS.filter(p => p.category === "formal").length
  },
  {
    id: "streetwear",
    name: "Streetwear",
    description: "Bold statements for the urban elite",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=400&fit=crop&q=80",
    count: PRODUCTS.filter(p => p.category === "streetwear").length
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "The details that define refinement",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop&q=80",
    count: PRODUCTS.filter(p => p.category === "accessories").length
  }
];

// Testimonials
const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    location: "Mumbai",
    rating: 5,
    text: "The quality of the Hugo Boss suit I ordered was impeccable. The fit was perfect and the fabric is truly premium. Golden Collection has become my go-to for luxury fashion.",
    avatar: "AM"
  },
  {
    name: "Vikram Singh",
    location: "Delhi",
    rating: 5,
    text: "I've ordered multiple Ralph Lauren polos and Tommy Hilfiger shirts. Every piece arrives in perfect condition with authentic packaging. Best luxury fashion store in India.",
    avatar: "VS"
  },
  {
    name: "Rohan Kapoor",
    location: "Bangalore",
    rating: 4,
    text: "The Versace belt I purchased is absolutely stunning. The Medusa buckle is eye-catching and the leather quality is superb. I keep coming back for accessories.",
    avatar: "RK"
  }
];

// Helper functions
function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.isFeatured);
}

function getTrendingProducts() {
  return PRODUCTS.filter(p => p.isTrending);
}

function getProductsByCategory(category) {
  return PRODUCTS.filter(p => p.category === category);
}

function searchProducts(query) {
  const q = query.toLowerCase();
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );
}

function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

function getStarsHTML(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '★';
    } else if (i - 0.5 <= rating) {
      stars += '★';
    } else {
      stars += '☆';
    }
  }
  return stars;
}

function getDiscountPercent(original, current) {
  return Math.round(((original - current) / original) * 100);
}
