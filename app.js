// grab everything we need
const btn = document.querySelector('button');
const menu = document.querySelector('.mobile-menu');

let bool = true;

const menuBar = {
	m1: `<svg
		xmlns='http://www.w3.org/2000/svg'
		class='h-6 w-6'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'>
		<path
			stroke-linecap='round'
			stroke-linejoin='round'
			stroke-width='2'
			d='M4 6h16M4 12h16M4 18h16'
		/>
	</svg>`,
	m2: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
    </svg>`,
};

btn.addEventListener('click', () => {
	['hidden', 'transition', 'duration-1000'].map((m) => {
		menu.classList.toggle(m);
	});

	if (bool) {
		btn.innerHTML = menuBar.m2;
		bool = false;
	} else {
		btn.innerHTML = menuBar.m1;
		bool = true;
	}
});
