var formElement=null;
var numeroSecreto=null;
var respuestaSelect=null;
var respuestasCheckbox = [];
var respuestasRadio=[];

//LEER XML de xml/preguntas.xml
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   gestionarXml(this);
  }
 };
 xhttp.open("GET", "xml/preguntas.xml", true);
 xhttp.send();


//Gestionar html y xml
function gestionarXml(dadesXml){
 var xmlDoc = dadesXml.responseXML;
// INPUT NUMBER pregunta 5
 //Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
 var tituloInput=xmlDoc.getElementsByTagName("title")[5].innerHTML;
 ponerDatosInputHtml(tituloInput);
 numeroSecreto=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);

//INPUT NUMBER pregunta 6
 var tituloInput=xmlDoc.getElementsByTagName("title")[4].innerHTML;
 ponerDatosInputHtml1(tituloInput);
 numeroSecreto=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);

 //Radio pregunta 1
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var tituloRadio = xmlDoc.getElementsByTagName("title")[0].innerHTML;
 var opcionesRadio = [];
 var nopt = xmlDoc.getElementById("jdos_001").getElementsByTagName('options').length;
 for (i = 0; i < nopt; i++) { 
    opcionesRadio[i]=xmlDoc.getElementById("jdos_001").getElementsByTagName('options')[i].innerHTML;
 }  
 ponerDatosRadio(tituloRadio,opcionesRadio);
 var nres = xmlDoc.getElementById("jdos_001").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasRadio[i]=xmlDoc.getElementById("jdos_001").getElementsByTagName("answer")[i].innerHTML;
 }
 //Radio2 pregunta 2
  var tituloRadio = xmlDoc.getElementsByTagName("title")[1].innerHTML;
 var opcionesRadio = [];
 var nopt = xmlDoc.getElementById("jdos_002").getElementsByTagName('options').length;
 for (i = 0; i < nopt; i++) { 
    opcionesRadio[i]=xmlDoc.getElementById("jdos_002").getElementsByTagName('options')[i].innerHTML;
 }  
 ponerDatosRadio1(tituloRadio,opcionesRadio);
 var nres = xmlDoc.getElementById("jdos_002").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasRadio[i]=xmlDoc.getElementById("jdos_002").getElementsByTagName("answer")[i].innerHTML;
 }
//SELECT pregunta 7
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var tituloSelect=xmlDoc.getElementsByTagName("title")[6].innerHTML;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("jdos_007").getElementsByTagName('options').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("jdos_007").getElementsByTagName('options')[i].innerHTML;
 }
 ponerDatosSelectHtml(tituloSelect,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].innerHTML);
 //SELECT2 pregunta 8
 var tituloSelect=xmlDoc.getElementsByTagName("title")[7].innerHTML;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("jdos_008").getElementsByTagName('options').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("jdos_008").getElementsByTagName('options')[i].innerHTML;
 }
 ponerDatosSelectHtml1(tituloSelect,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].innerHTML);
//CHECKBOX
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var tituloCheckbox = xmlDoc.getElementsByTagName("title")[2].innerHTML;
 var opcionesCheckbox = [];
 var nopt = xmlDoc.getElementById("jdos_003").getElementsByTagName('options').length;
 for (i = 0; i < nopt; i++) { 
    opcionesCheckbox[i]=xmlDoc.getElementById("jdos_003").getElementsByTagName('options')[i].innerHTML;
 }  
 ponerDatosCheckboxHtml(tituloCheckbox,opcionesCheckbox);
 var nres = xmlDoc.getElementById("jdos_003").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox[i]=xmlDoc.getElementById("jdos_003").getElementsByTagName("answer")[i].innerHTML;
 }
//CHECKBOX2 pregunta 4
//CHECKBOX
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var tituloCheckbox = xmlDoc.getElementsByTagName("title")[3].innerHTML;
 var opcionesCheckbox = [];
 var nopt = xmlDoc.getElementById("jdos_004").getElementsByTagName('options').length;
 for (i = 0; i < nopt; i++) { 
    opcionesCheckbox[i]=xmlDoc.getElementById("jdos_004").getElementsByTagName('options')[i].innerHTML;
 }  
 ponerDatosCheckboxHtml1(tituloCheckbox,opcionesCheckbox);
 var nres = xmlDoc.getElementById("jdos_004").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox[i]=xmlDoc.getElementById("jdos_004").getElementsByTagName("answer")[i].innerHTML;
 }

}
//Pregunta 1
function ponerDatosRadio(t,opt){
 var radioContainer=document.getElementById('radioDiv');
 document.getElementById('tituloRadio').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="radio";
    input.name="color";
    input.id="color_"+i;;    
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
    radioContainer.appendChild(document.createElement("br"));
 }  
}
//Pregunta 2
function ponerDatosRadio1(t,opt){
 var radioContainer=document.getElementById('radioDiv1');
 document.getElementById('tituloRadio1').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="radio";
    input.name="color";
    input.id="color_"+i;;    
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
    radioContainer.appendChild(document.createElement("br"));
 }  
}

//Pregunta 3
function ponerDatosCheckboxHtml(t,opt){
 var checkboxContainer=document.getElementById('checkboxDiv');
 document.getElementById('tituloCheckbox').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);

    label.class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect";


    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
 }  
}
//Pregunta 4
function ponerDatosCheckboxHtml1(t,opt){
 var checkboxContainer=document.getElementById('checkboxDiv1');
 document.getElementById('tituloCheckbox1').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);

    label.class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect";
    input.type="checkbox";
    input.name="color";
    input.class="mdl-checkbox__input";

    input.type="checkbox";
    input.name="color";

    input.id="color_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
 }  
}
//Pregunta 5
function ponerDatosInputHtml(t){
 document.getElementById("tituloInput").innerHTML = t;
}
//Pregunta 6
function ponerDatosInputHtml1(t){
 document.getElementById("tituloInput1").innerHTML = t;
}
//pregunta 7
function ponerDatosSelectHtml(t,opt){
  document.getElementById("tituloSelect").innerHTML=t;
  var select = document.getElementsByTagName("select")[0];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}
//pregunta 8
function ponerDatosSelectHtml1(t,opt){
  document.getElementById("tituloSelect1").innerHTML=t;
  var select = document.getElementsByTagName("select")[1];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}
