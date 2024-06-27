const header = document.querySelector('header');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("scrolled");
  } else {
       header.classList.remove("scrolled");
  }
}


const menuItems = document.querySelectorAll('#navbar ul li');

menuItems.forEach(item => {
  item.addEventListener('mouseover', function() {
    this.querySelector('a').style.color = '#ff9900';
  });

  item.addEventListener('mouseout', function() {
    this.querySelector('a').style.color = '#fff'; 
  });
});
