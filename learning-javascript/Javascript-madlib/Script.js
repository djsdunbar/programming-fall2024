function generate() {
    const a1 = document.getElementById("a1input").value;
    const n1 = document.getElementById("n1input").value;

    document.getElementById("a1").innerText = a1;
    document.getElementById("n1").innerText = n1;
    
    const v1 = document.getElementById("v1input").value;
    const adverb1 = document.getElementById("adverb1input").value;

    document.getElementById("v1").innerText = v1;
    document.getElementById("adverb1").innerText = adverb1;
    
    const name1 = document.getElementById("name1input").value;
    const place1 = document.getElementById("place1input").value;

    document.getElementById("name1").innerText = name1;
    document.getElementById("place1").innerText = place1;
    
    const s1 = document.getElementById("s1input").value;
    const v2 = document.getElementById("v2input").value;

    document.getElementById("s1").innerText = s1;
    document.getElementById("v2").innerText = v2;

    const e1 = document.getElementById("e1input").value;
    const n2 = document.getElementById("n2input").value;

    document.getElementById("e1").innerText = e1;
    document.getElementById("n2").innerText = n2;
    
    const a2 = document.getElementById("a2input").value;
    const p2 = document.getElementById("p2input").value;

    document.getElementById("a2").innerText = a2;
    document.getElementById("p2").innerText = p2;
    
    document.getElementById("madlib").style.display="block";
     document.getElementById("madlib2").style.display="block";
     document.getElementById("madlib3").style.display="block";
     document.getElementById("madlib4").style.display="block";
     document.getElementById("madlib5").style.display="block";
     document.getElementById("madlib6").style.display="block";
    
    document.getElementById("whole").style.backgroundColor= "lightpink";
}
