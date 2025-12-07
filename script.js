window.addEventListener("DOMContentLoaded", function () {

  // apply saved cookies on load
  const s = getCookie("fontsize");
  const c = getCookie("fontcolor");

  if (s) document.documentElement.style.setProperty("--fontsize", s + "px");
  if (c) document.documentElement.style.setProperty("--fontcolor", c);

  if (s) document.getElementById("fontsize").value = s;
  if (c) document.getElementById("fontcolor").value = c;

  // event listener now works — form exists
  document.getElementById("fontForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let size = document.getElementById("fontsize").value;
    let color = document.getElementById("fontcolor").value;

    document.cookie = `fontsize=${size}; path=/; max-age=31536000`;
    document.cookie = `fontcolor=${color}; path=/; max-age=31536000`;

    document.documentElement.style.setProperty("--fontsize", size + "px");
    document.documentElement.style.setProperty("--fontcolor", color);
  });
});

function getCookie(name) {
  let row = document.cookie.split("; ").find(c => c.startsWith(name + "="));
  return row ? row.split("=")[1] : null;
}