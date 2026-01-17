function checkEligibility() {
  const options = [
    "You are eligible for Small Sponsorship ✅",
    "You are eligible for Medium Sponsorship 🚀",
    "You are eligible for Big Sponsorship 🔥"
  ];
  const random = Math.floor(Math.random() * options.length);
  document.getElementById("result").innerText = options[random];
}