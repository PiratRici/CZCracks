function searchGames() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let posts = document.getElementsByClassName('post');

    for (let i = 0; i < posts.length; i++) {
        let title = posts[i].getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            posts[i].style.display = 'block';
        } else {
            posts[i].style.display = 'none';
        }
    }
}
