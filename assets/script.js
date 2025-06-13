const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const gauche = document.querySelector('#gauche')
const droite = document.querySelector('#droite')
const image = document.querySelector('.banner-img')
let desc = document.querySelector('#banner p')
let index = 0
let dots = []

droite.addEventListener('click', () => {
		if (index < slides.length - 1) {
			index++
			image.setAttribute('src', `./assets/images/slideshow/${slides[index].image}` )
			desc.innerHTML = `${slides[index].tagLine}`
			dotsUpdate(index)
		} else {
			index = 0
			image.setAttribute('src', `./assets/images/slideshow/${slides[index].image}` )
			dotsUpdate(index)
		}
})

gauche.addEventListener('click', () => {
	if (index > 0) {
		index--
		image.setAttribute('src', `./assets/images/slideshow/${slides[index].image}` )
		desc.innerHTML = `${slides[index].tagLine}`
		dotsUpdate(index)
	} else {
		index = slides.length - 1
		image.setAttribute('src', `./assets/images/slideshow/${slides[index].image}` )
		dotsUpdate(index)
	}
})

function bulletPoint() {
	const pointEmplacemnet = document.querySelector('.dots')
	for (let i = 0; i < slides.length; i++) {
		const point = document.createElement('div')
		point.classList.add('dot')
		pointEmplacemnet.appendChild(point)
		dots.push(point)
	}
}

function dotsUpdate(index) {
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected')
		} else {
			dot.classList.remove('dot_selected')
		}
	})
}

bulletPoint()
dotsUpdate(index)