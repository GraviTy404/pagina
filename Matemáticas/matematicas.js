//Declaracion de las variables de los dos numeros y el resultado
var x, y, resultado;
//Esto se hace fuera de las funciones para que sean globales y así ahorrar espacio

function Sumar()
{
    //Aqui se otorga el valor que el usuario quiera en ambas variables
    x = document.getElementById("N1").value;
    y = document.getElementById("N2").value;
    if ( x == 0 || y == 0 ) 
    /*Sí alguna de las variables es equivalente a 0 se envia una alerta al usuaro
    para hcerle ver el fallo*/
    {  
        alert ("Son necesarios dos numeros para sumar"); 
    } 
    //Peo si ambos campos estan llenos el resultado sera mostrado
    else 
    {  
        resultado = parseFloat(x)+parseFloat(y);
        document.getElementById("r").textContent = resultado;
    }    
}
function Restar()
{
    x = document.getElementById("N1").value;
    y = document.getElementById("N2").value;
    if ( x == 0 || y == 0 ) 
    {  
        alert ("Son necesarios dos numeros para restar");  
    } 
    else 
    {  
        resultado = parseFloat(x) - parseFloat(y);  
        document.getElementById("r").textContent = resultado;
    }    
}
function Dividir()
{
    x = document.getElementById("N1").value;
    y = document.getElementById("N2").value;
    if ( x == 0 || y == 0 ) 
    {  
        alert ("Son necesarios dos numeros para dividir");  
    } 
    else 
    {  
        resultado = parseFloat(x)/parseFloat(y);  
        document.getElementById("r").textContent = resultado;
    }    
}
function Multiplicar()
{
    x = document.getElementById("N1").value;
    y = document.getElementById("N2").value;
    if ( x == 0 || y == 0 ) 
    {  
        alert ("Son necesarios dos numeros para multiplicar");  
    } 
    else 
    {  
        resultado = parseFloat(x)*parseFloat(y);  
        document.getElementById("r").textContent = resultado;
    }    
}
function Residuo()
{
    x = document.getElementById("N1").value;
    y = document.getElementById("N2").value;
    if ( x == 0 || y == 0 ) 
    {  
        alert ("Son necesarios dos numeros para dividir");  
    } 
    else 
    {  
        resultado = parseFloat(x)%parseFloat(y);  
        document.getElementById("r").textContent = resultado;
    }    
}
function TDM()
{
    let num = document.getElementById("tdm").value;
    document.write("<style>body{background-color: black;}");
    document.write("li{color: white; font-size: large}");
    document.write("p{color: white; font-size: xx-large}</style>");
	document.write("<center><p>Multiplos  de "+ num +"</p>");
	for(i = 1; i <= 10; i++)
    { 
		document.write("<li type='square'>");
		document.write(num + "x " + i + "= " + num * i);
		document.write("</li>");
	}
}
