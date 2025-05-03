async function updateCounts() {
  const res = await fetch('like-dislike.json');
  const data = await res.json();
  document.querySelector('.like-count').textContent = data.likes;
  document.querySelector('.dislike-count').textContent = data.dislikes;
}

async function sendVote(action) {
  const formData = new FormData();
  formData.append('action', action);

  await fetch('like_handle.php', {
    method: 'POST',
    body: formData
  });

  updateCounts();
}

function scaleHeart() {
  const icon = document.querySelector('.like-icon');
  icon.classList.add('scale-heart');
  sendVote('like');
  setTimeout(() => icon.classList.remove('scale-heart'), 2000);
}

function scaleThumb() {
  const icon = document.querySelector('.dislike-icon');
  icon.classList.add('scale-thumb');
  sendVote('dislike');
  setTimeout(() => icon.classList.remove('scale-thumb'), 2000);
}

updateCounts();