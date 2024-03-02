document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.icons ion-icon[name="search-outline"]').addEventListener('click', function() {
        executeSearch()
    })

    document.querySelector('.input input[type="text"]').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            executeSearch()
        }
    })

    document.querySelector('.input input[type="text"]').addEventListener('focus', function() {
        document.body.classList.add('search-focused')
    })

    document.querySelector('.input input[type="text"]').addEventListener('blur', function() {
        document.body.classList.remove('search-focused')
    })

    function executeSearch() {
        const searchQuery = document.querySelector('.input input[type="text"]').value
        
        if (searchQuery.trim() !== '') {
            window.location.href = 'https://br.search.yahoo.com/search?p=' + encodeURIComponent(searchQuery)
        }
    }
})