class LightDark extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {

		const shadowRoot = this.shadowRoot;
		const html = document.documentElement;
		const mode = localStorage.getItem('mode') || 'auto';

		const getPreferredMode = () => matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

		const lightTitle = this.getAttribute('light') || 'Light';
		const darkTitle = this.getAttribute('dark') || 'Dark';
		const autoTitle = this.getAttribute('auto') || 'Auto';

		const switchMode = (mode) => {
			const newMode = mode === 'auto' ? getPreferredMode() : mode;
			html.style.colorScheme = newMode === 'auto' ? 'light dark' : newMode;
			html.classList.remove('light', 'dark');
			html.classList.add(newMode);
			html.setAttribute('data-bs-theme', newMode);
			localStorage.setItem('mode', mode);
			shadowRoot.querySelectorAll('[data-mode]').forEach(el => {
				el.classList.toggle('active', el.dataset.mode === mode);
			});
		};

		matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			if (localStorage.getItem('mode') === 'auto') switchMode('auto');
		});

		shadowRoot.addEventListener('click', (e) => {
			if (e.target.dataset.mode) {
				switchMode(e.target.dataset.mode);
			}
		});

		shadowRoot.innerHTML = `
			<style>
				:host { display: block; }
				.light-dark {  }
				[data-mode] {
					display: inline-block;
					cursor: pointer;
					border-radius: calc(var(--bs-border-radius, 8px) / 2);
					padding: .4rem .9rem;
				}
				[data-mode].active {
					background-color: var(--color-accent, orange);
					color: #fff;
				}
			</style>
			<div class="light-dark">
				<span data-mode="light">${lightTitle}</span>
				<span data-mode="dark">${darkTitle}</span>
				<span data-mode="auto">${autoTitle}</span>
			</div>
		`;

		switchMode(mode);

	}

}

customElements.define('light-dark', LightDark);
