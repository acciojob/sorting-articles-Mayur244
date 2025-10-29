//your JS code here. If required.

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticles(str) {
	return str.replace(/^(a |an |the )/i, '');
}

const sortedBands = bands.slice().sort((a, b) => {
	let bandA = removeArticles(a).toLowerCase();
	let bandB = removeArticles(b).toLowerCase();

	if(bandA < bandB) return -1;
	if(bandA > bandB) return 1;
	return 0;
})

const list = document.getElementById("band");

sortedBands.forEach((band) => {
	const li = document.createElement('li');
	li.textContent = band;
	list.appendChild(li);
})