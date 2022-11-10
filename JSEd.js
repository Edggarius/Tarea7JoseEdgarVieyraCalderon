function loadDocGame() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      TableGame(this);
    }
    xhttp.open("GET", "AnimeW.xml");
    xhttp.send();
  }
  function TableGame(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("id");
    let table="<tr><th>Nombre</th><th>Año de publicación</th><th>Genero</th><th>Capitulos";
    for (let i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("año")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("genero")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("caps")[0].childNodes[0].nodeValue +
      
    
      "</td>";
    }
    document.getElementById("demo").innerHTML = table;
  }
  
  function loadDocCard() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      TableCard(this);
    }
    xhttp.open("GET", "top3PlatillosInt.xml");
    xhttp.send();
  }
  function TableCard(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("id");
    let table="<tr><th>Estado</th><th>Platillo</th><th>Rango</th><th>Popularidad<th>País";
    for (let i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("estado-provincia")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("nombrePlatillo")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("popularidad")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("rango")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("pais")[0].childNodes[0].nodeValue +
      
      "</td>";
    }
    document.getElementById("demo").innerHTML = table;
    xhttp.close();
  }
  
  