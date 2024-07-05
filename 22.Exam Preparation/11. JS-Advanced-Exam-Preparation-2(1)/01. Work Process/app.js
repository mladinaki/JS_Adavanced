function solve() {
    document.getElementById("add-worker").addEventListener("click", onSubmit);
    const message = document.getElementById("message");
    const sums = document.getElementById("sum");

    const fnameInp = document.getElementById("fname");
    const lnameInp = document.getElementById("lname");
    const emailInp = document.getElementById("email");
    const birthInp = document.getElementById("birth");
    const positionInp = document.getElementById("position");
    const salaryInp = document.getElementById("salary");

    const tbody = document.getElementById("tbody");

    function onSubmit(e) {
        e.preventDefault();

        const fnameVal = fnameInp.value;
        const lnameVal = lnameInp.value;
        const emailVal = emailInp.value;
        const birthVal = birthInp.value;
        const positionVal = positionInp.value;
        const salaryVal = salaryInp.value;

        if (!fnameVal || !lnameVal || !emailVal || !birthVal || !positionVal || !salaryVal
        ) {
            return;
        }
        resEl()
        addWork(fnameVal, lnameVal, emailVal, birthVal, positionVal, salaryVal);
    }

    function addWork(
        fnameVal,
        lnameVal,
        emailVal,
        birthVal,
        positionVal,
        salaryVal
    ) {
        const tr = createEl("tr");
        const trFirst = createEl("td", `${fnameVal}`);
        const trLast = createEl("td", `${lnameVal}`);
        const trEmail = createEl("td", `${emailVal}`);
        const trBirth = createEl("td", `${birthVal}`);
        const trPosition = createEl("td", `${positionVal}`);
        const trSalary = createEl("td", `${salaryVal}`);
        const tdBtn = createEl("td");
        const btnFired = createEl("button", "Fired", "fired");
        const btnEdit = createEl("button", "Edit", "edit");

        btnFired.addEventListener('click', (e) => {
            const budget = Number(sums.textContent);
            const res = Number(salaryVal);
            sums.textContent = (budget - res).toFixed(2);
            e.target.parentElement.parentElement.remove()
        })

        btnEdit.addEventListener("click", (e) => {
            fnameInp.value = fnameVal;
            lnameInp.value = lnameVal;
            emailInp.value = emailVal;
            birthInp.value = birthVal;
            positionInp.value = positionVal;
            salaryInp.value = salaryVal;

            const budget = Number(sums.textContent);
            const res = Number(salaryVal);
            sums.textContent = (budget - res).toFixed(2);
            e.target.parentElement.parentElement.remove()
        });

        tr.appendChild(trFirst);
        tr.appendChild(trLast);
        tr.appendChild(trEmail);
        tr.appendChild(trBirth);
        tr.appendChild(trPosition);
        tr.appendChild(trSalary);
        tdBtn.appendChild(btnFired);
        tdBtn.appendChild(btnEdit);

        tbody.appendChild(tr);
        tr.appendChild(tdBtn);

        const budget = Number(sums.textContent);
        const res = Number(salaryVal);
        sums.textContent = (budget + res).toFixed(2);
    }

    function createEl(tag, content, className) {
        const el = document.createElement(tag);
        if (content) {
            el.textContent = content;
        }
        if (className) {
            el.className = className;
        }
        return el;
    }

    function resEl() {
        fnameInp.value = "";
        lnameInp.value = "";
        emailInp.value = "";
        birthInp.value = "";
        positionInp.value = "";
        salaryInp.value = "";
    }
}
solve();
