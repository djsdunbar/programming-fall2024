//document.addEventListener("DOMContentLoaded", () => {
//    const pairs = [
//        { word: "Carbon monoxide", match: "C0" },
//        { word: "Sodium oxide", match: "Na<sub>2</sub>O" },
//        { word: "Magnesium nitrate", match: "Mg(NO<sub>3</sub>)<sub>2" },
//        { word: "Zinc hydroxide", match: "Zn(OH)<sub>2" },
//        { word: "Copper (II) fluoride", match: "CuF<sub>2" },
//        { word: "Manganese (IV) bromide", match: "MnBr<sub>4" },
//        { word: "Calcium oxide", match: "CaO" },
//        { word: "Strontium phosphate", match: "Sr<sub>3</sub>(PO<sub>4</sub>)<sub>2" },
//        { word: "Iron (III) sulfate", match: "Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3" },
//        { word: "Silver chlorite", match: "AgClO<sub>2" },
//        { word: "Ammonium sulfide", match: "(NH<sub>4</sub>)<sub>2</sub>S" },
//        { word: "Potassium iodate", match: "KIO<sub>3" },
//        { word: "Barium oxalate", match: "BaC<sub>2</sub>O" },
//        { word: "Lithium acetate", match: "LiC<sub>2</sub>H<sub>3</sub>O<sub>2" },
//        { word: "Lead (II) carbonate", match: "PbCO<sub>3" },
//        { word: "Tin (IV) nitride", match: "Sn<sub>3</sub>N<sub>4" },
//        { word: "Sodium bicarbonate", match: "NaHCO<sub>3" },
//        { word: "Carbon dioxide", match: "CO<sub>2" },
//        { word: "Carbon tetrachloride", match: "CCl<sub>4" },
//        { word: "Phosphorus pentafluoride", match: "PF<sub>5" },
//        { word: "Dinitrogen tetroxide", match: "N<sub>2</sub>0<sub>4" },
//        { word: "Dichlorine heptoxide", match: "Cl<sub>2</sub>O<sub>7" },
//        { word: "Diphosphorus monoxide", match: "P<sub>2</sub>O" },
//        { word: "Disulfur dichloride", match: "S<sub>2</sub>Cl<sub>2" },
//        { word: "Silicon tetrafluoride", match: "SiF<sub>4<" },
//        { word: "Boron trichloride", match: "BCl<sub>3" },
//        { word: "Phosphorus tribromide ", match: "PBr<sub>3" },
//        { word: "Pentacarbon decahydride", match: "C<sub>5</sub>H<sub>10" },
//        { word: "Sulfur hexafluoride", match: "SF<sub>6" },
//        { word: "Xenon octa chloride", match: "XeCl<sub>8" },
//        { word: "Octacarbon hexahydride", match: "C<sub>8</sub>H<sub>6" }
//    ];
//
//    let cards = document.getElementsByClassName("blink");
//
//    // Fisher-Yates (or Knuth) Shuffle algorithm
//    function shuffleArray(array) {
//        for (let i = array.length - 1; i > 0; i--) {
//            // Generate a random index from 0 to i
//            const j = Math.floor(Math.random() * (i + 1));
//            // Swap elements at indices i and j
//            [array[i], array[j]] = [array[j], array[i]];
//        }
//        return array;
//    }
//    function shuffleAssign() {
//        let shuffledPairs = shuffleArray(pairs);
//        console.log(shuffledPairs);
//        // shuffle list of pairs
//
//        // create a new array for selcted pairs this round
//
//        let cardPairs = [];
//
//        // add the first card.lenghth/2 pairs(word and match) to a new array
//
//        for (let i = 0; i < cards.length / 2; i++) {
//            cardPairs.push(shuffledPairs[i].word);
//            cardPairs.push(shuffledPairs[i].match);
//        }
//
//        // shuffle that array
//        cardPairs = shuffleArray(cardPairs);
//        console.log(cardPairs);
//        // iterate over that array to assign cards
//        for (let i = 0; i < cardPairs.length; i++) {
//            cards[i].innerHTML = cardPairs[i];
//        }
//    }
//
//    shuffleAssign();
//});
//
////1. different scenrios, one outcome
//// 2.

