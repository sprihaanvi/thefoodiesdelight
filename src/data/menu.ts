export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  description: string;
  image: string;
  startingPrice?: string;
  isPopular?: boolean;
}

export type Category =
  | 'cakes'
  | 'brownies'
  | 'cookies'
  | 'cupcakes'
  | 'pastries'
  | 'desserts'
  | 'cheesecakes'
  | 'granola';

export const categories: { key: Category; label: string; emoji: string }[] = [
  { key: 'cakes', label: 'Cakes', emoji: '🎂' },
  { key: 'brownies', label: 'Brownies', emoji: '🍫' },
  { key: 'cookies', label: 'Cookies', emoji: '🍪' },
  { key: 'cupcakes', label: 'Cupcakes & Muffins', emoji: '🧁' },
  { key: 'pastries', label: 'Pastries', emoji: '🥐' },
  { key: 'desserts', label: 'Desserts', emoji: '🍨' },
  { key: 'cheesecakes', label: 'Cheesecakes', emoji: '🍰' },
  { key: 'granola', label: 'Granola', emoji: '🥣' },
];

// Designer cake images — used on homepage and as aesthetic fallbacks
export const designerCakeImages = [
  '/cakeImages/designercake.webp',
  '/cakeImages/birthday.webp',
  '/cakeImages/birthdayCakeWMessage.webp',
  '/cakeImages/tiercake.webp',
  '/cakeImages/Tiramisu.webp',
  '/cakeImages/engagement.webp',
  '/cakeImages/Engagement tier cake.webp',
  '/cakeImages/engagementpretty.webp',
  '/cakeImages/fondantcake.webp',
  '/cakeImages/forestthemed.webp',
  '/cakeImages/junglethemed.webp',
  '/cakeImages/Spathemed.webp',
  '/cakeImages/themedMermaidCake.webp',
  '/cakeImages/vanillabentodesigner.webp',
  '/cakeImages/withthebaker.webp',
];

