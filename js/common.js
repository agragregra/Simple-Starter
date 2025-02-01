// USER SCRIPTS

// document.body.hidden = true

// LIGHT DARK MODE SWITCH

const mode = localStorage.getItem('mode') || 'auto', html = document.documentElement
function switchMode(mode) {
	html.style.colorScheme = mode === 'auto' ? 'light dark' : mode
	localStorage.setItem('mode', mode)
	document.querySelectorAll('[data-mode]').forEach(el => el.classList.toggle('active', el.dataset.mode === mode))
} switchMode(mode)
document.addEventListener('click', e => e.target.dataset.mode && switchMode(e.target.dataset.mode))
