const toggle = document.querySelector('.toggle');
const openTime = document.querySelector('.open__time');
toggle.addEventListener('click', function () {
	if (openTime.style.height === '0px' || openTime.style.height === '') {
		openTime.style.height = openTime.scrollHeight + 'px';
		openTime.style.padding = '2rem 0';
	} else {
		openTime.style.height = '0px';
		openTime.style.padding = '0 0';
	}
});
// Responsive Design Adjustments

const getDataTime = async () => {
	try {
		const res = await fetch('../data/resturant-data.json');
		const data = await res.json();
		const openingHours = data.openingHours;
		loadweekdayHours(openingHours);
	} catch (err) {
		console.error('Error fetching data:', err);
	}
};
const loadweekdayHours = (day) => {
	const data = new Date();
	const currentDay = data.getDay(); // 0 (Sun) to 6 (Sat)

	const dayMap = [
		'sunday',
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday',
	];
	const todayName = dayMap[currentDay];

	day.forEach((d) => {
		const isToday = d.dayOfWeek.toLowerCase() === todayName;
		const style = isToday
			? ' style="color: #037803; font-weight: bold;"'
			: '';
		const dayDisplay = isToday ? 'Today' : d.dayOfWeek;
		const markUp = `<p${style}>${dayDisplay}: ${d.open} - ${d.close}</p>`;
		openTime.insertAdjacentHTML('beforeend', markUp);
	});
};
getDataTime();

// Ordering

const ordering = document.querySelector('.ordering__button');
const overlay = document.querySelector('.overlay');

const closeOverlay = function () {
	if (overlay) {
		overlay.style.display = 'none';
		overlay.innerHTML = '';
	}
};

document.addEventListener('click', function (e) {
	if (e.target && e.target.classList.contains('overlay__close')) {
		closeOverlay();
	}
});

const loadingOverlay = function () {
	if (overlay) {
		overlay.style.display = 'block';
	}

	const markup = `
		<span class="overlay__close">&times;</span>
		<div class="overlay__content">
			<div class="active__contact">
				<h2>Bestellung Jetzt</h2>
				<p>Rufen Sie uns an unter: 
				<a href="tel:+491234567890"><br> +49 123 456 7890</a></p>
			</div>

			

			
		</div>
	`;
	overlay.innerHTML = markup;
};

if (ordering) {
	ordering.addEventListener('click', loadingOverlay);
}

//Menu
const loadMenu = async () => {
	try {
		const res = await fetch('../data/menu.json');
		const data = await res.json();
		const menuItems = data.categories;
		displayMenu(menuItems);
	} catch (err) {
		console.error('Error fetching menu data:', err);
	}
};

const handleResize = () => {
	const cards = document.querySelectorAll('.cards');
	const images = document.querySelectorAll('img');

	cards.forEach((card) => {
		if (window.innerWidth < 768) {
			card.style.display = 'block';
			images.forEach((img) => {
				img.style.width = '100%';
			});
			card.style.marginTop = '4rem';
		} else {
			card.style.display = '';
			images.forEach((img) => {
				img.style.width = '';
			});
			card.style.marginTop = '';
		}
	});
};

