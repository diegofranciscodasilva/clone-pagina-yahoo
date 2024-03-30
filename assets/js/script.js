function atualizarDataHora() {
    
    let dataHoraAtual = new Date()

    let dia = dataHoraAtual.getDate()
    let mes = dataHoraAtual.getMonth() + 1
    let ano = dataHoraAtual.getFullYear()
    let horas = dataHoraAtual.getHours()
    let minutos = dataHoraAtual.getMinutes()
    let segundos = dataHoraAtual.getSeconds()

    dia = dia < 10 ? '0' + dia : dia
    mes = mes < 10 ? '0' + mes : mes
    horas = horas < 10 ? '0' + horas : horas
    minutos = minutos < 10 ? '0' + minutos : minutos
    segundos = segundos < 10 ? '0' + segundos : segundos

    let dataHoraFormatada = dia + '/' + mes + '/' + ano + ' ' + horas + ':' + minutos + ':' + segundos

    document.getElementById('date-time').textContent = dataHoraFormatada
}
atualizarDataHora()

setInterval(atualizarDataHora, 1000)


document.addEventListener('DOMContentLoaded', function() {
    const appsMenu = document.getElementById('appsMenu');
    const appsIcon = document.getElementById('apps');

    appsIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede o evento de ser propagado para fora do ícone

        // Verifica se o menu está visível ou não
        const isMenuVisible = getComputedStyle(appsMenu).display === 'block';

        // Alterna a visibilidade do menu
        appsMenu.style.display = isMenuVisible ? 'none' : 'block';
    });

    // Adiciona um evento de clique em qualquer lugar fora do menu para escondê-lo
    document.addEventListener('click', function(event) {
        if (!appsMenu.contains(event.target) && event.target !== appsIcon) {
            appsMenu.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
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


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.icons ion-icon[name="mic-outline"]').addEventListener('click', function() {
        window.location.href = 'https://br.search.yahoo.com/?fr2=p:fprd,mkt:br';
    })
})


document.addEventListener('DOMContentLoaded', function() {
    const affairsListLeft = document.getElementById('affairs-list-left')
    const affairsListRight = document.getElementById('affairs-list-right')
    const currentAffairs = [
        'Política',
        'Futebol',
        'Cinema',
        'Empregos',
        'Páscoa',
        'BBB',
        'Notícias',
        'Diversão',
        'Tecnologia',
        'Viagens'
    ]

    const halfwayThrough = Math.ceil(currentAffairs.length / 2)
    const leftColumnItems = currentAffairs.slice(0, halfwayThrough)
    const rightColumnItems = currentAffairs.slice(halfwayThrough)

    leftColumnItems.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item
        affairsListLeft.appendChild(li)
    })

    rightColumnItems.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item
        affairsListRight.appendChild(li)
    })
})