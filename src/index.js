const searchForm = document.getElementById('header-search-form');
const searchBar = document.getElementById('header-search-input');
const randomUsersGenerate = document.querySelector('.our-people__generate');
const randomUsersFilter = document.getElementById('random-users-filter');
const randomUsersList = document.getElementById('random-users');
const footerCopyright = document.getElementById('footer-copyright-text');

footerCopyright.innerHTML =
	'&copy; ' + new Date().getFullYear() + ' Americaneagle.com. All Rights Reserved.';

const RANDOM_USER_API_URL = 'https://randomuser.me/api/?results=20&nat=us';

const randomUsers = new Map();
const favoriteRandomUsers = new Map();

const fetchRandomUser = async () => {
	const response = await fetch(RANDOM_USER_API_URL);

	if (response.status !== 200) {
		console.error('The fetch request for a random user failed!');
		return;
	}

	return response.json();
};

const updateFavoriteButton = (favoriteButton, user) => {
	if (favoriteRandomUsers.has(user.login.uuid)) {
		favoriteRandomUsers.delete(user.login.uuid, user);

		favoriteButton.ariaLabel = 'Favorite user';
		favoriteButton.innerHTML = `<svg class="our-people__favorite-icon" aria-hidden="true" focusable="false"><use xlink:href="#star-empty-icon"></use></svg>`;
	} else {
		favoriteRandomUsers.set(user.login.uuid, user);

		favoriteButton.ariaLabel = 'Unfavorite user';
		favoriteButton.innerHTML = `<svg class="our-people__favorite-icon" aria-hidden="true" focusable="false"><use xlink:href="#star-full-icon"></use></svg>`;
	}
};

const createRandomUser = (user) => {
	randomUsers.set(user.login.uuid, user);

	const randomUserItem = document.createElement('li');
	randomUserItem.className = 'our-people__item';

	const randomUserCard = document.createElement('div');
	randomUserCard.className = 'our-people__card';

	const randomUserFavorite = document.createElement('button');
	randomUserFavorite.type = 'button';
	randomUserFavorite.className = 'our-people__favorite';
	randomUserFavorite.addEventListener(
		'click',
		updateFavoriteButton.bind(this, randomUserFavorite, user)
	);

	if (favoriteRandomUsers.has(user.login.uuid)) {
		randomUserFavorite.ariaLabel = 'Unfavorite user';
		randomUserFavorite.innerHTML = `<svg class="our-people__favorite-icon" aria-hidden="true" focusable="false"><use xlink:href="#star-full-icon"></use></svg>`;
	} else {
		randomUserFavorite.ariaLabel = 'Favorite user';
		randomUserFavorite.innerHTML = `<svg class="our-people__favorite-icon" aria-hidden="true" focusable="false"><use xlink:href="#star-empty-icon"></use></svg>`;
	}

	const randomUserImage = document.createElement('img');
	randomUserImage.src = user.picture.large;
	randomUserImage.alt = '';
	randomUserImage.className = 'our-people__image';

	const randomUserInformation = document.createElement('div');
	randomUserInformation.className = 'our-people__information';

	const randomUserName = document.createElement('p');
	randomUserName.className = 'our-people__name';
	randomUserName.textContent = `${user.name.first} `;

	const randomUserLastName = document.createElement('span');
	randomUserLastName.className = 'our-people__last';
	randomUserLastName.textContent = user.name.last;

	randomUserName.appendChild(randomUserLastName);

	const randomUserCellphone = document.createElement('p');
	randomUserCellphone.className = 'our-people__cellphone';
	randomUserCellphone.textContent = user.cell;

	const randomUserEmail = document.createElement('p');
	randomUserEmail.className = 'our-people__email';
	randomUserEmail.textContent = user.email;

	randomUserInformation.appendChild(randomUserName);
	randomUserInformation.appendChild(randomUserCellphone);
	randomUserInformation.appendChild(randomUserEmail);
	randomUserCard.appendChild(randomUserFavorite);
	randomUserCard.appendChild(randomUserImage);
	randomUserCard.appendChild(randomUserInformation);
	randomUserItem.appendChild(randomUserCard);
	randomUsersList.appendChild(randomUserItem);
};

const generateAllRandomUsers = () => {
	randomUsersList.innerHTML = '';

	for (const [_, value] of randomUsers.entries()) {
		createRandomUser(value);
	}
};

const generateFavoriteRandomUsers = () => {
	randomUsersList.innerHTML = '';

	if (favoriteRandomUsers.size === 0) {
		const noFavoriteUsers = document.createElement('li');
		noFavoriteUsers.textContent = 'There are currenlty no favorited users!';

		randomUsersList.appendChild(noFavoriteUsers);
		return;
	}

	for (const [_, value] of favoriteRandomUsers.entries()) {
		createRandomUser(value);
	}
};

randomUsersFilter.addEventListener('change', (e) => {
	switch (e.target.value) {
		case 'all':
			generateAllRandomUsers();
			return;

		case 'favorites':
			generateFavoriteRandomUsers();
			return;

		default:
			return;
	}
});

randomUsersGenerate.addEventListener('click', async () => {
	randomUsers.clear();
	favoriteRandomUsers.clear();

	const randomUserResponse = await fetchRandomUser();

	randomUsersList.innerHTML = '';

	for (const user of randomUserResponse.results) {
		createRandomUser(user);
	}
});

const initOurPeople = async () => {
	const randomUserResponse = await fetchRandomUser();

	for (const user of randomUserResponse.results) {
		createRandomUser(user);
	}
};

initOurPeople();
