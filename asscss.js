console.log("script loaded..!")
function elementCreation(tg,parentElement){
    var child=document.createElement(tg)

    parentElement.append(child)

    return child;
}
var mArr=[
  "What is the Box model in CSS? Which CSS properties are a part of it?",
  "What are the advantages of using CSS?"," What are the limitations of CSS?",
  
  "How to include CSS in the webpage?",
  " What are the different types of Selectors in CSS?",
  "What is VH/VW (viewport height/ viewport width) in CSS?",
  "Difference between reset vs normalize CSS?. How do they differ?",
  "What is the difference between inline, inline-block, and block?",
  "How do you test the webpage in different browsers?",
  "What is a Pseudo element? What is pseudo-class?",
  "How do you specify units in the CSS?. What are the different ways to do it?",
  "Does margin-top or margin-bottom have an effect on inline elements?","Explain CSS position property?",
  "What does DOM reflow occur?","Different Box Sizing Property?","How to center align a div inside another div?",
  "Can you name the four types of @media properties?","What is the grid system?",
  "What are the different ways to hide the element using CSS?","What does the :root pseudo-class refer to?",
  "What does Accessibility (a11y) mean?","How do I restore the default value of a property?",
  "Difference between CSS grid vs flexbox?","How does Calc work?","What do CSS Custom properties variables mean?",
  "What is the difference between CSS variables and preprocessor(SASS, LESS, Stylus) variables?",
  "What does * { box-sizing: border-box; } do? What are its advantages?","What does important mean in CSS?",
  " What is specificity? How to calculate specificity?",
  " What is progressive rendering? How do you implement progressive rendering in the website?. What are the advantages of it?",
  
  "What are the advantages of using translate() instead of absolute position?"
  
]

var Body=document.getElementById("bd")

for(var i=0 ; i<mArr.length ;i++){

    var para=elementCreation("p",Body)

    para.className="para"
    para.innerHTML= "Q"+(i+1)+" . "+mArr[i]

}

console.log(Body)