const displayMenu = (menuItems) => {
	menuItems.forEach((category) => {
		if (category.name === 'Drehspieß-Teller') {
			const markUp = `
			<div class="cards">
					<!-- Cards will be dynamically inserted here -->
					<table>
						<tr>
							<th>Item</th>
							<th>Description</th>
							<th>Price</th>
						</tr>
						${category.items
							.map(
								(item) => `
						<tr>
							<td>${item.name}</td>
							<td>${item.description}</td>
							<td>€${item.price.toFixed(2)}</td>
						</tr>
						`,
							)
							.join('')}
					</table>

					<img src="${category.image}" alt="${category.name}" />
				</div>
				
				
			`;
			const menuSection = document.querySelector('.menu__section');
			if (menuSection) {
				menuSection.insertAdjacentHTML('beforeend', markUp);
			}
		} else if (category.name === 'Drehspieß-Döner') {
			const markUp = `
			<div class="cards">
					<!-- Cards will be dynamically inserted here -->
					<table>
						<tr>
							<th>Item</th>
							<th>Description</th>
							<th>Price</th>
						</tr>
						${category.items
							.map(
								(item) => `
						<tr>
							<td>${item.name}</td>
							<td>${item.description}</td>
							<td>€${item.price.toFixed(2)}</td>
						</tr>
						`,
							)
							.join('')}
					</table>
					<img src="${category.image}" alt="${category.name}" />
				</div>
			`;
			const menuSection = document.querySelector('.menu__section');
			if (menuSection) {
				menuSection.insertAdjacentHTML('beforeend', markUp);
			}
		} else if (category.name === 'Dürüm') {
			const markUp = `
			<div class="cards">
					<!-- Cards will be dynamically inserted here -->
					<table>
						<tr>
							<th>Item</th>
							<th>Description</th>
							<th>Price</th>
						</tr>
						${category.items
							.map(
								(item) => `
						<tr>
							<td>${item.name}</td>
							<td>${item.description}</td>
							<td>€${item.price.toFixed(2)}</td>
						</tr>
						`,
							)
							.join('')}
					</table>
					<img src="${category.image}" alt="${category.name}" />
				</div>
			`;
			const menuSection = document.querySelector('.menu__section');
			if (menuSection) {
				menuSection.insertAdjacentHTML('beforeend', markUp);
			}
		} else if (category.name === 'Türkische-Pizza') {
			const markUp = `
			<div class="cards">
					<!-- Cards will be dynamically inserted here -->
					<table>
						<tr>
							<th>Item</th>
							<th>Description</th>
							<th>Price</th>
						</tr>
						${category.items
							.map(
								(item) => `
						<tr>
							<td>${item.name}</td>
							<td>${item.description}</td>
							<td>€${item.price.toFixed(2)}</td>
						</tr>
						`,
							)
							.join('')}
					</table>
					<img src="${category.image}" alt="${category.name}" />
				</div>
			`;
			const menuSection = document.querySelector('.menu__section');
			if (menuSection) {
				menuSection.insertAdjacentHTML('beforeend', markUp);
			}
		} else if (category.name === 'Pommes-Snacks') {
			const markUp = `
			<div class="cards">
					<!-- Cards will be dynamically inserted here -->
					<table>
						<tr>
							<th>Item</th>
							<th>Description</th>
							<th>Price</th>
						</tr>
						${category.items
							.map(
								(item) => `
						<tr>
							<td>${item.name}</td>
							<td>${item.description}</td>
							<td>€${item.price.toFixed(2)}</td>
						</tr>
						`,
							)
							.join('')}
					</table>
					<img src="${category.image}" alt="${category.name}" />
				</div>
			`;
			const menuSection = document.querySelector('.menu__section');
			if (menuSection) {
				menuSection.insertAdjacentHTML('beforeend', markUp);
			}
		} else if (category.name === 'Hauptgerichte') {
			const markUp = `
			<div class="cards">
					<!-- Cards will be dynamically inserted here -->
					<table>
						<tr>
							<th>Item</th>
							<th>Description</th>
							<th>Price</th>
						</tr>
						${category.items
							.map(
								(item) => `
						<tr>
							<td>${item.name}</td>
							<td>${item.description}</td>
							<td>€${item.price.toFixed(2)}</td>
						</tr>
						`,
							)
							.join('')}
					</table>
					<img src="${category.image}" alt="${category.name}" />
				</div>
			`;
			const menuSection = document.querySelector('.menu__section');
			if (menuSection) {
				menuSection.insertAdjacentHTML('beforeend', markUp);
			}
		} else if (category.name === 'Salate') {
			const markUp = `
			<div class="cards">
					<!-- Cards will be dynamically inserted here -->
					<table>
						<tr>
							<th>Item</th>
							<th>Description</th>
							<th>Price</th>
						</tr>
						${category.items
							.map(
								(item) => `
						<tr>
							<td>${item.name}</td>
							<td>${item.description}</td>
							<td>€${item.price.toFixed(2)}</td>
						</tr>
						`,
							)
							.join('')}
					</table>
					<img src="${category.image}" alt="${category.name}" />
				</div>
			`;
			const menuSection = document.querySelector('.menu__section');
			if (menuSection) {
				menuSection.insertAdjacentHTML('beforeend', markUp);
			}
		} else if (category.name === 'Pizza') {
			const markUp = `
			<div class="cards">
					<!-- Cards will be dynamically inserted here -->
					<table>
						<tr>
							<th>Item</th>
							<th>Description</th>
							<th>Price</th>
						</tr>
						${category.items
							.map(
								(item) => `
						<tr>
							<td>${item.name}</td>
							<td>${item.description}</td>
							<td>€${item.price.toFixed(2)}</td>
						</tr>
						`,
							)
							.join('')}
					</table>
					<img src="${category.image}" alt="${category.name}" />
				</div>
			`;
			const menuSection = document.querySelector('.menu__section');
			if (menuSection) {
				menuSection.insertAdjacentHTML('beforeend', markUp);
			}
		} else if (category.name === 'Menüs') {
			const markUp = `
			<div class="cards">
					<!-- Cards will be dynamically inserted here -->
					<table>
						<tr>
							<th>Item</th>
							<th>Description</th>
							<th>Price</th>
						</tr>
						${category.items
							.map(
								(item) => `
						<tr>
							<td>${item.name}</td>
							<td>${item.description}</td>
							<td>€${item.price.toFixed(2)}</td>
						</tr>
						`,
							)
							.join('')}
					</table>
					<img src="${category.image}" alt="${category.name}" />
				</div>
			`;
			const menuSection = document.querySelector('.menu__section');
			if (menuSection) {
				menuSection.insertAdjacentHTML('beforeend', markUp);
			}
		}
	});

	handleResize();
	window.addEventListener('resize', handleResize);
};

loadMenu();

const footerData = document.querySelector('.footer__content');
const data = new Date();
const year = data.getFullYear();
if (footerData) {
	footerData.textContent = `© ${year} Nazar Döner Kebab. All rights reserved.`;
}
