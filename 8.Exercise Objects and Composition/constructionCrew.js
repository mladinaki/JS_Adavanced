function constructionCrew(input) {
  const parse = Object.assign({}, input);

  if (parse.dizziness === true) {
    parse.dizziness = false;

    parse.levelOfHydrated += 0.1 * parse.weight * parse.experience;
  }
  return parse;
}
constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});
