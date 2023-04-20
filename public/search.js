document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const charactersContainer = document.getElementById('characters-container');
    searchInput.addEventListener('input', function (event) {
        const searchTerm = event.target.value.toLowerCase();
        const characters = charactersContainer.getElementsByClassName('character');
        for (let character of characters) {
            const titleElement = character.getElementsByTagName('h2')[0];
            const title = titleElement.textContent || titleElement.innerText;
            if (title.toLowerCase().indexOf(searchTerm) > -1) {
                character.style.display = '';
            } else {
                character.style.display = 'none';
            }
        }
    });
    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const searchTerm = event.target.value.toLowerCase();
            const characters = charactersContainer.getElementsByClassName('character');
            for (let character of characters) {
                const titleElement = character.getElementsByTagName('h2')[0];
                const title = titleElement.textContent || titleElement.innerText;
                if (title.toLowerCase().indexOf(searchTerm) > -1) {
                    character.style.display = '';
                } else {
                    character.style.display = 'none';
                }
            }
        }
    });
});