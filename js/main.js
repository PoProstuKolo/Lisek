const img = document.querySelector('.img')
const preView = document.querySelector('.pre-view')
const View = document.querySelector('.view')
const ViewYes = document.querySelector('.view-yes')
const ViewNo = document.querySelector('.view-no')
const next = document.getElementById('next')
const yes = document.getElementById('yes')
const no = document.getElementById('no')
const webhookUrl =
	'https://discord.com/api/webhooks/1335370930985373696/JlStsK5HHx1WMiKim1kqLwt3l2U7ur57dcQqXZrPLJxKcWobusaPPd5oeka5WtDBk8_u'

next.addEventListener('click', () => {
	preView.classList.add('hidden')
	View.classList.remove('hidden')
})

yes.addEventListener('click', () => {
	View.classList.add('hidden')
	img.classList.add('hidden')
	ViewYes.classList.remove('hidden')
	const teraz = new Date()
	const dataIGodzina = teraz.toLocaleString('pl-PL')

	fetch('https://api.ipify.org?format=json')
		.then(response => response.json())
		.then(data => {
			const ip = data.ip
			const wiadomosc = {
				content: `Zostanie walentynką! IP: ${ip}, Data i godzina: ${dataIGodzina}`,
			}

			return fetch(webhookUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(wiadomosc),
			})
		})
		.then(response => {
			if (response.ok) {
				console.log('Wiadomość wysłana do Discorda')
			} else {
				console.error('Błąd przy wysyłaniu:', response.status, response.statusText)
			}
		})
		.catch(error => {
			console.error('Błąd fetch:', error)
		})
})
no.addEventListener('click', () => {
	View.classList.add('hidden')
	img.classList.add('hidden')
	ViewNo.classList.remove('hidden')
	const teraz = new Date()
	const dataIGodzina = teraz.toLocaleString('pl-PL')

	fetch('https://api.ipify.org?format=json')
		.then(response => response.json())
		.then(data => {
			const ip = data.ip
			const wiadomosc = {
				content: `Nie zostanie walentynką! IP: ${ip}, Data i godzina: ${dataIGodzina}`,
			}

			return fetch(webhookUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(wiadomosc),
			})
		})
		.then(response => {
			if (response.ok) {
				console.log('Wiadomość wysłana do Discorda')
			} else {
				console.error('Błąd przy wysyłaniu:', response.status, response.statusText)
			}
		})
		.catch(error => {
			console.error('Błąd fetch:', error)
		})
})
