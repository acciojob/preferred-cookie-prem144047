//your JS code here. If required.
window.onload = function () {
  const savedSize = getCookie("fontsize");
  const savedColor = getCookie("fontcolor");

  if (savedSize) document.documentElement.style.setProperty("--fontsize", savedSize + "px");
  if (savedColor) document.documentElement.style.setProperty("--fontcolor", savedColor);

  if (savedSize) document.getElementById("fontsize").value = savedSize;
  if (savedColor) document.getElementById("fontcolor").value = savedColor;
};

// ----- SAVE VALUES ON SUBMIT -----
document.getElementById("fontForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let size = document.getElementById("fontsize").value;
  let color = document.getElementById("fontcolor").value;

  // Save to cookies (1-year expiry)
  document.cookie = `fontsize=${size}; path=/; max-age=31536000`;
  document.cookie = `fontcolor=${color}; path=/; max-age=31536000`;

  document.documentElement.style.setProperty("--fontsize", size + "px");
  document.documentElement.style.setProperty("--fontcolor", color);
  alert("Preferences Saved! Refresh to test persistence.");
});

// ----- COOKIE READER FUNCTION -----
function getCookie(name) {
  let value = document.cookie.split("; ").find(row => row.startsWith(name));
  return value ? value.split("=")[1] : null;
}