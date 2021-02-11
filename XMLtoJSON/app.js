// declaration
let input = document.querySelector("#input");
let output = document.querySelector("#output");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");

//function initialization
function checkEmpty1(){
    if(input.value == ""){
        input.style.border = "1px solid red";
        alert("Paste your XML in text area");
    }
    else
    input.style.border = "1px solid black";
}

function checkEmpty2(){
    if(output.value == ""){
        output.style.border = "1px solid red";
        alert("Paste your JSON in text area");
    }
    else
    input.style.border = "1px solid black";
}

//for XML to JSON
function generateJSON(){
    checkEmpty1();
    var value = input.value;
    var x2js = new X2JS();
    //this line important
    output.value = JSON.stringify(x2js.xml_str2json(input.value));
}

//for JSON to XML
function generateXML(){
    checkEmpty2();
    var value = output.value;
    var x2js = new X2JS();
    //this line important
    input.value = x2js.json2xml_str(JSON.parse(output.value));
}

//action listeners
button1.addEventListener("click", generateJSON);
button2.addEventListener("click", generateXML);
