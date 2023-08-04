window.addEventListener('scroll', function () {
    const navigation = document.querySelector('.navigation');
    if (window.scrollY > 0) {
      navigation.style.backgroundColor = '#ff6600'; 
      navigation.style.color = '#ffffff'; 
    } else {
      navigation.style.backgroundColor = '#ffffff'; 
      navigation.style.color = '#333333'; 
    }
  });
  