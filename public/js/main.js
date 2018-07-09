document.addEventListener("DOMContentLoaded", function(event) {

	let home = document.getElementById('home');
	let view = document.getElementById('view');
	let navMobile;
	let viewPort = {

		width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
		height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
	};

	if (viewPort.width < viewPort.height && viewPort.width < 600) {

		navMobile = document.getElementById('nav-mobile');
		navMobile.style.display = 'block';
		home.querySelectorAll('.navigation__link').forEach((link) => {

			link.style.display = 'none';
		});

		let navBtn = document.getElementById('nav-btn');

		navMobile.addEventListener('click', (ev)=> {

			if (ev.target.classList.contains('about')) {

				renderAbout();
				document.body.scrollTop = document.documentElement.scrollTop = 0;
				navBtn.click();
			}
			else if (ev.target.classList.contains('finance')) {

				renderFinance();
				document.body.scrollTop = document.documentElement.scrollTop = 0;
				navBtn.click();
			}
			else if (ev.target.classList.contains('contact')) {

				renderContact();
				document.body.scrollTop = document.documentElement.scrollTop = 0;
				navBtn.click();
			};
		});
	};

	let wrapper = document.getElementById('wrapper');
	let aboutLeft = document.getElementById('about-left');
	let aboutRight = document.getElementById('about-right');
	let gallery = document.getElementById('gallery');
	let finance = document.getElementById('finance');
	let financeHeader = document.getElementById('finance-header');
	let financeFooter = document.getElementById('finance-2');
	let contact = document.getElementById('contact');
	let employees = document.getElementById('employees');
	let btnReadMore = document.getElementById('btn-read-more');
	let btnReadMore2;
	let logo = document.getElementById('logo');
	let nav = document.getElementById('nav');
	let captions = document.getElementById('captions');

	logo.addEventListener('click', function () {

		renderHome();
	});

	nav.addEventListener('click', function (ev) {

		if (ev.target.classList.contains('about')) {

			renderAbout();
		}
		else if (ev.target.classList.contains('finance')) {

			renderFinance();
		}
		else if (ev.target.classList.contains('contact')) {

			renderContact();
		}
		else if (ev.target.classList.contains('home')) {

			renderHome();
		};
	});

	function hideAllBut (exclude) {

		function hideHome () {

			view.style.display = 'none';
			wrapper.style.display = 'grid';
			captions.style.display = 'none';
			home.style.height = '11rem';
			home.style.margin = '0';
		};

		function hideAbout () {

			if (typeof btnReadMore2 !== 'undefined' && btnReadMore2 !== null) {

				btnReadMore2.removeEventListener('click', handleAboutBtnClick);
			};

			aboutLeft.style.display = 'none';
			aboutRight.style.display = 'none';
			gallery.style.display = 'none';
		};

		function hideFinance () {

			finance.style.display = 'none';
			financeHeader.style.display = 'none';
			financeFooter.style.display = 'none';
		};

		function hideContact () {

			contact.style.display = 'none';
			employees.style.display = 'none'
		};

		if (exclude !== 'home') {

			hideHome();
		};

		if (exclude !== 'about') {

			hideAbout();
		};

		if (exclude !== 'finance') {

			hideFinance();
		};

		if (exclude !== 'contact') {

			hideContact();
		};
	};

	function renderHome () {

		hideAllBut('home');

		btnReadMore = document.getElementById('btn-read-more');
		btnReadMore2 = document.getElementById('btn-read-more-2');

		captions.style.display = 'block';

		if (typeof btnReadMore2 === 'undefined' && btnReadMore2 !== null) {

			btnReadMore2.removeEventListener('click', handleAboutBtnClick());
		};

		btnReadMore.addEventListener('click', function (ev) {

			handleRenderAboutBtnClick();
		});

		view.style.display = 'block';
		home.style.height = '95vh';
		home.style.marginBottom = '15vh';
		wrapper.style.display = 'none';
	};

	function handleAboutBtnClick() {
		
		renderFinance();
		btnReadMore2.removeEventListener('click', this);
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	};

	function renderAbout () {

		btnReadMore2 = document.getElementById('btn-read-more-2');

		btnReadMore2.addEventListener('click', (ev) => {

			handleAboutBtnClick();
		});

		hideAllBut('about');

		aboutLeft.style.display = 'grid';
		aboutRight.style.display = 'grid';
		gallery.style.display = 'grid';
	};

	function renderFinance () {

		hideAllBut('finance');

		finance.style.display = 'grid';
		financeHeader.style.display = 'grid';
		financeFooter.style.display = 'grid';
	};

	function renderContact () {

		hideAllBut('contact');

		contact.style.display = 'grid';
		employees.style.display = 'grid'
	};

	function handleRenderAboutBtnClick () {

		document.body.scrollTop = document.documentElement.scrollTop = 0;
		btnReadMore.removeEventListener('click', this);
		renderAbout();
	};

	btnReadMore.addEventListener('click', function (ev) {

		handleRenderAboutBtnClick();
	});


});
