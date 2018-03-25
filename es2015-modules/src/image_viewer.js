import large from '../assets/large.png';
import small from '../assets/small.png';

import '../styles/image-viewer.css'

const img = document.createElement('img');
img.src = small;
document.body.appendChild(img);

const large_img = document.createElement('img');
large_img.src = large;

document.body.appendChild(large_img);
