function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("subjectError").innerText = "";
    document.getElementById("messageError").innerText = "";

    let isValid = true;

    // Validate Name
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
      document.getElementById("nameError").innerText =
        "Please enter your name.";
      isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === "") {
      document.getElementById("emailError").innerText =
        "Please enter your email.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").innerText =
        "Please enter a valid email address.";
      isValid = false;
    }

    // Validate Subject
    const subject = document.getElementById("subject").value;
    if (subject.trim() === "") {
      document.getElementById("subjectError").innerText =
        "Please enter a subject.";
      isValid = false;
    }

    // Validate Message
    const message = document.getElementById("message").value;
    if (message.trim() === "") {
      document.getElementById("messageError").innerText =
        "Please enter your message.";
      isValid = false;
    }

    if (isValid) {
      // Form is valid, you can submit it or perform further actions here
      alert("Form submitted successfully!");
    }
  });
