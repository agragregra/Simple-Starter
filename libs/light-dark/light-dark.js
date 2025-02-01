const mode = localStorage.getItem('mode') || 'auto', html = document.documentElement
function switchMode(mode) {
	html.style.colorScheme = mode === 'auto' ? 'light dark' : mode
	html.removeAttribute('data-bs-theme')
	const newMode = mode === 'auto' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : mode
	html.classList.forEach(c => /^theme-/.test(c) && html.classList.remove(c))
	html.classList.add(mode === 'auto' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'theme-dark' : 'theme-light') : 'theme-' + mode)
	html.setAttribute('data-bs-theme', newMode)
	localStorage.setItem('mode', mode)
	document.querySelectorAll('[data-mode]').forEach(el => el.classList.toggle('active', el.dataset.mode === mode))
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => localStorage.getItem('mode') === 'auto' && switchMode('auto'))
switchMode(mode)
document.addEventListener('click', e => e.target.dataset.mode && switchMode(e.target.dataset.mode))