document.addEventListener("DOMContentLoaded", () => {
    const pairs = [
        { word: "Sodium oxide", match: "<p>Na<sub>2</sub>O</p>" },
        { word: "Sodium chloride", match: "NaCl" },
        { word: "Magnesium nitrate", match: "<p>Mg(NO<sub>3</sub>)<sub>2</sub></p>" },
        { word: "Zinc hydroxide", match: "<p>Zn(OH)<sub>2</sub></p>" },
        { word: "Copper (II) fluoride", match: "<p>CuF<sub>2</sub></p>" },
        { word: "Manganese (IV) bromide", match: "<p>MnBr<sub>4</sub></p>" },
        { word: "Calcium oxide", match: "CaO" },
        { word: "Strontium phosphate", match: "<p>Sr<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub></p>" },
        { word: "Iron (III) sulfate", match: "<p>Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub></p>" },
        { word: "Silver chlorite", match: "<p>AgClO<sub>2</sub></p>" },
        { word: "Ammonium sulfide", match: "<p>(NH<sub>4</sub>)<sub>2</sub>S</p>" },
        { word: "Potassium iodate", match: "<p>KIO<sub>3</sub></p>" },
        { word: "Barium oxalate", match: "<p>BaC<sub>2</sub>O<sub>4</sub></p>" },
        { word: "Lithium acetate", match: "<p>LiC<sub>2</sub>H<sub>3</sub>O<sub>2</sub></p>" },
        { word: "Lead (II) carbonate", match: "<p>PbCO<sub>3</sub></p>" },
        { word: "Tin (IV) nitride", match: "<p>Sn<sub>3</sub>N<sub>4</sub></p>" },
        { word: "Sodium bicarbonate", match: "<p>NaHCO<sub>3</sub></p>" },
        { word: "Carbon dioxide", match: "<p>CO<sub>2</sub></p>" },
        { word: "Carbon tetrachloride", match: "<p>CCl<sub>4</sub></p>" },
        { word: "Phosphorus pentafluoride", match: "<p>PF<sub>5</sub></p>" },
        { word: "Dinitrogen tetroxide", match: "<p>N<sub>2</sub>O<sub>4</sub></p>" },
        { word: "Dichlorine heptoxide", match: "<p>Cl<sub>2</sub>O<sub>7</sub></p>" },
        { word: "Diphosphorus monoxide", match: "<p>P<sub>2</sub>O</p>" },
        { word: "Disulfur dichloride", match: "<p>S<sub>2</sub>Cl<sub>2</sub></p>" },
        { word: "Sodium oxide", match: "<p>Na<sub>2</sub>O</p>" },
        { word: "Silicon tetrafluoride", match: "<p>SiF<sub>4</sub></p>" },
        { word: "Boron trichloride", match: "<p>BCl<sub>3</sub></p>" },
        { word: "Phosphorus tribromide", match: "<p>PBr<sub>3</sub></p>" },
        { word: "Pentacarbon decahydride", match: "<p>C<sub>5</sub>H<sub>10</sub></p>" },
        { word: "Sulfur hexafluoride", match: "<p>SF<sub>6</sub></p>" },
        { word: "Xenon octachloride", match: "<p>XeCl<sub>8</sub></p>" },
        { word: "Octacarbon hexahydride", match: "<p>C<sub>8</sub>H<sub>6</sub></p>" },
        { word: "Carbon monoxide", match: "CO" }
    ];
    let cards = document.getElementsByClassName("blink");
    let round = 0;
    console.log(cards);
    // Fisher-Yates (or Knuth) Shuffle algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            // Generate a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));
            // Swap elements at indices i and j
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    function shuffleAssign() {
        // shuffle liste of pairs
        let shuffledPairs = shuffleArray(pairs);
        console.log(shuffledPairs);

        //crate a new array gor
        // selected pairs this round
        let cardPairs = [];
        // add the first cards .length/2 pairs
        // (word and match ) to new array
        for (let i = 0; i < cards.length / 2; i++) {
            cardPairs.push(shuffledPairs[i].word);
            cardPairs.push(shuffledPairs[i].match);
        }
        //shuffledPairs = shuffledPairs.splice(0, cards.length / 2);
        //console.log(cardPairs);

        // shuffle that array
        // iterate over that array to assign card
        cardPairs = shuffleArray(cardPairs);
        for (let i = 0; i < cardPairs.length; i++) {
            cards[i].innerHTML = cardPairs[i];
            cards[i].onclick = isClicked;
        }

        function isClicked(e) {
            let cardClicked = e.srcElement;
            //console.log(cardClicked.tagName);
            if (cardClicked.tagName == "P") {
                alert("Please don't click the text");
                return;
                // clicking the text makes the cards not match, because the code is set up where if the user selects the box it will work.
            }
            cardClicked.classList.add("clicked");
            let clicked = document.getElementsByClassName("clicked");
            if (clicked.length == 2) {
                if (isMatch(clicked[0].innerHTML, clicked[1].innerHTML)) {
                    clicked[0].classList.add("correct");
                    clicked[1].classList.add("correct");
                    clicked[0].disabled = "true";
                    clicked[1].disabled = "true";
                    // if the card you choose is correct then it will green, but then the user is not allowed to selecetd those cards again.
                    clicked[0].classList.remove("clicked");
                    clicked[0].classList.remove("clicked");

                    let selected = document.getElementsByClassName("correct");
                    if (selected.length == 32 && round == 0) {
                        round = 1;
                        alert("You've completed round 1");
                        for (let i = 0; i < cardPairs.length; i++) {
                            for (let j = 0; j < pairs.length; j++) {
                                if (cardPairs[i] == pairs[j].word) {
                                    console.log(cardPairs[i]);
                                    console.log(pairs[j].word);
                                    pairs.splice(j, 1);
                                    // will reset to tyhe rest of the cards that you havent matched yet and removed all the cards that were just matched.
                                }
                            }
                        }
                        for (let i = 0; i < cards.length; i++) {
                            cards[i].disabled = false;
                            cards[i].classList.remove("correct");
                        }
                        shuffleAssign();
                    }

                    if (selected.length == 32 && round == 1) {
                        // whatever you want to do when they win the whole game
                        window.location.href = "./Restart.html";
                        // links to other page after completed the matching game to a restart page if the user wants to play again.
                    }
                } else {
                    clicked[0].classList.remove("clicked");
                    clicked[0].classList.remove("clicked");
                }
            }
        }
        function isMatch(item1, item2) {
            for (let i = 0; i < Object.keys(pairs).length; i++) {
                console.log(pairs[i]);
                if (item1 == pairs[i].word && item2 == pairs[i].match) {
                    //console.log("here1");
                    return true;
                }
                if (item2 == pairs[i].word && item1 == pairs[i].match) {
                    //console.log("here2");
                    return true;
                }
            }
            return false;
        }
    }
    shuffleAssign();
});
