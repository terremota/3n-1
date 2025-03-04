{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf610
{\fonttbl\f0\froman\fcharset0 Times-Roman;\f1\fmodern\fcharset0 Courier-Bold;\f2\fmodern\fcharset0 Courier;
\f3\fnil\fcharset0 LucidaGrande;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
{\*\listtable{\list\listtemplateid1\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid1\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{circle\}}{\leveltext\leveltemplateid2\'01\uc0\u9702 ;}{\levelnumbers;}\fi-360\li1440\lin1440 }{\listname ;}\listid1}
{\list\listtemplateid2\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid101\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid2}
{\list\listtemplateid3\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid201\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid3}
{\list\listtemplateid4\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid301\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid4}
{\list\listtemplateid5\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid401\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid5}}
{\*\listoverridetable{\listoverride\listid1\listoverridecount0\ls1}{\listoverride\listid2\listoverridecount0\ls2}{\listoverride\listid3\listoverridecount0\ls3}{\listoverride\listid4\listoverridecount0\ls4}{\listoverride\listid5\listoverridecount0\ls5}}
\margl1440\margr1440\vieww25400\viewh13220\viewkind0
\deftab720
\pard\pardeftab720\sl280\sa240\partightenfactor0

\f0\fs28 \cf2 \expnd0\expndtw0\kerning0
Claro, aqu\'ed tienes una descripci\'f3n breve de la funci\'f3n de cada parte del c\'f3digo:\
\pard\pardeftab720\sl280\sa240\partightenfactor0

\b \cf2 Funci\'f3n 
\f1 collatz(x)
\f0 :
\b0 \
\pard\tx220\tx720\pardeftab720\li720\fi-720\sl280\partightenfactor0
\ls1\ilvl0\cf2 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Esta funci\'f3n implementa la secuencia de Collatz.\
\ls1\ilvl0\kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Toma un n\'famero entero 
\f2 x
\f0  como entrada.\
\ls1\ilvl0\kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Genera una secuencia de n\'fameros aplicando las reglas de Collatz:\
\pard\tx940\tx1440\pardeftab720\li1440\fi-1440\sl280\partightenfactor0
\ls1\ilvl1\cf2 \kerning1\expnd0\expndtw0 {\listtext	
\f3 \uc0\u9702 
\f0 	}\expnd0\expndtw0\kerning0
Si 
\f2 x
\f0  es par, lo divide por 2.\
\ls1\ilvl1\kerning1\expnd0\expndtw0 {\listtext	
\f3 \uc0\u9702 
\f0 	}\expnd0\expndtw0\kerning0
Si 
\f2 x
\f0  es impar, lo multiplica por 3 y le suma 1.\
\pard\tx220\tx720\pardeftab720\li720\fi-720\sl280\partightenfactor0
\ls1\ilvl0\cf2 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Almacena cada paso en un objeto que incluye el n\'famero y el c\'e1lculo realizado.\
\ls1\ilvl0\kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Devuelve un array de objetos que representan la secuencia completa hasta llegar a 1.\
\ls1\ilvl0\kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Incluye un \'faltimo objeto para mostrar el ciclo final 4,2,1.\
\pard\pardeftab720\sl280\sa240\partightenfactor0

\b \cf2 Funci\'f3n 
\f1 jugarCollatz()
\f0 :
\b0 \
\pard\tx220\tx720\pardeftab720\li720\fi-720\sl280\partightenfactor0
\ls2\ilvl0\cf2 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Esta funci\'f3n maneja la interacci\'f3n del usuario.\
\ls2\ilvl0\kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Obtiene el n\'famero ingresado por el usuario desde un campo de entrada HTML.\
\ls2\ilvl0\kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Valida que la entrada sea un n\'famero entero positivo.\
\ls2\ilvl0\kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Llama a la funci\'f3n 
\f2 collatz()
\f0  para obtener la secuencia.\
\ls2\ilvl0\kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Formatea la secuencia para mostrarla en un elemento de salida HTML, mostrando cada paso con el n\'famero y el c\'e1lculo.\
\ls2\ilvl0\kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Muestra un mensaje de error si el valor introducido no es un n\'famero, o si este es negativo o igual a cero.\
\pard\pardeftab720\sl280\sa240\partightenfactor0

\b \cf2 Funci\'f3n 
\f1 crearLluviaDeSimbolos()
\f0 :
\b0 \
\pard\tx220\tx720\pardeftab720\li720\fi-720\sl280\partightenfactor0
\ls3\ilvl0\cf2 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Esta funci\'f3n crea un efecto de "lluvia de s\'edmbolos" en la p\'e1gina web.\
\ls3\ilvl0\kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Selecciona un elemento HTML con la clase 
\f2 matrix-rain
\f0 .\
\ls3\ilvl0\kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Genera una gran cantidad de elementos 
\f2 span
\f0  que representan s\'edmbolos aleatorios.\
\ls3\ilvl0\kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Asigna a cada s\'edmbolo una posici\'f3n horizontal aleatoria y un retraso de animaci\'f3n aleatorio.\
\ls3\ilvl0\kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
A\'f1ade los s\'edmbolos al elemento 
\f2 matrix-rain
\f0 .\
\pard\pardeftab720\sl280\sa240\partightenfactor0

\b \cf2 Funci\'f3n 
\f1 getRandomSymbol()
\f0 :
\b0 \
\pard\tx220\tx720\pardeftab720\li720\fi-720\sl280\partightenfactor0
\ls4\ilvl0\cf2 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Esta funci\'f3n devuelve un car\'e1cter aleatorio de una cadena que contiene caracteres japoneses.\
\ls4\ilvl0\kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Es utilizada por la funci\'f3n 
\f2 crearLluviaDeSimbolos()
\f0  para proporcionar los simbolos que caen.\
\pard\pardeftab720\sl280\sa240\partightenfactor0

\f1\b \cf2 window.addEventListener('DOMContentLoaded', crearLluviaDeSimbolos);
\f0 :
\b0 \
\pard\tx220\tx720\pardeftab720\li720\fi-720\sl280\partightenfactor0
\ls5\ilvl0\cf2 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Este c\'f3digo asegura que la funci\'f3n 
\f2 crearLluviaDeSimbolos()
\f0  se ejecute despu\'e9s de que el contenido HTML de la p\'e1gina se haya cargado completamente. Esto garantiza que el elemento 
\f2 matrix-rain
\f0  exista antes de que se intente a\'f1adir los s\'edmbolos.\
\pard\pardeftab720\sl280\partightenfactor0
\cf2 \
\
\
\
\

\fs24 \
\
\
\
\
\
}