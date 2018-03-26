// Code for bundle and loaders

// import sum from './math';
// import './image_viewer';

// console.log(sum(2, 2));

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
	System.import('./image_viewer').then(module => {
		module.default();
	});
};

document.body.appendChild(button);
