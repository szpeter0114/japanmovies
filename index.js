const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '33508b3a07msh9f27304728d213ap105fdajsn38ed1469c478',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=japan', options)
	.then(response => response.json())
	.then(data => {
        const list = data.d;
        
        list.map((item) => {
            const title = item.l;
            const cover = item.i.imageUrl;
            const year = item.y;

            const film = document.querySelector('#movies');
            film.innerHTML += 
            `<div class="filmcontainer">
            <img src="${cover}">
            <div class='data'>
            <h1>${title}</h1>
            <p class="${year ? 'show' : 'noshow'}">${year}</p>
            </div>
            </div>`
        })
    })
	.catch(err => console.error(err));