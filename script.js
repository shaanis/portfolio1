document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const menuModal = document.getElementById('menuModal');

  // Toggle menu
  menuBtn.addEventListener('click', () => {
    menuModal.style.display = 'flex';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    menuModal.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'flex';
  });

  // Highlight active link
  const currentPath = window.location.pathname.split("/").pop() || 'index.html';
  const navLinks = document.querySelectorAll('a.nav-link');
  

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    

    if (href === currentPath) {
      link.classList.add("active");
      link.style.color = "#7cf03d"; // Change to your desired color
    } else {
      link.classList.remove("active");
    }

    
  });
});
