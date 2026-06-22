export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: 'google' | 'instagram';
  avatar?: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    author: 'Priya Sharma',
    rating: 5,
    text: 'Absolutely the best homemade cakes in Ranchi! The chocolate truffle was divine. Will definitely order again for every celebration.',
    date: '2 weeks ago',
    source: 'google',
  },
  {
    id: '2',
    author: 'Rahul Verma',
    rating: 5,
    text: 'Ordered a custom birthday cake and it exceeded all expectations. The taste was phenomenal and the decoration was perfect!',
    date: '1 month ago',
    source: 'google',
  },
  {
    id: '3',
    author: 'Anita Kumari',
    rating: 5,
    text: 'The granola is my daily breakfast now. So fresh and crunchy — nothing like the store-bought ones. Highly recommend!',
    date: '3 weeks ago',
    source: 'google',
  },
  {
    id: '4',
    author: 'Deepak Singh',
    rating: 5,
    text: 'Best cheesecake I\'ve ever had in Ranchi. Creamy, rich, and the blueberry topping was fresh. A must-try!',
    date: '2 months ago',
    source: 'google',
  },
  {
    id: '5',
    author: 'Sneha Gupta',
    rating: 5,
    text: 'Ordered cupcakes for my daughter\'s school party. Every kid and parent loved them! Beautiful and delicious.',
    date: '1 week ago',
    source: 'instagram',
  },
  {
    id: '6',
    author: 'Vikash Mahato',
    rating: 5,
    text: 'The red velvet cake was pure perfection. Moist, flavourful, and the cream cheese frosting was on point. 10/10!',
    date: '3 weeks ago',
    source: 'google',
  },
  {
    id: '7',
    author: 'Kavita Devi',
    rating: 4,
    text: 'Lovely cookies — especially the chocolate chip ones. They remind me of homemade goodness. Will be a regular customer!',
    date: '1 month ago',
    source: 'instagram',
  },
  {
    id: '8',
    author: 'Amit Pandey',
    rating: 5,
    text: 'We\'ve been ordering from The Foodies Delight for all our family events. Consistent quality and amazing taste every single time.',
    date: '2 weeks ago',
    source: 'google',
  },
];
