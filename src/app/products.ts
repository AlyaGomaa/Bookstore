export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image:string
}

export const products = [
  {
    id: 1,
    name: 'Think and Grow Rich',
    price: 12,
    description: 'Think and Grow Rich is a book written by Napoleon Hill in 1937 and promoted as a personal development and self-improvement book. He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie.',
    image: 'https://images-ext-1.discordapp.net/external/6gQL7M0jXnJGIXXIhX08WQ93Nh1F0_Mv9kGWFYHCI_E/%3F3007/https/eg.jumia.is/unsafe/fit-in/680x680/filters%3Afill%28white%29/product/10/313422/1.jpg?width=612&height=612'
  },
  {
    id: 2,
    name: 'Thinking fast and slow',
    price: 21,
    description: 'Thinking, Fast and Slow is a 2011 book by psychologist Daniel Kahneman. The book\'s main thesis is that of a dichotomy between two modes of thought: "System 1" is fast, instinctive and emotional; "System 2" is slower, more deliberative, and more logical.',
    image: 'https://images-ext-2.discordapp.net/external/Ch7DL8uSlmero3YMUEc17JREvuC_kNIHT3_meEsHKsY/https/i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344314728l/13539043.jpg?width=285&height=427'

  },
  {
    id: 3,
    name: 'The Heart of Islam',
    price: 1337,
    description: 'As the specter of religious extremism has become a fact of life today, the temptation is great to allow the evil actions and perspectives of a minority to represent an entire tradition. In the case of Islam, there has been much recent confusion in the Western world centered on distorted portrayals of its core values.',
    image: 'https://images-ext-1.discordapp.net/external/zvsVJs1tRo9joh8miY5hnYNjSToCSGWpWI5kbsC2q6w/https/images-na.ssl-images-amazon.com/images/I/71WkhVF-zKL.jpg?width=444&height=676'
  },
  {
    id: 4,
    name: 'Atomic Habits',
    price: 133,
    description: 'The #1 New York Times bestseller. Over 4 million copies sold!Tiny Changes, Remarkable ResultsNo matter your goals, Atomic Habits offers a proven framework for improving--every day.',
    image: 'https://images-ext-2.discordapp.net/external/EQo9mrKaytb41C5E9mZYE38lzbb--_CE36vwE89hqKM/https/i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535115320i/40121378._UY2775_SS2775_.jpg?width=676&height=676'
  },
  {
    id: 5,
    name: 'Magnificent Ancient Egypt',
    price: 30,
    description: 'This stunning book will lead you on a thrilling journey back in time to the land of the ancient Egyptians. Meet mighty pharaohs and powerful queens. Awaken mythical gods and magical goddesses. Watch everyday life along the River Nile. Every spread reveals a fabulous treasure and its unique story.',
    image: 'https://images-ext-2.discordapp.net/external/We174qS6uUXTiVO1r09eCntWZ_OBjdoLjfSwm89ROrc/https/d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781681885582/the-magnificent-book-of-treasures-ancient-egypt-9781681885582_hr.jpg?width=498&height=676'
  }
];

