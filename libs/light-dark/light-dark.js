const html = document.documentElement, mode = localStorage.getItem('mode') || 'auto'

const getPreferredMode = () => matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const switchMode = mode => {

	const newMode = mode === 'auto' ? getPreferredMode() : mode
	html.style.colorScheme = mode === 'auto' ? 'light dark' : newMode

	html.classList.remove('light', 'dark')
	html.classList.add(`${newMode}`)
	html.setAttribute('data-bs-theme', newMode)
	localStorage.setItem('mode', mode)

	document.querySelectorAll('[data-mode]').forEach(el => el.classList.toggle('active', el.dataset.mode === mode))

}

matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
	if (localStorage.getItem('mode') === 'auto') switchMode('auto')
})

document.addEventListener('click', e => e.target.dataset.mode && switchMode(e.target.dataset.mode))

switchMode(mode)
