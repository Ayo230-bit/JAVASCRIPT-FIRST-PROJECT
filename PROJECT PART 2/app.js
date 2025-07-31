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


