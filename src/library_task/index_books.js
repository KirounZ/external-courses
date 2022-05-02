const books = [
  {
    img: 'assets/images/book-10.jpg',
    name: 'Vegetables Cookbook',
    author: 'by Matthew Biggs',
    rating: '',
  },

  {
    img: 'assets/images/book-9.jpg',
    name: 'Jamie’s italy',
    author: 'by Jamie Oliver',
    rating: '',
  },

  {
    img: 'assets/images/book-8.jpg',
    name: 'Jamie Does',
    author: 'by Jamie Oliver',
    rating: '',
  },

  {
    img: 'assets/images/book-7.jpg',
    name: 'Suneeta Vaswani',
    author: 'by Geeta Devi',
    rating: '',
  },

  {
    img: 'assets/images/book-6.jpg',
    name: 'Cook Like an Italian',
    author: 'by Tobie Puttock',
    rating: '',
  },

  {
    img: 'assets/images/book-5.jpg',
    name: 'Paleo Slow Cooking',
    author: 'by Chrissy Gower',
    rating: '',
  },

  {
    img: 'assets/images/book-4.jpg',
    name: 'Inexpensive Family Meals',
    author: 'by Simon Holst',
    rating: '',
  },

  {
    img: 'assets/images/book-3.jpg',
    name: 'Jamie’s Kitchen',
    author: 'by Jamie Oliver',
    rating: '',
  },

  {
    img: 'assets/images/book-2.jpg',
    name: 'Cakes & Bakes',
    author: 'by Sanjeev Kapoor',
    rating: '',
  },

  {
    img: 'assets/images/book-1.jpg',
    name: 'Jewels of Nizam',
    author: 'by Geeta Devi',
    rating: '',
  },
];

const booksBlocks = books.map(({
  img, name, author, rating,
}) => `
        <th>
          <img src=${img}>
          <p class="book-name">${name}</p>
          <p class="book-author">${author}</p>
          <p class="raiting">${rating}</p>
        </th>
  `);

document.write(booksBlocks[0]);
document.write(booksBlocks[1]);
document.write(booksBlocks[2]);
document.write(booksBlocks[3]);
document.write(booksBlocks[4]);
document.write(booksBlocks[5]);
document.write(booksBlocks[6]);
document.write(booksBlocks[7]);
document.write(booksBlocks[8]);
document.write(booksBlocks[9]);
