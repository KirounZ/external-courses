let i;
const filter = document.getElementById('filter');
const allBook = document.getElementById('allBooks');

const books = [
  {
    img: 'assets/images/book-10.jpg',
    name: 'Vegetables Cookbook',
    author: 'by Matthew Biggs',
    rating: 7,
  },
  {
    img: 'assets/images/book-9.jpg',
    name: 'Jamie’s italy',
    author: 'by Jamie Oliver',
    rating: 10,
  },
  {
    img: 'assets/images/book-8.jpg',
    name: 'Jamie Does',
    author: 'by Jamie Oliver',
    rating: 8,
  },
  {
    img: 'assets/images/book-7.jpg',
    name: 'Suneeta Vaswani',
    author: 'by Geeta Devi',
    rating: 10,
  },
  {
    img: 'assets/images/book-6.jpg',
    name: 'Cook Like an Italian',
    author: 'by Tobie Puttock',
    rating: 8,
  },
  {
    img: 'assets/images/book-5.jpg',
    name: 'Paleo Slow Cooking',
    author: 'by Chrissy Gower',
    rating: 9,
  },
  {
    img: 'assets/images/book-4.jpg',
    name: 'Inexpensive Family Meals',
    author: 'by Simon Holst',
    rating: 8,
  },
  {
    img: 'assets/images/book-3.jpg',
    name: 'Jamie’s Kitchen',
    author: 'by Jamie Oliver',
    rating: 9,
  },
  {
    img: 'assets/images/book-2.jpg',
    name: 'Cakes & Bakes',
    author: 'by Sanjeev Kapoor',
    rating: 10,
  },
  {
    img: 'assets/images/book-1.jpg',
    name: 'Jewels of Nizam',
    author: 'by Geeta Devi',
    rating: 10,
  },
];

const booksBlocks = books.map(({
  img, name, author, rating,
}) => `<tr>
        <th class="book-box">
          <img src=${img}>
          <p class="book-name">${name}</p>
          <p class="book-author">${author}</p>
          <div class="ratingStars">
            <input class="rating" type="text"></p>
            <input class="ratingNum" onkeyup="setRating()" onclick="setRating()" type="number" value=${(rating)} min="1" max="10" step="1">
          </div>
        </th>
      </tr>
  `);

for (i = 0; i < booksBlocks.length; i += 1) {
  document.write(booksBlocks[i]);
}

const table = document.getElementById('filter-table');
const tr = table.getElementsByTagName('tr');

filter.onclick = function filterBooks() {
  for (i = 0; i < tr.length; i += 1) {
    const rating = tr[i].getElementsByClassName('ratingNum')[0].value;

    if (rating === '10') {
      tr[i].style.display = '';
    } else {
      tr[i].style.display = 'none';
    }
  }
};

allBook.onclick = function filterAllBooks() {
  for (i = 0; i < tr.length; i += 1) {
    tr[i].style.display = '';
  }
};

function setRating() {
  for (i = 0; i < tr.length; i += 1) {
    const ratingOneclick = tr[i].getElementsByClassName('ratingNum')[0].value;

    switch (ratingOneclick) {
      case '1':
        document.getElementsByClassName('rating')[i].value = '';
        break;
      case '2':
        document.getElementsByClassName('rating')[i].value = '';
        break;
      case '3':
        document.getElementsByClassName('rating')[i].value = '';
        break;
      case '4':
        document.getElementsByClassName('rating')[i].value = '';
        break;
      case '5':
        document.getElementsByClassName('rating')[i].value = '';
        break;
      case '6':
        document.getElementsByClassName('rating')[i].value = '';
        break;
      case '7':
        document.getElementsByClassName('rating')[i].value = '';
        break;
      case '8':
        document.getElementsByClassName('rating')[i].value = '';
        break;
      case '9':
        document.getElementsByClassName('rating')[i].value = '';
        break;
      case '10':
        document.getElementsByClassName('rating')[i].value = '';
        break;
      default:
    }
  }
}

setRating();
