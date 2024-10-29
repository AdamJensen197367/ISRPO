const left = document.querySelector('.left')

document.addEventListener('DOMContentLoaded', () => {
	ARRAY_KEYS.forEach(key => {
		const keyElement = document.createElement('div')
		keyElement.classList.add('keys')
		keyElement.innerHTML = `<span>${key.letter.toLowerCase()}</span>`
		keyElement.style.backgroundColor = key.color

		keyElement.addEventListener('click', () => {
			const audio = new Audio(key.sound)
			audio.play()
		})
		left.appendChild(keyElement)
	})

	ARRAY_KEYS2.forEach((key, index) => {
		const keyElement = document.createElement('div')
		keyElement.classList.add(`dark${index}`)
		keyElement.innerHTML = `<span>${key.letter.toLowerCase()}</span>`
		keyElement.style.backgroundColor = key.color

		keyElement.addEventListener('click', () => {
			const audio = new Audio(key.sound)
			audio.play()
		})
		left.appendChild(keyElement)
	})
})
