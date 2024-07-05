// window.addEventListener("load", solve);

// function solve() {
//     const genre = document.getElementById("genre");
//     const name = document.getElementById("name");
//     const author = document.getElementById("author");
//     const date = document.getElementById("date");

//     const allhits = document.querySelector(".all-hits-container");
//     const likes = document.querySelector(".likes p");
//     const savedHits = document.querySelector(".saved-container");

//     document.getElementById("add-btn").addEventListener("click", addPost);

//     function addPost(e) {
//         e.preventDefault();
//         const genreInp = genre.value;
//         const nameInp = name.value;
//         const authorInp = author.value;
//         const dateInp = date.value;

//         if (!genreInp || !nameInp || !authorInp || !dateInp) {
//             return;
//         }

//         resetInput();
//         cretePostMusic(e, genreInp, nameInp, authorInp, dateInp);
//     }

//     function cretePostMusic(e, genreInp, nameInp, authorInp, dateInp) {
//         const div = create("div", "", "hits-info");
//         const image = create("img");
//         image.src = "./static/img/img.png";
//         const h2Genre = create("h2", `Genre: ${genreInp}`);
//         const h2Name = create("h2", `Name: ${nameInp}`);
//         const h2Author = create("h2", `Author: ${authorInp}`);
//         const h3Date = create("h3", `Date: ${dateInp}`);

//         const btnSave = create("button", "Save song", "save-btn");
//         const btnLike = create("button", "Like song", "like-btn");
//         const btnDel = create("button", "Delete", "delete-btn");

//         btnLike.addEventListener("click", onLike);
//         btnSave.addEventListener("click", (btnLike, btnSave) => onSave(btnLike, btnSave));
//         btnDel.addEventListener("click", onDel);

//         div.appendChild(image);
//         div.appendChild(h2Genre);
//         div.appendChild(h2Name);
//         div.appendChild(h2Author);
//         div.appendChild(h3Date);
//         div.appendChild(btnSave);
//         div.appendChild(btnLike);
//         div.appendChild(btnDel);
//         allhits.appendChild(div);
//     }

//     function onLike(e) {
//         e.target.disabled = true;
//         let like = likes.textContent.replace("Total Likes: ", "");
//         like = Number(like);
//         like++;
//         likes.textContent = `Total Likes: ${like}`;
//     }

//     function onSave(e, btnLike, btnSave) {
//         let savedDel = e.target
//         let likeDel = e.target.nextElementSibling
//         let savedPost = e.target.parentElement;
//         savedHits.appendChild(savedPost);
//         savedDel.remove(btnSave);
//         likeDel.remove(btnLike);
//     }

//     function onDel(e) {
//         let res = e.target.parentElement;
//         res.remove();
//     }

//     function create(tag, content, className) {
//         const el = document.createElement(tag);

//         if (content) {
//             el.textContent = content;
//         }
//         if (className) {
//             el.className = className;
//         }
//         return el;
//     }

//     function resetInput() {
//         genre.value = '';
//         name.value = '';
//         author.value = '';
//         date.value = '';
//     }

//     const div = document.createElement('div')
//     const span = document.createElement('span');
//     div.appendChild(span);
//     console.log(div);
// }

function sum(a,b){
    console.log(a+b);
}
sum(3,5)