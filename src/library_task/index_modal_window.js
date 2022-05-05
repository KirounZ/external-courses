function openModal() {
  document.getElementById('bookModal').style.visibility = 'visible';
  document.getElementById('bookModal').style.opacity = '1';
}

function closeModal() {
  document.getElementById('bookModal').style.visibility = 'hidden';
  document.getElementById('bookModal').style.opacity = '0';
}

function openRatingModal() {
  document.getElementById('ratingModal').style.visibility = 'visible';
  document.getElementById('ratingModal').style.opacity = '1';
}

function closeRatingModal() {
  document.getElementById('ratingModal').style.visibility = 'hidden';
  document.getElementById('ratingModal').style.opacity = '0';
}

openModal();
closeModal();
openRatingModal();
closeRatingModal();
