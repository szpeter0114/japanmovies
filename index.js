const template = document.getElementById('template');
const movies = document.getElementById('movies');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '33508b3a07msh9f27304728d213ap105fdajsn38ed1469c478',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

const fetcheddata = fetch('https://imdb8.p.rapidapi.com/auto-complete?q=starwars', options)
	.then(response => response.json())
	.then(data => {
        const list = data.d;
        list.map((item) => {
            const title = item.l;
            const year = item.y;            
            const cover = new Image();
            cover.src = item.i.imageUrl;
    
            const films = [
                {title: title, cover: cover, year: year},
            ];

            films.forEach(film => {
                const clone = template.content.cloneNode(true);
                clone.querySelector('.title').textContent = film.title;
                clone.querySelector('.year').textContent = film.year;
                clone.querySelector('.image').src = film.cover.src;
                movies.appendChild(clone);
            })
        })
    })
	.catch(err => console.error(err));