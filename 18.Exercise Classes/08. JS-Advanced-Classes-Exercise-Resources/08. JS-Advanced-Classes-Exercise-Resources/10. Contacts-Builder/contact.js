class Contact {

  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this._online = false;
  }

  get online() {
    return this._online;
  }
  set online(bolean) {
    this._online = bolean;
    if (this.div1) {
      this.div1.className = this._online ? "title online" : "title";
    }
  }

  crete(tag, content, classname) {
    this.el = document.createElement(tag);
    if (content) {
      this.el.innerHTML = content;
    }
    if (classname) {
      this.el.className = classname;
    }
    return this.el;
  }

  render(id) {
    this.parentEl = document.querySelector(`#${id}`);
    this.article = this.crete("article");
    this.div1 = this.crete("div", `${this.firstName} ${this.lastName}`, "title");
    this.div1.className = this._online ? "title online" : "title";

    this.button = this.crete("button", "&#8505;");

    this.div1.appendChild(this.button);
    this.article.appendChild(this.div1);

    this.divInfo = this.crete("div", "&#8505;", "info");
    this.divInfo.style.display = 'none';

    this.span1 = this.crete("span", `&phone; ${this.phone}`);
    this.span2 = this.crete("span", `&#9993; ${this.email}`);

    this.divInfo.appendChild(this.span1);
    this.divInfo.appendChild(this.span2);
    this.article.appendChild(this.divInfo)
    this.parentEl.appendChild(this.article)

    this.button.addEventListener("click", () => {
      if (this.divInfo.style.display === 'block') {

        this.divInfo.style.display = 'none'
      } else {

        this.divInfo.style.display = "block"
      }
    });
  }
}

let contacts = [
  new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
  new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
  new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
setTimeout(() => contacts[1].online = false, 5000);

