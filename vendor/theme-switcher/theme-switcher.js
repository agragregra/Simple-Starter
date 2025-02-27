export class themeSwitcher {
  constructor() {
    const html = document.documentElement,
      mode = localStorage.getItem('mode') || 'auto';
    const getPreferredMode = () =>
      matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const switchMode = (mode) => {
      const newMode = mode === 'auto' ? getPreferredMode() : mode;
      html.style.colorScheme = mode === 'auto' ? 'light dark' : newMode;

      html.classList.remove('light', 'dark');
      html.classList.add(`${newMode}`);
      localStorage.setItem('mode', mode);

      document
        .querySelectorAll('[data-mode]')
        .forEach((el) =>
          el.classList.toggle('active', el.dataset.mode === mode)
        );

      this.updateTogglerClass();
    };

    this.updateTogglerClass = () => {
      const togglers = document.querySelectorAll('.toggler');
      if (togglers.length > 0) {
        const currentMode = localStorage.getItem('mode') || 'auto';
        const systemMode = getPreferredMode();
        const effectiveMode = currentMode === 'auto' ? systemMode : currentMode;

        togglers.forEach(toggler => {
          toggler.classList.remove('toggler-light', 'toggler-dark');
          toggler.classList.add(`toggler-${effectiveMode}`);
        });
      }
    };

    this.handleTogglerClick = () => {
      const currentMode = localStorage.getItem('mode') || 'auto';
      const systemMode = getPreferredMode();

      let newMode;
      if (currentMode === 'auto') {
        newMode = systemMode === 'light' ? 'dark' : 'light';
      } else {
        newMode = 'auto';
      }

      switchMode(newMode);
    };

    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (localStorage.getItem('mode') === 'auto') switchMode('auto');
    });

    document.addEventListener('click', (e) => {
      if (e.target.dataset.mode) {
        switchMode(e.target.dataset.mode);
      }
    });

    document.querySelectorAll('.toggler').forEach(toggler => {
      toggler.addEventListener('click', this.handleTogglerClick);
    });

    switchMode(mode);
  }
}
