window.addEventListener("load", solve);

function solve() {
    const gemName = document.getElementById("gem-name");
    const color = document.getElementById("color");
    const carats = document.getElementById("carats");
    const price = document.getElementById("price");
    const type = document.getElementById("type");

    //append
    const previewList = document.getElementById("preview-list");
    const collection = document.getElementById("collection");

    //btn
    const btnAdd = document.getElementById("add-btn");
    btnAdd.addEventListener("click", onAdd);

    function onAdd(e) {
        e.preventDefault();
        btnAdd.disabled = true;

        const gemValue = gemName.value;
        const colorValue = color.value;
        const caratsValue = carats.value;
        const priceValue = Number(price.value);
        const typeValue = type.value;

        if (!gemValue || !colorValue || caratsValue <= 0 || priceValue <= 0 || !typeValue) {
            return;
        }

        gemName.value = "";
        color.value = "";
        carats.value = "";
        price.value = "";
        type.value = "";

        const li = createEl("li", "", "gem-info");
        const article = createEl("article");
        const h4 = createEl("h4", `${gemValue}`);
        const pColor = createEl("p", `Color: ${colorValue}`);
        const pCarats = createEl("p", `Carats: ${caratsValue}`);
        const pPrice = createEl("p", `Price: ${Number(priceValue)} $`);
        const pType = createEl("p", `Type: ${typeValue}`);

        const btnSave = createEl("button", "Save to Collection", "save-btn");
        const btnEdit = createEl("button", "Edit Information", "edit-btn");
        const btnCncel = createEl("button", "Cncel", "cancel-btn");

        btnEdit.addEventListener("click", (e) => {
            const removeEl = e.target.parentElement;
            btnAdd.disabled = false;
            gemName.value = gemValue;
            color.value = colorValue;
            carats.value = caratsValue;
            price.value = priceValue;
            type.value = typeValue;
            removeEl.remove();
        });

        btnSave.addEventListener("click", (e) => {
            const removeSave = e.target.parentElement;
            const li = createEl("li");
            const p = createEl("p", "", "collection-item");
            p.textContent = `Ruby - Color: ${colorValue}/ Carats: ${caratsValue}/ Price: ${Number(priceValue)}$/ Type: ${typeValue}`;

            li.appendChild(p);
            collection.appendChild(li);
            removeSave.remove();
        });
        btnCncel.addEventListener("click", (e) => {
            const res = e.target.parentElement;
            res.remove();
            btnAdd.disabled = false;
        });

        li.appendChild(article);
        article.appendChild(h4);
        article.appendChild(pColor);
        article.appendChild(pCarats);
        article.appendChild(pPrice);
        article.appendChild(pType);
        li.appendChild(btnSave);
        li.appendChild(btnEdit);
        li.appendChild(btnCncel);

        previewList.appendChild(li);
    }

    function createEl(tag, content, className) {
        const el = document.createElement(tag);

        el.textContent = content;
        if (className) {
            el.className = className;
        }
        return el;
    }
}
