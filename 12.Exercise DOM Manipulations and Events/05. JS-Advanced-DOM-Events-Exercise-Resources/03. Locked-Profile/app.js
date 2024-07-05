// function lockedProfile() {
//   const ev = document.querySelectorAll("button");

//   for (const el of ev) {
//     el.addEventListener("click", (e) => {
//       const ev = e.target;
//       const profile = ev.parentNode;
//       const info = profile.getElementsByTagName("div")[0];
//       const lock = profile.querySelector("input[type='radio']:checked").value;

//       if (lock === "unlock") {
//         if (ev.textContent === "Show more") {
//           ev.textContent = "Hide it";
//           info.style.display = "inline-block";

//         } else if (ev.textContent === "Hide it") {
//           ev.textContent = "Show more";
//           info.style.display = "none";
//         }
//       }
//     });
//   }
// }

function lockedProfile() {
  const main = document.querySelectorAll(".profile");

  for (let i = 0; i < main.length; i++) {
    main[i].addEventListener("click", onClick);
  }

  function onClick(e) {
    const btn = e.target;
    const prof = btn.parentNode;

    const div = prof.querySelectorAll("div")[0];
    const lock = prof.querySelector("input[type='radio']:checked").value;

    if (lock === "unlock") {
      if (btn.textContent === "Show more") {
        btn.textContent = "Hide it";
        div.style.display = "inline-block";
      } else if (btn.textContent === "Hide it") {
        btn.textContent = "Show more";
        div.style.display = "none";
      }
    }
  }
}
