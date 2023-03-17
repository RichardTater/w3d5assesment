console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('What the duck man!')
	console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


// start picture mouseover interaction
let picture = document.querySelector('img')

const goOver = () => {
	alert('Duck you are handsome!')
}

picture.addEventListener('mouseover', goOver)
// end picture mouseover interaction