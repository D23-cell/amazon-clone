// Dropdown for Account & Lists
const accountMenu = document.querySelector('.nav-item');
const dropdown = document.createElement('div');
dropdown.className = 'dropdown-menu';
dropdown.innerHTML = `
  <ul>
    <li>Your Account</li>
    <li>Your Orders</li>
    <li>Wishlist</li>
    <li>Sign Out</li>
  </ul>
`;
accountMenu.appendChild(dropdown);

accountMenu.addEventListener('mouseenter', () => {
  dropdown.style.display = 'block';
});
accountMenu.addEventListener('mouseleave', () => {
  dropdown.style.display = 'none';
});

// Cart animation
const cart = document.querySelector('.nav-item.cart');
cart.addEventListener('click', () => {
  cart.classList.add('shake');
  setTimeout(() => cart.classList.remove('shake'), 500);
  alert("Cart clicked! (You can add real cart logic here)");
});

// Back to top smooth scroll
document.querySelector('.footer-back').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
