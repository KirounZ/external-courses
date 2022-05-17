const searchOnkeyup = document.getElementById('inputSearch');

searchOnkeyup.onkeyup = function search() {
  const input = document.getElementById('inputSearch');
  const filter = input.value.toUpperCase();
  const table = document.getElementById('filter-table');
  const book = table.getElementsByTagName('tr');

  for (let i = 0; i < book.length; i += 1) {
    const name = book[i].getElementsByClassName('book-name')[0];
    const author = book[i].getElementsByClassName('book-author')[0];

    if (name && author) {
      const bookName = name.textContent;
      const bookAuthor = author.textContent;

      if (bookName.toUpperCase().indexOf(filter) > -1
      || bookAuthor.toUpperCase().indexOf(filter) > -1) {
        book[i].style.display = '';
      } else {
        book[i].style.display = 'none';
      }
    }
  }
};
