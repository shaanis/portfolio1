// email.js

// Initialize EmailJS
(function () {
  emailjs.init("q0zjjXk-jclXuMGB8"); // Replace with your actual public key
})();

// Handle form submission

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const messageDiv = document.getElementById("form-message");

  // Success and error SVG icons
  const successIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M5 13l4 4L19 7" />
    </svg>
  `;
  const errorIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  `;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_oa6t6il", "template_c5l9wkq", form)
      .then(() => {
        messageDiv.innerHTML = `${successIcon} <span>Message sent successfully!</span>`;
        messageDiv.className = "form-message"; // success styling by default
        messageDiv.style.display = "flex";

        form.reset();

        setTimeout(() => {
          messageDiv.style.display = "none";
        }, 5000);
      })
      .catch((error) => {
        messageDiv.innerHTML = `${errorIcon} <span>Failed to send message. Please try again.</span>`;
        messageDiv.className = "form-message error";
        messageDiv.style.display = "flex";

        console.error("EmailJS error:", error);

        setTimeout(() => {
          messageDiv.style.display = "none";
        }, 7000);
      });
  });
});
