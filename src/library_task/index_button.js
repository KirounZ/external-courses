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

for (let i = 0; i < booksbuttons.length; i += 1) {
  document.write(booksbuttons[i]);
}
