const addBook = document.getElementById('addBookButton');

addBook.onclick = function openModal() {
  const addBookModal = document.createElement('div');
  const winBookModal = document.createElement('div');
  const title = document.createElement('input');
  const author = document.createElement('input');
  const image = document.createElement('input');
  const buttonClose = document.createElement('button');

  addBookModal.className = 'addBook';
  addBookModal.id = 'bookModal';

  winBookModal.id = 'bookModal-window-id';
  winBookModal.className = 'bookModal-window';

  title.className = 'bookModal-window-input';
  title.type = 'text';
  title.placeholder = 'Title';

  author.className = 'bookModal-window-input';
  author.type = 'text';
  author.placeholder = 'Author';

  image.className = 'bookModal-window-input';
  image.type = 'file';
  image.placeholder = 'Image';

  buttonClose.onclick = function closeModal() {
    addBookModal.remove();
  };
  buttonClose.className = 'bookModal-close';
  buttonClose.innerText = 'Close';

  document.body.append(addBookModal);
  document.getElementById('bookModal').appendChild(winBookModal);
  document.getElementById('bookModal-window-id').appendChild(title);
  document.getElementById('bookModal-window-id').appendChild(author);
  document.getElementById('bookModal-window-id').appendChild(image);
  document.getElementById('bookModal-window-id').appendChild(buttonClose);
};
