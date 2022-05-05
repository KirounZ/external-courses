function search() {
  const input = document.getElementById('inputSearch');
  const filter = input.value.toUpperCase();
  const table = document.getElementById('filter-table');
  const tr = table.getElementsByTagName('tr');

  for (let i = 0; i < tr.length; i += 1) {
    const name = tr[i].getElementsByClassName('book-name')[0];
    const author = tr[i].getElementsByClassName('book-author')[0];

    if (name && author) {
      const txtValueName = name.textContent;
      const txtValueAuthor = author.textContent;

      if (txtValueName.toUpperCase().indexOf(filter) > -1
      || txtValueAuthor.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}

search();
