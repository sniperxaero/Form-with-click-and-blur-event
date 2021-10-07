'use strict';

const hiddenX = document.querySelector('.visibilityicon');
const passwordX = document.querySelector('.password');
const body = document.querySelector('.body');

  passwordX.addEventListener('focus', function(){
        hiddenX.classList.remove('hidden');
  });

  passwordX.addEventListener('blur', function(){
      hiddenX.classList.add('hidden')
  });