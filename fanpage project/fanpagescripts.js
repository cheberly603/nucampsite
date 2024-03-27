const gallery = document.querySelector('#gallery');
const img = gallery.querySelector('img');

img.addEventListener('click', () => {
  gallery.classList.add('myClass');
});

document.addEventListener('click', event => {
  if (!event.target.closest('#gallery') && gallery.classList.contains('myClass')) {
    gallery.classList.remove('myClass');
    img.src = 'fanpage images/cassettestress_hiattinswirl.jpg';
  }
});

img.addEventListener('click', () => {
  const mySrc = img.getAttribute('src');
  
  if (mySrc === 'fanpage images/cassettestress_headshots.jpg') {
    img.setAttribute('src', 'fanpage images/cassettestress_hiattinswirl.jpg');
  } else if (mySrc === 'fanpage images/cassettestress_hiattinswirl.jpg') {
    img.setAttribute('src', 'fanpage images/cassettestress_standingbytrees.jpg');
  } else if (mySrc === 'fanpage images/cassettestress_standingbytrees.jpg') {
    img.setAttribute('src', 'fanpage images/cassettestress_bandonstage.jpg');
  } else if (mySrc === 'fanpage images/cassettestress_bandonstage.jpg') {
    img.setAttribute('src', 'fanpage images/cassettestress_headshots.jpg');
  }
});