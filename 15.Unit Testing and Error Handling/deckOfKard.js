function deckOfCard(input) {
  let arr = [];
  for (const el of input) {
    const face = el.slice(0, -1);
    const suit = el.slice(-1);
    try {
      arr.push(createCrad(face, suit));
    } catch (error) {
      console.log(`Invalid card: ${el}`);
      return;
    }
  }
  console.log(arr.join("\n"));
  function createCrad(face, suit) {
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
    };
    if (!faces.includes(face)) {
      throw new Error("Invalid face.");
    } else if (!suits.hasOwnProperty(suit)) {
      throw new Error("Invalid suit.");
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
}

deckOfCard(["AS", "10D", "KH", "2C"]);
