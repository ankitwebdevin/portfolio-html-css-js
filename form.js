// <div class="contact-form">
// <h2>Contact Us</h2>
// <form id="contactForm">
//     <div>
//         <label for="name">Name</label>
//         <input type="text" id="name" name="name">
//         <div id="nameError" class="error"></div>
//     </div>
//     <div>
//         <label for="email">Email</label>
//         <input type="email" id="email" name="email">
//         <div id="emailError" class="error"></div>
//     </div>
//     <div>
//         <label for="subject">Subject</label>
//         <input type="text" id="subject" name="subject">
//         <div id="subjectError" class="error"></div>
//     </div>
//     <div>
//         <label for="message">Message</label>
//         <textarea id="message" name="message" rows="5"></textarea>
//         <div id="messageError" class="error"></div>
//     </div>
//     <button type="submit">Send Message</button>
// </form>
// </div>

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
