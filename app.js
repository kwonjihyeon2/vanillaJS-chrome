const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const savedName = localStorage.getItem(USERNAME_KEY);

function onClickLogin(e) {
  e.preventDefault();
  loginForm.classList.add("hidden");
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

loginForm.addEventListener("submit", onClickLogin);

function paintGreetings(getName) {
  greeting.innerText = `Hello ${getName}`;
  greeting.classList.remove("hidden");
}

if (savedName !== null) {
  loginForm.classList.add("hidden");
  paintGreetings(savedName);
}
