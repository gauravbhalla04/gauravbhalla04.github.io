const sidebar = document.getElementById("sidebar");
const toggle = document.getElementById("toggle");

let show = true;
toggle.addEventListener("click", event => {
  event.preventDefault();
  show = !show;
  if (show) {
    sidebar.style.display = "flex";
    toggle.style.marginTop = "20px";
    toggle.innerHTML = `<svg aria-hidden="true" role="img" class="octicon" viewbox="0 0 24 24" width="32" height="32" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom;"><path fill-rule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"></path></svg>`;
  } else {
    sidebar.style.display = "none";
    toggle.style.marginTop = "8px";
    toggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>`;
  }
});

