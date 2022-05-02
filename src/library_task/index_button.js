const buttons = [
  {
    icon: '',
    text: 'now reading',
  },

  {
    icon: '',
    text: 'browse',
  },

  {
    icon: '',
    text: 'buy books',
  },

  {
    icon: '',
    text: 'favouritte books',
  },

  {
    icon: '',
    text: 'wishlist',
  },

  {
    icon: '',
    text: 'history',
  },
];

const booksbuttons = buttons.map(({
  icon, text,
}) => `
        <li>
          <button class="sidebar-button">
            <p class="icon">${icon}</p>
            <p class="text-button">${text}</p>
          </button>
        </li>
  `);

document.write(booksbuttons[0]);
document.write(booksbuttons[1]);
document.write(booksbuttons[2]);
document.write(booksbuttons[3]);
document.write(booksbuttons[4]);
document.write(booksbuttons[5]);
