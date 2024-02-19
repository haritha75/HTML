document.addEventListener("DOMContentLoaded", function () {
  const commentList = document.getElementById("comment-list");
  const commentInput = document.getElementById("comment-input");
  const submitButton = document.getElementById("submit-comment");

  submitButton.addEventListener("click", function () {
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
      addComment(commentText);
      commentInput.value = ""; // Clear the input field after submitting
    }
  });

  function addComment(commentText) {
    const li = document.createElement("li");
    li.classList.add("comment");

    const commentContent = document.createElement("div");
    commentContent.classList.add("comment-text");
    commentContent.textContent = commentText;

    const replyButton = document.createElement("button");
    replyButton.textContent = "Reply";
    replyButton.addEventListener("click", function () {
      const replyText = prompt("Enter your reply:");
      if (replyText) {
        addReply(li, replyText);
      }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      li.remove();
    });

    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("comment-actions");
    actionsDiv.appendChild(replyButton);
    actionsDiv.appendChild(deleteButton);

    li.appendChild(commentContent);
    li.appendChild(actionsDiv);
    commentList.appendChild(li);
  }

  function addReply(parentComment, replyText) {
    const replyDiv = document.createElement("div");
    replyDiv.textContent = "Reply: " + replyText;
    parentComment.appendChild(replyDiv);
  }
});
