import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset;

    
    target.forEach(function(element) {
      console.log(element)
        if ((windowTop) > element.affsetTop) {
            element.classList.add(animationClass)
        }
    })
  
}


window.addEventListener('scroll', function() {
    animeScroll()
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


