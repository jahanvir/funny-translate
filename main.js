var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");
var errorDiv=document.querySelector("#errorMessage");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text){
  return serverUrl+"?"+"text="+text;
}

function errorHandler(error){
  errorDiv.innerText ="We are sorry. There is some error, please Try again later";
}

btnTranslate.addEventListener("click",()=>{
  errorDiv.innerText="";
  outputdiv.innerText="";
  clickEventHandler();
})

function clickEventHandler(){
  var inputText=txtInput.value;
  if(inputText === ""){
    errorDiv.innerText = "Please Enter some text";
  }
  else{
    fetch(getTranslationUrl(inputText))
      .then(response => response.json())
      .then(json => outputdiv.innerText=json.contents.translated)
      .catch(errorHandler);
  }
}