function solve() {
    const dataForm = {};
    const list = document.getElementById("list");
    const sendli = document.querySelector(".sent-list");
    const delli = document.querySelector(".delete-list");

    document.getElementById("add").addEventListener("click", onAdd);
    document.getElementById("reset").addEventListener("click", resets);

    dataForm["recipientName"] = document.getElementById("recipientName");
    dataForm["title"] = document.getElementById("title");
    dataForm["message"] = document.getElementById("message");
    return dataForm;

    function onAdd(ev) {
        ev.preventDefault();
        const recipiName = dataForm.recipientName.value;
        const titleValue = dataForm.title.value;
        const messageVlue = dataForm.message.value;

        if (!recipiName || !titleValue || !messageVlue) {
            return;
        }
        dataForm["recipientName"].value = "";
        dataForm["title"].value = "";
        dataForm["message"].value = "";

        const li = document.createElement("li");
        li.innerHTML = `
        <h4>Title: ${titleValue}</h4>
        <h4>Recipient Name: ${recipiName}</h4>
        <span>${messageVlue}</span>
        <div id="list-action">
         <button type="submit" id="send">Send</button>
         <button type="submit" id="delete">Delete</button>
       </div>`;
        li.querySelector("#send").addEventListener("click", () =>
            onSend(li, recipiName, titleValue)
        );
        li.querySelector("#delete").addEventListener("click", () =>
            onDel(li, recipiName, titleValue)
        );
        list.appendChild(li);

        resetInput();
    }
    function onSend(li, recipiName, titleValue) {
        const liSend = document.createElement("li");
        // debugger
        liSend.innerHTML = `<span>To: ${recipiName}</span>
        <span>Title: ${titleValue}</span>
        <div class="btn">
        <button type="submit" class="delete">Delete</button>
        </div>`;
        liSend
            .querySelector(".delete")
            .addEventListener("click", () => onDel(liSend, recipiName, titleValue));

        li.remove();
        sendli.appendChild(liSend);
    }

    function onDel(liSend, recipiName, titleValue) {
        const liDel = document.createElement("li");
        liDel.innerHTML = `<span>To: ${recipiName}</span>
             <span>Title: ${titleValue}</span>`;
        delli.appendChild(liDel);
        liSend.remove();
    }

    function resets(ev) {
        ev.preventDefault();
        resetInput();
    }

    function resetInput() {
        dataForm['recipientName'].value = "";
        dataForm['title'].value = "";
        dataForm['message'].value = "";
    }
}
solve();
