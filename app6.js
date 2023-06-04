let gender=document.querySelectorAll(".gender-style");

let range=document.querySelector("input");
let rangeValue=document.querySelector(".rangeValue");


let changeValue=document.querySelectorAll(".lower-button");
let increment=document.querySelectorAll(".increment");


let bmiValue=document.querySelector("#bmiValue");





let mainContainer=document.querySelector(".main-container");
let container=document.querySelector(".container");


// Bmi Calculation 

var weight = weight1();
console.log(weight);
var height=range1();
console.log(weight);

bmiTotalValue =parseFloat(weight/(height * height)).toFixed(4);




// Male Gender script 

gender[0].addEventListener("click",function(){
    
        gender[0].style.background="#c7d1d19f";
        gender[1].style.background="#b9a8b93e";
})


// Female Gender script 

gender[1].addEventListener("click",function(){
    gender[1].style.background="#c7d1d19f";
    gender[0].style.background="#b9a8b93e";
})

// weight plus button 


changeValue[0].addEventListener("click",weight1)

function weight1(){
  console.log(increment[0].innerText=parseInt(increment[0].innerText) + 1)  ;
    return parseInt(increment[0].innerText);
}


// weight minus button 


changeValue[1].addEventListener("click",function(){
    
   increment[0].innerText=  parseInt(increment[0].innerText)-1;

})

// Age plus button 


changeValue[2].addEventListener("click",function(){
   increment[1].innerText  = parseInt(increment[1].innerText)+1;

})

// Age Minus Button 


changeValue[3].addEventListener("click",function(){
   increment[1].innerText =  parseInt(increment[1].innerText)-1;

})

// Range Track 


range.addEventListener("change",range1);

function range1(){
    rangeValue.innerText= range.value +" Cm";
    return parseInt(rangeValue.innerText);
}



// Bmi Value button 


bmiValue.addEventListener("click",function(){
         container.remove();
        let newDiv=document.createElement("div");
        newDiv.classList.add("container2");
        newDiv.innerHTML="<h3>Your BMI value is</h3>"
        mainContainer.appendChild(newDiv);
        let calculatedValue=document.createElement("h2");
        calculatedValue.innerText=bmiTotalValue;
        newDiv.appendChild(calculatedValue);
       

})