export const menuItems: MenuItem[] = [
  // ── Cakes ──
  {
    id: 'vanilla-cake',
    name: 'Vanilla Cake',
    category: 'cakes',
    description: 'Light and fluffy vanilla sponge with smooth buttercream frosting — a classic favourite.',
    image: '/cakeImages/vanillacake.webp',
    startingPrice: '₹600',
  },
  {
    id: 'chocolate-truffle',
    name: 'Chocolate Truffle Cake',
    category: 'cakes',
    description: 'Rich, decadent layers of dark chocolate ganache with a moist chocolate sponge.',
    image: '/cakeImages/Chocolate.webp',
    startingPrice: '₹800',
    isPopular: true,
  },
  {
    id: 'butterscotch-cake',
    name: 'Butterscotch Cake',
    category: 'cakes',
    description: 'Soft vanilla sponge layered with creamy butterscotch frosting and caramel drizzle.',
    image: '/cakeImages/butterscotch.webp',
    startingPrice: '₹700',
  },
  {
    id: 'red-velvet',
    name: 'Red Velvet Cake',
    category: 'cakes',
    description: 'Classic red velvet with cream cheese frosting — a timeless favourite.',
    image: '/cakeImages/fondantcake.webp',
    startingPrice: '₹900',
    isPopular: true,
  },
  {
    id: 'pineapple-cake',
    name: 'Pineapple Cake',
    category: 'cakes',
    description: 'Light and fluffy pineapple sponge with whipped cream and caramelised pineapple.',
    image: '/cakeImages/pineapple.webp',
    startingPrice: '₹650',
  },
  {
    id: 'strawberry-cake',
    name: 'Strawberry Cake',
    category: 'cakes',
    description: 'Fresh strawberry sponge with strawberry cream filling and real berry topping.',
    image: '/cakeImages/strawberry.webp',
    startingPrice: '₹850',
    isPopular: true,
  },
  {
    id: 'blueberry-cake',
    name: 'Blueberry Cake',
    category: 'cakes',
    description: 'Tender vanilla sponge with luscious blueberry compote and fresh berries.',
    image: '/cakeImages/vanillabentodesigner.webp',
    startingPrice: '₹900',
  },
  {
    id: 'mango-cake',
    name: 'Mango Cake',
    category: 'cakes',
    description: 'Seasonal mango sponge with fresh mango cream — a summer special.',
    image: '/cakeImages/Tiramisu.webp',
    startingPrice: '₹850',
  },
  {
    id: 'fresh-fruit-cake',
    name: 'Fresh Fruit Cake',
    category: 'cakes',
    description: 'Light vanilla sponge loaded with seasonal fresh fruits and whipped cream.',
    image: '/cakeImages/freshfruit.webp',
    startingPrice: '₹800',
  },
  {
    id: 'rasmalai-cake',
    name: 'Rasmalai Cake',
    category: 'cakes',
    description: 'A fusion masterpiece — traditional rasmalai flavours in a modern cake form.',
    image: '/cakeImages/rasmalaicake.webp',
    startingPrice: '₹1000',
    isPopular: true,
  },
  {
    id: 'white-forest',
    name: 'White Forest Cake',
    category: 'cakes',
    description: 'Delicate white chocolate sponge with cherry filling and white chocolate shavings.',
    image: '/cakeImages/whiteforest.webp',
    startingPrice: '₹850',
  },
  {
    id: 'black-forest',
    name: 'Black Forest Cake',
    category: 'cakes',
    description: 'Classic chocolate sponge with cherry compote, whipped cream, and chocolate curls.',
    image: '/cakeImages/blackforest.webp',
    startingPrice: '₹800',
  },
  {
    id: 'plum-cake',
    name: 'Plum Cake',
    category: 'cakes',
    description: 'Rich, moist cake packed with dried fruits and warm spices — a festive favourite.',
    image: '/cakeImages/plumcake.webp',
    startingPrice: '₹500',
  },
  {
    id: 'designer-cakes',
    name: 'Designer & Themed Cakes',
    category: 'cakes',
    description: 'Custom designer and themed cakes for birthdays, weddings, and special occasions.',
    image: '/cakeImages/designercake.webp',
    startingPrice: '₹1500',
  },

  // ── Brownies ──
  {
    id: 'plain-brownie',
    name: 'Brownies',
    category: 'brownies',
    description: 'Dense, fudgy chocolate brownies with a crackly top — pure chocolate indulgence.',
    image: '/cakeImages/brownie.webp',
    startingPrice: '₹80/pc',
    isPopular: true,
  },
  // {
  //   id: 'walnut-brownie',
  //   name: 'Walnut Brownies',
  //   category: 'brownies',
  //   description: 'Classic fudge brownies loaded with crunchy walnut pieces.',
  //   image: '/cakeImages/brownie.webp',
  //   startingPrice: '₹100/pc',
  // },
  // {
  //   id: 'chocochip-brownie',
  //   name: 'Chocochip Brownies',
  //   category: 'brownies',
  //   description: 'Fudgy brownies studded with melty chocolate chips throughout.',
  //   image: '/cakeImages/brownie.webp',
  //   startingPrice: '₹100/pc',
  // },
  // {
  //   id: 'oreo-brownie',
  //   name: 'Oreo Brownies',
  //   category: 'brownies',
  //   description: 'Chocolatey brownies with crushed Oreo cookies baked right in.',
  //   image: '/cakeImages/brownie.webp',
  //   startingPrice: '₹100/pc',
  // },
  // {
  //   id: 'nutella-brownie',
  //   name: 'Nutella Brownies',
  //   category: 'brownies',
  //   description: 'Swirled with generous Nutella for an extra layer of hazelnut chocolate heaven.',
  //   image: '/cakeImages/brownie.webp',
  //   startingPrice: '₹120/pc',
  // },
  // {
  //   id: 'triple-choco-brownie',
  //   name: 'Triple Chocolate Brownies',
  //   category: 'brownies',
  //   description: 'Dark, milk, and white chocolate come together in the ultimate brownie experience.',
  //   image: '/cakeImages/brownie.webp',
  //   startingPrice: '₹120/pc',
  // },
  // {
  //   id: 'red-velvet-brownie',
  //   name: 'Red Velvet Brownies',
  //   category: 'brownies',
  //   description: 'Red velvet meets brownie — fudgy, vibrant, with a cream cheese swirl.',
  //   image: '/cakeImages/brownie.webp',
  //   startingPrice: '₹120/pc',
  // },

  // ── Cookies ──
  {
    id: 'cashew-cookies',
    name: 'Cookies',
    category: 'cookies',
    description: 'Buttery cookies loaded with roasted cashew pieces — melt-in-your-mouth goodness.',
    image: '/cakeImages/CookiesMix.webp',
    startingPrice: '₹60/pc',
  },
  // {
  //   id: 'sweet-salty-cookies',
  //   name: 'Sweet & Salty Cookies',
  //   category: 'cookies',
  //   description: 'The perfect balance of sweet and salty in every crunchy bite.',
  //   image: '/cakeImages/CookiesMix.webp',
  //   startingPrice: '₹50/pc',
  // },
  // {
  //   id: 'ginger-cookies',
  //   name: 'Ginger Cookies',
  //   category: 'cookies',
  //   description: 'Warm, spiced ginger cookies with a satisfying snap — perfect with chai.',
  //   image: '/cakeImages/CookiesMix.webp',
  //   startingPrice: '₹50/pc',
  // },
  // {
  //   id: 'marble-cookies',
  //   name: 'Marble Cookies',
  //   category: 'cookies',
  //   description: 'Beautiful swirled vanilla and chocolate cookies — as pretty as they are tasty.',
  //   image: '/cakeImages/CookiesMix.webp',
  //   startingPrice: '₹60/pc',
  // },
  // {
  //   id: 'kesar-pista-cookies',
  //   name: 'Kesar Pista Cookies',
  //   category: 'cookies',
  //   description: 'Premium cookies infused with saffron and studded with pistachios.',
  //   image: '/cakeImages/CookiesMix.webp',
  //   startingPrice: '₹70/pc',
  // },
  // {
  //   id: 'little-hearts-cookies',
  //   name: 'Little Hearts Cookies',
  //   category: 'cookies',
  //   description: 'Adorable heart-shaped puff pastry cookies with a caramelised sugar coating.',
  //   image: '/cakeImages/CookiesMix.webp',
  //   startingPrice: '₹50/pc',
  // },
  // {
  //   id: 'blueberry-cookies',
  //   name: 'Blueberry Cookies',
  //   category: 'cookies',
  //   description: 'Soft-baked cookies bursting with real blueberry flavour.',
  //   image: '/cakeImages/CookiesMix.webp',
  //   startingPrice: '₹60/pc',
  // },

  // ── Cupcakes & Muffins ──
  {
    id: 'cupcakes',
    name: 'Cupcakes',
    category: 'cupcakes',
    description: 'Fluffy cupcakes with swirled buttercream — available in all our cake flavours.',
    image: '/cakeImages/chocolatecupcake.webp',
    startingPrice: '₹80/pc',
    isPopular: true,
  },
  {
    id: 'muffins',
    name: 'Muffins',
    category: 'cupcakes',
    description: 'Freshly baked muffins — chocolate, blueberry, banana walnut, and more.',
    image: '/cakeImages/brownie_muffin.webp',
    startingPrice: '₹70/pc',
  },

  // ── Pastries ──
  {
    id: 'doughnuts',
    name: 'Doughnuts',
    category: 'pastries',
    description: 'Soft, pillowy doughnuts with glazes and toppings of your choice.',
    image: '/cakeImages/doughnuts.webp',
    startingPrice: '₹80/pc',
  },
  // {
  //   id: 'churros',
  //   name: 'Churros',
  //   category: 'pastries',
  //   description: 'Crispy, golden churros dusted with cinnamon sugar — served with chocolate dip.',
  //   image: '/cakeImages/ChocolateDutch.webp',
  //   startingPrice: '₹100/pc',
  // },
  // {
  //   id: 'cinnamon-rolls',
  //   name: 'Cinnamon Rolls',
  //   category: 'pastries',
  //   description: 'Warm, gooey cinnamon rolls with cream cheese glaze — freshly baked perfection.',
  //   image: '/cakeImages/fondantcake.webp',
  //   startingPrice: '₹120/pc',
  //   isPopular: true,
  // },

  // ── Desserts ──
  // {
  //   id: 'mousse',
  //   name: 'Mousse',
  //   category: 'desserts',
  //   description: 'Silky, airy mousse in chocolate, mango, and strawberry — served in individual jars.',
  //   image: '/cakeImages/tiercake.webp',
  //   startingPrice: '₹150/jar',
  // },
  // {
  //   id: 'choco-lava',
  //   name: 'Choco Lava Cake',
  //   category: 'desserts',
  //   description: 'Warm chocolate cake with a molten chocolate centre — pure indulgence.',
  //   image: '/cakeImages/ChocolateDutch.webp',
  //   startingPrice: '₹150/pc',
  //   isPopular: true,
  // },
  // {
  //   id: 'popsicles',
  //   name: 'Popsicles',
  //   category: 'desserts',
  //   description: 'Refreshing homemade popsicles in fruity and chocolatey flavours.',
  //   image: '/cakeImages/birthday.webp',
  //   startingPrice: '₹60/pc',
  // },
  {
    id: 'cake-pops',
    name: 'Cake Pops',
    category: 'desserts',
    description: 'Bite-sized cake balls on a stick, dipped in chocolate and decorated with love.',
    image: '/cakeImages/birthdayCakeWMessage.webp',
    startingPrice: '₹50/pc',
  },

  // ── Cheesecakes ──
  {
    id: 'cheesecake',
    name: 'Cheesecake',
    category: 'cheesecakes',
    description: 'Dense, creamy cheesecake on a buttery biscuit base — available in multiple flavours.',
    image: '/cakeImages/Cheesecake.webp',
    startingPrice: '₹1200',
    isPopular: true,
  },

  // ── Granola ──
  {
    id: 'honey-almond-granola',
    name: 'Honey Almond Granola',
    category: 'granola',
    description: 'Crunchy clusters of oats, almonds, and seeds, sweetened with pure honey.',
    image: '/cakeImages/granola.jpg',
    startingPrice: '₹350/jar',
  },
];