const mainMenu = document.querySelector('.nav-list');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .nav-list li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

// function show() {
//     mainMenu.style.right = '0';
//   }
function close(){
    mainMenu.style.top = '-100%';
}


const element = document.getElementById('macbook-image');
let isRotating = false;

// Function to start the rotation animation
function startRotation() {
  element.style.animation = 'rotate 3s linear';
  isRotating = true;
}

// Function to stop the rotation animation
function stopRotation() {
  element.style.animation = 'none';
  isRotating = false;
}

// Check if the element is fully visible in the viewport
function isFullyVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
}

// Function to handle scroll event
function handleScroll() {
  if (isFullyVisible(element) && !isRotating) {
    startRotation();
    setTimeout(stopRotation, 3000); // Stop rotation after 3 seconds
  }
}

// Listen for scroll event and call the handleScroll function
window.addEventListener('scroll', handleScroll);


