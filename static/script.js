function getAge()
{
    let bornYear = prompt("What year were you born in?")
    const d = new Date();
    let currYear = d.getFullYear();
    ageInDays = (currYear - bornYear) * 365;

    let resultElement = document.getElementById("age");
    resultElement.innerHTML="You are "+ ageInDays +" days old"
}

function reset(){
    let resultElement = document.getElementById("age");
    resultElement.innerHTML="You are _____ days old"
}

x=200
y=200

function addCat(){
    let catsElement = document.getElementById("cats");
    let catImg = document.createElement("img");
    catImg.src="https://placekitten.com/"+x+"/"+y;
    y+=1;
    catImg.height=200;
    catImg.width=200;
    catImg.style.boxShadow = "0px 10px 50px rgba(0,0,0,0.7)";
    catImg.style.margin = "6px 0"
    catsElement.append(catImg);
}

