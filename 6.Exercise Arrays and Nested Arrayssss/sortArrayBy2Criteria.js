function sortArrayBy2Criteria(input) {
    let res = input.sort().sort((a, b) => a.length - b.length);
    return res.join('\n');
}
sortArrayBy2Criteria(["test", "Deny", "omen", "Default"]);
sortArrayBy2Criteria(["alpha", "beta", "gamma"]);
sortArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
beta,alpha ,gamma//



