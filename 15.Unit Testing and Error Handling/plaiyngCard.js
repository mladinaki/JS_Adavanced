function factoryCard(face, suit) {
  const faces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = {
    S: "\u2660 ",
    H: "\u2665 ",
    D: "\u2666 ",
    C: "\u2663 ",
  }

  if (!faces.includes(face)) {
    throw new Error("invalid face.");
  } else if (!suits.hasOwnProperty(suit)) {
    throw new Error("invalid suit.");
  }

  const res = {
    face,
    suit,
    toString() {
      return this.face + suits[this.suit];
    },
  };
  return res;
}

const factory = [factoryCard("A", "S")];

console.log(factory.join("\n"));
