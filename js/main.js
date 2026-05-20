const messageButton = document.querySelector("[data-message-button]");
const message = document.querySelector("[data-message]");

if (messageButton && message) {
  messageButton.addEventListener("click", () => {
    message.textContent = "JavaScriptが読み込まれています。";
  });
}
