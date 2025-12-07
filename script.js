document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("fontForm");
  const sizeInput = document.getElementById("fontsize");
  const colorInput = document.getElementById("fontcolor");

  // If any of these are NULL → your HTML IDs are incorrect
  if (!form || !sizeInput || !colorInput) {
    console.error("Missing required elements in HTML.");
    return; // prevents Cypress failure
  }

  // Load previous cookie values
  const savedSize = getCookie("fontsize");
  const savedColor = getCookie("fontcolor");

  if (savedSize) document.documentElement.style.setProperty("--fontsize", savedSize + "px");
  if (savedColor) document.documentElement.style.setProperty("--fontcolor", savedColor);

  if (savedSize) sizeInput.value = savedSize;
  if (savedColor) colorInput.value = savedColor;

  // Save cookie on submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let size = sizeInput.value;
    let color = colorInput.value;

    document.cookie = `fontsize=${size}; path=/; max-age=31536000`;
    document.cookie = `fontcolor=${color}; path=/; max-age=31536000`;

    document.documentElement.style.setProperty("--fontsize", size + "px");
    document.documentElement.style.setProperty("--fontcolor", color);
  });
});

// Cookie Reader
function getCookie(name) {
  let item = document.cookie.split("; ").find(c => c.startsWith(name + "="));
  return item ? item.split("=")[1] : null;
}