
document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('commentForm');
  const nameInput = document.getElementById('nameInput');
  const commentInput = document.getElementById('commentInput');
  const commentsList = document.getElementById('commentsList');

  commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = nameInput.value;
    const comment = commentInput.value;

    if (name.trim() === '' || comment.trim() === '') {
      alert('Please enter your name and comment.');
      return;
    }

    const commentItem = document.createElement('div');
    commentItem.classList.add('comment-item');
    commentItem.innerHTML = `
      <strong>${name}</strong>
      <p>${comment}</p>
    `;
    commentsList.appendChild(commentItem);


    nameInput.value = '';
    commentInput.value = '';
  });
});
});
