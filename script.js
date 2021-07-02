/* .js files add interaction to your website */

//Changing text 

var factList = [
 "L: Lesbian",
 "G: Gay",
 "B: Bisexual",
 "T: Transgender",
 "Q: Queer/Questioning",
 "I: Intersex",
 "A: Asexual/Aromantic",
 "2S: Two-spirit",
 "+: Other Identities",
 "Bringing Awareness, Acceptance is a Given" ]

var fact = document.getElementById("fact");
var count = 0;

fact.addEventListener("mouseover", displayFact);


function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}


//if i want to use button [var myButton = document.getElementById("myButton");]


// empowering figures

//FIX THIS!!!!!

var factListFigures = [
 "James Baldwin: A writer and activist from Harlem, New York born in 1924. He wrote in the fight for racial equality and other social equalities. Most notably, Baldwin wrote one of the first novels involving the topic of homosexuality, titled 'Giovanni's Room'. He continued to write inspiring stories regardless of the looming controversy they presented.",
 "Alan Turing: (TW: mentions of sucide) A mathmatician most known for cracking one of the most difficult war codes ever written: Germany's Enigma Code in 1941 during World War Two. This information was not released unitl the 1970's, and yet no one fully knew of Turing's accomplishments until the 1990's, almost 40 years after his death in 1954. Turing was condemned by the government for his open homosexuality and was arrested, he later died of suicide.",
 "Marsha P. Johnson: An influential 'American gay liberation activist' who identified as a drag queen. Johnson was also one of the leading figures for the Stonewall Uprising in 1969. This rebellion was a series of demonstrations as a response to a police riad of the Stonewall Inn, a center for the LGBTQ+ community at the time.",
 "Sylvia Rivera: A transgender rights activist who was also deeply devoted to the LGBTQ+ community and contributed to the Stonewall Uprising alongside Marsha P. Johnson. Rivera identified as a drag queen and was a strong advocate with the Gay Liberation Front.",
]

var figure = document.getElementById("figuretext");
var myButtonB = document.getElementById("myButtonB");
var count = 0;

myButtonB.addEventListener("click", displayFigure);

function displayFigure(){
  figure.innerHTML = factListFigures[count];
  count++;
  if (count == factListFigures.length){
    count = 0;
  }
}




/*
KEY FEATURE: Personalize it
https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
*/

var displayScript = document.getElementById("response");
var messageebutton = document.getElementById("messageebutton");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (messageebutton) {
  messageebutton.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("myText").value;
  var pronoun = document.getElementById("myTexta").value;
  var sentmessage = document.getElementById("myTextb").value;

  displayScript.innerHTML = "Hello, " + name + pronoun + "! Thank you for your sumbission! Expect a reply from us soon!";
}

/* add these later:  "Jackie Shane:",
 "Leslie Cheung:",
 "Audre Lorde:",
 "Bille Jean King:",
 "Claude Cahun:" */
