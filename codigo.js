// var menu = ["Productos", "Ventas", "Contacto"];
// document.write(menu);

// var dofa = [ ["Fuerza", "Oportunidad"] , ["Devilidad", "Amenaza"] ];
// document.write( dofa[id][1] );

function explosion()
{
    alert("BOOM!!");
    document.write("<h1>BOOM! Elegiste un area minada :(</h1>");
}
function ganaste()
{
    document.write("<h1>Eres un ganador :)</h1>");    
}
function random(max, min)
{
	var numero = Math.floor( Math.random() * (max - min + 1) + min);
	return numero;
}

var c1, c2, c3, c4, c5, c6, c7, c8, c9;
function rellenarCampo()
{
	c1 = random(1,0);
	c2 = random(1,0);
	c3 = random(1,0);
	c4 = random(1,0);
	c5 = random(1,0);
	c6 = random(1,0);
	c7 = random(1,0);
	c8 = random(1,0);
	c9 = random(1,0);
	if( c1 == 1 && c2 == 1 && c3 == 1 && c4 == 1 && c5 == 1 && c6 == 1 && c7 == 1 && c8 == 1 && c9 == 1 )
	{
		rellenarCampo();
	}
}

rellenarCampo();

// 1 = Bomba. 0 = No hay bomba
var campo = [ [ c1 , c2 , c3 ] ,
              [ c4 , c5 , c6 ] ,
              [ c7 , c8 , c9 ] ];

var textos = ["Cesped", "Bomba"];

var x, y;

alert("Estás en un campo minado\n" +
		"Elije una posicion entre el 0 y el 2 para X y para Y");

x = prompt("Posición en X? (entre 0 y 2)", "0");
y = prompt("Posición en Y? (entre 0 y 2)", "0");


if(x <= 2 && y <= 2)
{
	var posicion = campo[x][y];
	document.write("Elegiste " + textos[posicion] + "<br />");
	if(posicion == 1)
	{
		explosion();
	}
	else
	{
		ganaste();
	}
}
else
{
	document.write("¡Te saliste del campo!");
	explosion();
}

function campoMinado()
{
	campo1.innerText = c1;
	campo2.innerText = c2;
	campo3.innerText = c3;
	campo4.innerText = c4;
	campo5.innerText = c5;
	campo6.innerText = c6;
	campo7.innerText = c7;
	campo8.innerText = c8;
	campo9.innerText = c9;
}