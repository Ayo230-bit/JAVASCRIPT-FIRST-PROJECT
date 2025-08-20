  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const sideLinks = document.querySelector('.side');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    sideLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });


  // Image Slider Functionality
     function moveSlide(direction) {
    const wrapper = document.querySelector('.slider-wrapper');
    const scrollAmount = 200 * direction;
    wrapper.scrollLeft += scrollAmount;
  }

// Dark Mode Toggle Functionality
  document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const lightIcon = document.getElementById("lightModeIcon");
  const darkIcon = document.getElementById("darkModeIcon");

  // Load stored preference
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    lightIcon.style.display = "inline-block";
    darkIcon.style.display = "none";
  } else {
    lightIcon.style.display = "none";
    darkIcon.style.display = "inline-block";
  }

  lightIcon.addEventListener("click", () => {
    body.classList.remove("dark-mode");
    lightIcon.style.display = "none";
    darkIcon.style.display = "inline-block";
    localStorage.setItem("theme", "light");
  });

  darkIcon.addEventListener("click", () => {
    body.classList.add("dark-mode");
    lightIcon.style.display = "inline-block";
    darkIcon.style.display = "none";
    localStorage.setItem("theme", "dark");
  });
});

// Scroll to Top and Bottom Functionality
const scrollButtons = document.querySelector(".scroll-buttons");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollButtons.style.display = "flex";
  } else {
    scrollButtons.style.display = "none";
  }
});


// LOGIN FUNCTIONALITY
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate login success
    alert("Login successful!");
    window.location.href = "/PROJECT PART 2/Index.html"; // Redirect to homepage
  });

  

  // Register Functionality
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual submission

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!fullname || !email || !username || !password) {
      alert("Please fill out all fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    // Simulate registration success
    alert("Account created successfully!");
    window.location.href = "Login.html"; // Redirect to login page
  });

  // CART 
  
// Nigerian sample cart data (simulate localStorage or backend)
let cart = [
	{ id: 1, name: "Jollof Rice", price: 1500, quantity: 2 },
	{ id: 2, name: "Suya Platter", price: 2500, quantity: 1 },
	{ id: 3, name: "Efo Riro", price: 1800, quantity: 1 }
];

function renderCart() {
	const cartItems = document.getElementById('cart-items');
	const cartTotal = document.getElementById('cart-total');
	cartItems.innerHTML = '';
	let total = 0;
	cart.forEach(item => {
		const subtotal = item.price * item.quantity;
		total += subtotal;
		const tr = document.createElement('tr');
		tr.innerHTML = `
			<td>${item.name}</td>
			<td>${item.price.toLocaleString()}</td>
			<td>
				<input type="number" min="1" value="${item.quantity}" data-id="${item.id}" class="qty-input" style="width:50px;">
			</td>
			<td>${subtotal.toLocaleString()}</td>
			<td>
				<button class="remove-btn" data-id="${item.id}" title="Remove"><i class="fas fa-trash"></i></button>
			</td>
		`;
		cartItems.appendChild(tr);
	});
	cartTotal.textContent = `₦${total.toLocaleString()}`;
}

document.addEventListener('DOMContentLoaded', () => {
	renderCart();

	// Quantity change
	document.getElementById('cart-items').addEventListener('input', function(e) {
		if (e.target.classList.contains('qty-input')) {
			const id = parseInt(e.target.getAttribute('data-id'));
			const qty = parseInt(e.target.value);
			cart = cart.map(item => item.id === id ? { ...item, quantity: qty > 0 ? qty : 1 } : item);
			renderCart();
		}
	});

	// Remove item
	document.getElementById('cart-items').addEventListener('click', function(e) {
		if (e.target.closest('.remove-btn')) {
			const id = parseInt(e.target.closest('.remove-btn').getAttribute('data-id'));
			cart = cart.filter(item => item.id !== id);
			renderCart();
		}
	});

	// Checkout button
	document.getElementById('checkout-btn').addEventListener('click', function() {
		if (cart.length === 0) {
			alert('Your cart is empty!');
			return;
		}
		alert('Proceeding to checkout. (Demo only)');
		// Redirect to payment/delivery page in real system
	});
});
