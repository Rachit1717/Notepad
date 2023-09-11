// Get all the like buttons on the page
const likeButtons = document.querySelectorAll('.action .far.fa-thumbs-up');

// Add click event listeners to each like button
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the 'liked' class on the button
        button.classList.toggle('liked');

        // Update the like count
        const likeCountElement = button.nextElementSibling;
        const isLiked = button.classList.contains('liked');

        if (isLiked) {
            // Increment like count
            const currentLikes = parseInt(likeCountElement.textContent, 10);
            likeCountElement.textContent = currentLikes + 1;
        } else {
            // Decrement like count
            const currentLikes = parseInt(likeCountElement.textContent, 10);
            likeCountElement.textContent = currentLikes - 1;
        }
    });
});
