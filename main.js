//For plotting, I used a Function Plot library

//This is the parameters to use will calling functionPlot
var parameters = {
  target: "#myFunction",
  data: [
    {
      color: "red",
    },
  ],
  grid: true,
  yAxis: { domain: [-1, 1] ,label: "y-axis"},
  xAxis: { domain: [0, 2 * Math.PI] , label: "x-axis" },
};


//Function that does the plotting  
function plot(fValue,xMin,xMax) {
  var f = fValue;
  var xMin = xMin;
  var xMax = xMax;
  
  //Setting the function and x domain
  parameters.data[0].fn = f;
  parameters.xAxis.domain = [xMin, xMax];
  

  functionPlot(parameters);
}

//In here I check the validation of every input then call the plot function to plot the function
document.querySelector("form").addEventListener('submit',(event)=>{
  event.preventDefault();
  

  const xMin = document.querySelector("#xMin");
  const xMax = document.querySelector("#xMax");
  
  if(parseFloat(xMax.value)<=parseFloat(xMin.value)){
    setToastMessage("xMax should be bigger than xMin ....");
    showHideElement(".toast", "visible");
    showHideElement("#plot", "hidden");
    return;
  }

  const fValue = replaceSecCosecCot(document
    .querySelector("#function")
    .value.toLowerCase().replaceAll(' ',''));

  try {
    showHideElement(".toast", "hidden");
    showHideElement("#plot", "visible");
    plot(fValue,xMin.value,xMax.value);
  } catch (error) {
    setToastMessage(
      "Please use just x, numbers and any of this operators ^*/-+ and you can use all the trigonometric functions in this shape trFunction(...)\
      and log(...), sqrt(...) ....."
    );
    showHideElement(".toast", "visible");
    showHideElement("#plot", "hidden");
  }
  
});

//This Function replaces cosec, sec and tan if the user entered it.
function replaceSecCosecCot(fValue){
  fValue = fValue.replaceAll(/cosec/g, "1/cos");
  fValue=fValue.replaceAll(/sec/g,'1/sin');
  fValue = fValue.replaceAll(/cot/g, "1/tan");
  
  return fValue;
}

//Function to hide and show an element
function showHideElement(element,mode,message=""){
  document.querySelector(element).style.visibility= mode;
}

//Function for setting the error message
function setToastMessage(message){
  document.querySelector(".toast-body").textContent=message;
}

document.querySelector('.close').addEventListener('click',(event)=>{
document.querySelector(".toast").style.visibility = "hidden";
});


