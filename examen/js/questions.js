function gestionarXml(a){var b=a.responseXML,c=b.getElementsByTagName("title")[5].innerHTML;ponerDatosInputHtml(c),numeroSecreto2=parseInt(b.getElementsByTagName("answer")[0].innerHTML);var d=b.getElementsByTagName("title")[4].innerHTML;ponerDatosInputHtml1(d),numeroSecreto1=parseInt(b.getElementsByTagName("answer")[0].innerHTML);var e=b.getElementsByTagName("title")[0].innerHTML,f=[],g=b.getElementById("jdos_001").getElementsByTagName("options").length;for(i=0;i<g;i++)f[i]=b.getElementById("jdos_001").getElementsByTagName("options")[i].innerHTML;ponerDatosRadio(e,f);var h=b.getElementById("jdos_001").getElementsByTagName("answer").length;for(i=0;i<h;i++)respuestasRadio1=b.getElementById("jdos_001").getElementsByTagName("answer")[0].innerHTML;var j=b.getElementsByTagName("title")[1].innerHTML,k=[],g=b.getElementById("jdos_002").getElementsByTagName("options").length;for(i=0;i<g;i++)k[i]=b.getElementById("jdos_002").getElementsByTagName("options")[i].innerHTML;ponerDatosRadio1(j,k);var l=b.getElementById("jdos_002").getElementsByTagName("answer").length;for(i=0;i<l;i++)respuestasRadio2=b.getElementById("jdos_002").getElementsByTagName("answer")[0].innerHTML;var m=b.getElementsByTagName("title")[6].innerHTML,n=[],g=b.getElementById("jdos_007").getElementsByTagName("options").length;for(i=0;i<g;i++)n[i]=b.getElementById("jdos_007").getElementsByTagName("options")[i].innerHTML;ponerDatosSelectHtml(m,n),respuestaSelect1=parseInt(b.getElementsByTagName("answer")[7].innerHTML);var m=b.getElementsByTagName("title")[7].innerHTML,o=[],g=b.getElementById("jdos_008").getElementsByTagName("options").length;for(i=0;i<g;i++)o[i]=b.getElementById("jdos_008").getElementsByTagName("options")[i].innerHTML;ponerDatosSelectHtml1(m,o),respuestaSelect2=parseInt(b.getElementsByTagName("answer")[8].innerHTML);var m=b.getElementsByTagName("title")[8].innerHTML,n=[],g=b.getElementById("jdos_009").getElementsByTagName("options").length;for(i=0;i<g;i++)n[i]=b.getElementById("jdos_009").getElementsByTagName("options")[i].innerHTML;ponerDatosSelectMultipleHtml(m,n);var h=b.getElementById("jdos_009").getElementsByTagName("options").length;for(i=0;i<h;i++)respuestasMultiple1=parseInt(b.getElementsByTagName("answer")[i].innerHTML);var m=b.getElementsByTagName("title")[9].innerHTML,n=[],g=b.getElementById("jdos_010").getElementsByTagName("options").length;for(i=0;i<g;i++)n[i]=b.getElementById("jdos_010").getElementsByTagName("options")[i].innerHTML;ponerDatosSelectMultipleHtml1(m,n);var l=b.getElementById("jdos_010").getElementsByTagName("options").length;for(i=0;i<l;i++)respuestasMultiple2=parseInt(b.getElementsByTagName("answer")[i].innerHTML);var p=b.getElementsByTagName("title")[2].innerHTML,q=[],g=b.getElementById("jdos_003").getElementsByTagName("options").length;for(i=0;i<g;i++)q[i]=b.getElementById("jdos_003").getElementsByTagName("options")[i].innerHTML;ponerDatosCheckboxHtml(p,q);var h=b.getElementById("jdos_003").getElementsByTagName("answer").length;for(i=0;i<h;i++)respuestasCheckbox1[i]=b.getElementById("jdos_003").getElementsByTagName("answer")[i].innerHTML;var r=b.getElementsByTagName("title")[3].innerHTML,s=[],g=b.getElementById("jdos_004").getElementsByTagName("options").length;for(i=0;i<g;i++)s[i]=b.getElementById("jdos_004").getElementsByTagName("options")[i].innerHTML;ponerDatosCheckboxHtml1(r,s);var h=b.getElementById("jdos_004").getElementsByTagName("answer").length;for(i=0;i<h;i++)respuestasCheckbox2[i]=b.getElementById("jdos_004").getElementsByTagName("answer")[i].innerHTML}function ponerDatosRadio(a,b){var c=document.getElementById("radioDiv");for(document.getElementById("tituloRadio").innerHTML=a,i=0;i<b.length;i++){var d=document.createElement("input"),e=document.createElement("label");e.innerHTML=b[i],e.setAttribute("for","color_"+i),d.type="radio",d.name="color",d.id="color_"+i,c.appendChild(d),c.appendChild(e),c.appendChild(document.createElement("br"))}}function ponerDatosRadio1(a,b){var c=document.getElementById("radioDiv1");for(document.getElementById("tituloRadio1").innerHTML=a,i=0;i<b.length;i++){var d=document.createElement("input"),e=document.createElement("label");e.innerHTML=b[i],e.setAttribute("for","color1_"+i),d.type="radio",d.name="color1",d.id="color1_"+i,c.appendChild(d),c.appendChild(e),c.appendChild(document.createElement("br"))}}function ponerDatosCheckboxHtml(a,b){var c=document.getElementById("checkboxDiv");for(document.getElementById("tituloCheckbox").innerHTML=a,i=0;i<b.length;i++){var d=document.createElement("input"),e=document.createElement("label");e.innerHTML=b[i],e.setAttribute("for","color_"+i),d.type="checkbox",d.name="coler",d.id="coler_"+i,c.appendChild(d),c.appendChild(e),c.appendChild(document.createElement("br"))}}function ponerDatosCheckboxHtml1(a,b){var c=document.getElementById("checkboxDiv1");for(document.getElementById("tituloCheckbox1").innerHTML=a,i=0;i<b.length;i++){var d=document.createElement("input"),e=document.createElement("label");e.innerHTML=b[i],e.setAttribute("for","coler1_"+i),d.type="checkbox",d.name="coler1",d.id="coler1_"+i,c.appendChild(d),c.appendChild(e),c.appendChild(document.createElement("br"))}}function ponerDatosInputHtml(a){document.getElementById("tituloInput").innerHTML=a}function ponerDatosInputHtml1(a){document.getElementById("tituloInput1").innerHTML=a}function ponerDatosSelectHtml(a,b){document.getElementById("tituloSelect").innerHTML=a;var c=document.getElementsByTagName("select")[0];for(i=0;i<b.length;i++){var d=document.createElement("option");d.text=b[i],d.value=i+1,c.options.add(d)}}function ponerDatosSelectHtml1(a,b){document.getElementById("tituloSelect1").innerHTML=a;var c=document.getElementsByTagName("select")[1];for(i=0;i<b.length;i++){var d=document.createElement("option");d.text=b[i],d.value=i+1,c.options.add(d)}}function ponerDatosSelectMultipleHtml(a,b){document.getElementById("tituloSelectMultiple").innerHTML=a;var c=document.getElementsByTagName("select")[2];for(i=0;i<b.length;i++){var d=document.createElement("option");d.text=b[i],d.value=i+1,c.options.add(d)}}function ponerDatosSelectMultipleHtml1(a,b){document.getElementById("tituloSelectMultiple1").innerHTML=a;var c=document.getElementsByTagName("select")[3];for(i=0;i<b.length;i++){var d=document.createElement("option");d.text=b[i],d.value=i+1,c.options.add(d)}}function darRespuestaHtmlIncorrecta(a){var b=document.createElement("span"),c=document.createElement("br"),d=document.createTextNode(a);b.appendChild(d),b.appendChild(c),document.getElementById("resultadosDiv").appendChild(b)}function darRespuestaHtml(a){var b=document.createElement("p"),c=document.createTextNode(a);b.appendChild(c),document.getElementById("resultadosDiv").appendChild(b)}function presentarNota(){darRespuestaHtml("Nota: "+nota+" puntos sobre 10")}function inicializar(){document.getElementById("resultadosDiv").innerHTML="",nota=0}function corregirInput(){var a=document.getElementById("num").value;"1995"==a.toLowerCase()?(darRespuestaHtml("Pregunta 5: ¡correcta!"),nota+=1):darRespuestaHtmlIncorrecta(" Pregunta 5: incorrecta")}function corregirInput1(){var a=document.getElementById("num1").value;"1954"==a.toLowerCase()?(darRespuestaHtml("Pregunta 6: ¡correcta!"),nota+=1):darRespuestaHtmlIncorrecta(" Pregunta 6: incorrecta")}function corregirSelect(){var a=document.getElementById("sel").selectedIndex-1;a==respuestaSelect1?(darRespuestaHtml("Pregunta 7 : ¡correcta!"),nota+=1):darRespuestaHtmlIncorrecta("Pregunta 7: incorrecta")}function corregirSelect1(){var a=document.getElementById("sel1").selectedIndex-1;a==respuestaSelect2?(darRespuestaHtml("Pregunta 8: ¡correcta!"),nota+=1):darRespuestaHtmlIncorrecta("Pregunta 8: incorrecta")}function corregirRadio(){var a=0,b=formElement,c=null;for(i=0;i<b.color.length;i++)b.color[i].checked&&(c=!1,i==respuestasRadio1&&(c=!0),c&&(a+=1,nota+=1));1!=a?darRespuestaHtmlIncorrecta("Pregunta 1: incorrecta"):darRespuestaHtml("Pregunta 1: ¡correcta!")}function corregirRadio1(){var a=0,b=formElement,c=null;for(i=0;i<b.color1.length;i++)b.color1[i].checked&&(c=!1,i==respuestasRadio2&&(c=!0),c&&(a+=1,nota+=1));1!=a?darRespuestaHtmlIncorrecta("Pregunta 2: incorrecta"):darRespuestaHtml("Pregunta 2: ¡correcta!")}function corregirCheckbox(){var a=0,b=formElement,c=[];for(i=0;i<b.coler.length;i++)if(b.coler[i].checked){for(c[i]=!1,j=0;j<respuestasCheckbox1.length;j++)i==respuestasCheckbox1[j]&&(c[i]=!0);c[i]?(nota+=1/respuestasCheckbox1.length,a+=1/respuestasCheckbox1.length):nota-=1/respuestasCheckbox1.length}1!=a?darRespuestaHtmlIncorrecta("Pregunta 3: incorrecta"):darRespuestaHtml("Pregunta 3: ¡correcta!")}function corregirCheckbox1(){var a=0,b=formElement,c=[];for(i=0;i<b.coler1.length;i++)if(b.coler1[i].checked){for(c[i]=!1,j=0;j<respuestasCheckbox2.length;j++)i==respuestasCheckbox2[j]&&(c[i]=!0);c[i]?(nota+=1/respuestasCheckbox2.length,a+=1/respuestasCheckbox2.length):nota-=1/respuestasCheckbox2.length}1!=a?darRespuestaHtmlIncorrecta("Pregunta 4: incorrecta"):darRespuestaHtml("Pregunta 4: ¡correcta!")}function corregirMultiple(){for(var b=[],c=document.getElementById("multiple"),d=0,e=0;e<c.options.length;e++)if(c.options[e].selected)for(var f=0;f<respuestasMultiple1.length;f++)c.options[e].value==respuestasMultiple1[f]&&b.push(c.options[e].value);b.length>0&&(d=b.length/respuestasMultiple1.length,nota+=d),1!=d&0!=d?darRespuestaHtml("Pregunta 9: "+d.toFixed(1)+" puntos"):0==d?darRespuestaHtmlIncorrecta("Pregunta 9: incorrecta"):darRespuestaHtml("Pregunta 9: ¡correcta!")}function corregirMultiple1(){for(var b=[],c=document.getElementById("multiple1"),d=0,e=0;e<c.options.length;e++)if(c.options[e].selected)for(var f=0;f<respuestasMultiple1.length;f++)c.options[e].value==respuestasMultiple2[f]&&b.push(c.options[e].value);b.length>0&&(d=b.length/respuestasMultiple2.length,nota+=d),1!=d&0!=d?darRespuestaHtml("Pregunta 10: "+d.toFixed(1)+" puntos"):0==d?darRespuestaHtmlIncorrecta("Pregunta 10: incorrecta"):darRespuestaHtml("Pregunta 10: ¡correcta!")}function ocultarMenu(){document.getElementById("contenedorFormulario").style.display="none",document.getElementById("myform").style.display="block",document.getElementById("resultadosDiv").style.display="block"}function ocultarFormulario(){document.getElementById("myform").style.display="none"}function ocultarBienvenida(){document.getElementById("instrucciones").style.display="none",document.getElementById("contenedorFormulario").style.display="block"}var formElement=null,numeroSecreto1=null,numeroSecreto2=null,respuestaSelect1=null,respuestaSelect2=null,respuestasCheckbox1=[],respuestasCheckbox2=[],respuestasRadio1=null,respuestasRadio2=null,respuestasMultiple1=[],respuestasMultiple2=[],nota=0;window.onload=function(){formElement=document.getElementById("myform"),formElement.onsubmit=function(){return inicializar(),corregirRadio(),corregirRadio1(),corregirCheckbox(),corregirCheckbox1(),corregirInput(),corregirInput1(),corregirSelect(),corregirSelect1(),corregirMultiple(),corregirMultiple1(),presentarNota(),!1};var a=new XMLHttpRequest;a.onreadystatechange=function(){4==this.readyState&&200==this.status&&gestionarXml(this)},a.open("GET","xml/preguntas.xml",!0),a.send(),window.onmousedown=function(a){var b=a.target;if("option"==b.tagName.toLowerCase()&&b.parentNode.hasAttribute("multiple")){a.preventDefault(),b.hasAttribute("selected")?b.removeAttribute("selected"):b.setAttribute("selected","");var c=b.parentNode.cloneNode(!0);b.parentNode.parentNode.replaceChild(c,b.parentNode)}}};