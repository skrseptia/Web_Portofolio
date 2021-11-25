var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var firstName = document.getElementById("firstName").value;
  console.log(firstName);

  var lastName = document.getElementById("lastName").value;
  console.log(lastName);

  var state = document.getElementById("state").value;
  console.log(state);

  var massage = document.getElementById("massage").value;
  console.log(massage);
});

const linkHome = document.getElementById("scrollToHome");
const home = document.getElementById("home");
linkHome.addEventListener("click", () => {
  window.scrollTo({
    top: home.offsetTop,
    behavior: "smooth",
  });
});

const linkAbout = document.getElementById("scrollToAbout");
const about = document.getElementById("about");
linkAbout.addEventListener("click", () => {
  window.scrollTo({
    top: about.offsetTop,
    behavior: "smooth",
  });
});

const linkExperience = document.getElementById("scrollToExperience");
const experience = document.getElementById("experience");
linkExperience.addEventListener("click", () => {
  window.scrollTo({
    top: experience.offsetTop,
    behavior: "smooth",
  });

  const linkEducation = document.getElementById("scrollToEducation");
  const education = document.getElementById("education");
  linkEducation.addEventListener("click", () => {
    window.scrollTo({
      top: education.offsetTop,
      behavior: "smooth",
    });
  });
  const linkCreations = document.getElementById("scrollToCreations");
  const creations = document.getElementById("creations");
  linkCreations.addEventListener("click", () => {
    window.scrollTo({
      top: creations.offsetTop,
      behavior: "smooth",
    });
  });

  const linkContact = document.getElementById("scrollToContact");
  const contact = document.getElementById("contact");
  linkContact.addEventListener("click", () => {
    window.scrollTo({
      top: contact.offsetTop,
      behavior: "smooth",
    });
  });
});
