const body = document.querySelector('.body');
const toggleMenu = document.querySelectorAll('.header_toggle');
const menu = document.querySelector('.menu');

toggleMenu.forEach((item) => {
	item.addEventListener('click', () => {
		if (menu.classList.contains('active')) {
			menu.classList.remove('active');
			body.classList.remove('stop');
			toggleMenu.forEach((item) => item.classList.remove('open'));
		} else {
			menu.classList.add('active');
			body.classList.add('stop');
			toggleMenu.forEach((item) => item.classList.add('open'));
		}
	});
});

const menuLink = document.querySelectorAll('.menu_link');

menuLink.forEach((item) => {
	item.addEventListener('click', () => {
		if (menu.classList.contains('active')) {
			menu.classList.remove('active');
			body.classList.remove('stop');
			toggleMenu.forEach((item) => item.classList.remove('open'));
		} else {
			menu.classList.add('active');
			body.classList.add('stop');
			toggleMenu.forEach((item) => item.classList.add('open'));
		}
	});
});
