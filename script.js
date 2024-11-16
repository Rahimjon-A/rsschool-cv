window.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('scroll', function () {
		const header = document.querySelector('header')
		header.classList.toggle('sticky', window.scrollY > 0)
	})

	const menuBtn = document.querySelector('.menu-btn')
	const navigation = document.querySelector('.navigation')
	const navigationItems = document.querySelectorAll('.navigation a')

	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active')
		navigation.classList.toggle('active')
	})

	navigationItems.forEach(navItem => {
		navItem.addEventListener('click', () => {
			menuBtn.classList.remove('active')
			navigation.classList.remove('active')
		})
	})

	const scrollBtn = document.querySelector('.scrollToTop-btn')
	window.addEventListener('scroll', () => {
		scrollBtn.classList.toggle('active', window.scrollY > 500)
	})
	scrollBtn.addEventListener('click', () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	})

	window.addEventListener('scroll', () => {
		let reveals = document.querySelectorAll('.reveal')

		for (let i = 0; i < reveals.length; i++) {
			let windowHeight = window.innerHeight
			let revealTop = reveals[i].getBoundingClientRect().top
			let revealPoint = 50

			if (revealTop < windowHeight - revealPoint) {
				reveals[i].classList.add('active')
			}
		}
	})

	const form = document.querySelector('form')
	tgBotToken = '7715309975:AAHBxLBoSfEI2BLCDrnAWX6Byidfb4uwZhg'
	chatID = '1406089902'

	form.addEventListener('submit', e => {
		e.preventDefault()

		const formData = new FormData(form)
		const msg = {}
		formData.forEach((val, key) => {
			msg[key] = val
		})

		fetch(`https://api.telegram.org/bot${tgBotToken}/sendMessage`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: chatID,
				text: `Name: ${msg.name}, Email: ${msg.email}, Message: ${msg.message}`,
			}),
		}).then(() => {
			form.reset()
		})
	})
})
