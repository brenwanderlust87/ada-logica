		// abc original:
		// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
		//abc desplazado: 
		// S T U V W X Y Z A B C D E F G H I J K L M N O P Q R

		//ejemplo
		//HOLA = ZGDS
		//Devolver el texto encriptado
		//console.log(encriptar("HOLA"));//	

		/*abc= ["A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

		abcDesplazado=["D", "E", "F", "G","H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","A","B","C"]	
*/

		var abc= ["A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

		for (var i = 0; i < 26; i++) {
				//var j=i;
				//while(j >= abc.length){
				//	j -= abc.length;
				//}		
				console.log(i + ":" + abc[i % abc.length]);//usamos modulos
				//console.log(i + ";"+ abc[j]);
		}

			var abcDesplazado=[];
			var n=3;
		for (var i = 0; i < abc.length; i++) {
				abcDesplazado[i+n % abc.length] = abc[i];
					}


			var mensaje="mensajito";
			var mensajeEncriptado="";
		for (var i = 0; i < mensaje.length; i++) {
			for (var j = 0; j < abc.length; j++) {
				if (mensaje[i]===abc[j]) {
					mensajeEncriptado += abcDesplazado[j];
				}
			}
		}	
		console.log(mensajeEncriptado);				
// === siginifca mismo valor, mismo tipo.
		//console.log(abcDesplazado);
//abc[8] esto denotaria la letra en la posicion 8
//		console.log(abc[abc.length-4])	
		
	

	//desencriptar



	function sumar (a,b){
		return a + b;
	}