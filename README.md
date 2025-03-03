{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf610
{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;\f1\fnil\fcharset0 HelveticaNeue-Medium;}
{\colortbl;\red255\green255\blue255;\red21\green21\blue22;}
{\*\expandedcolortbl;;\cssrgb\c10588\c10980\c11373;}
{\*\listtable{\list\listtemplateid1\listhybrid{\listlevel\levelnfc0\levelnfcn0\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{decimal\}.}{\leveltext\leveltemplateid1\'02\'00.;}{\levelnumbers\'01;}\fi-360\li720\lin720 }{\listname ;}\listid1}
{\list\listtemplateid2\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid101\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid2}
{\list\listtemplateid3\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid201\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid3}}
{\*\listoverridetable{\listoverride\listid1\listoverridecount0\ls1}{\listoverride\listid2\listoverridecount0\ls2}{\listoverride\listid3\listoverridecount0\ls3}}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl560\sa320\partightenfactor0

\f0\fs32 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 El problema "3n+1" es un problema matem\'e1tico muy famoso y a\'fan sin resolver. Tambi\'e9n se conoce como la conjetura de Collatz, el problema de Syracuse, el problema de Kakutani, el algoritmo de Hasse o el problema de Ulam.\
\pard\pardeftab720\sl560\sa320\partightenfactor0

\f1 \cf2 Enunciado del problema
\f0 \
\pard\pardeftab720\sl560\sa160\partightenfactor0
\cf2 El problema es muy simple de plantear:\
\pard\tx220\tx720\pardeftab720\li720\fi-720\sl560\sa160\partightenfactor0
\ls1\ilvl0\cf2 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	1.	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Elige cualquier n\'famero entero positivo (1, 2, 3, 4, ...).\
\ls1\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	2.	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Si el n\'famero es par, div\'eddelo entre 2.\
\ls1\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	3.	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Si el n\'famero es impar, multipl\'edcalo por 3 y s\'famale 1.\
\ls1\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	4.	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Repite los pasos 2 y 3 con el nuevo n\'famero que obtengas.\
\pard\pardeftab720\sl560\sa320\partightenfactor0
\cf2 La conjetura de Collatz dice que, sin importar el n\'famero inicial que elijas, siempre llegar\'e1s al ciclo 4, 2, 1.\
\pard\pardeftab720\sl560\sa320\partightenfactor0

\f1 \cf2 Ejemplo
\f0 \
\pard\pardeftab720\sl560\sa160\partightenfactor0
\cf2 Si empezamos con el n\'famero 6:\
\pard\tx220\tx720\pardeftab720\li720\fi-720\sl560\sa160\partightenfactor0
\ls2\ilvl0\cf2 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 6 es par, as\'ed que lo dividimos entre 2: 6 / 2 = 3\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 3 es impar, as\'ed que lo multiplicamos por 3 y le sumamos 1: (3 * 3) + 1 = 10\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 10 es par, as\'ed que lo dividimos entre 2: 10 / 2 = 5\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 5 es impar, as\'ed que lo multiplicamos por 3 y le sumamos 1: (5 * 3) + 1 = 16\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 16 es par, as\'ed que lo dividimos entre 2: 16 / 2 = 8\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 8 es par, as\'ed que lo dividimos entre 2: 8 / 2 = 4\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 4 es par, as\'ed que lo dividimos entre 2: 4 / 2 = 2\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 2 es par, as\'ed que lo dividimos entre 2: 2 / 2 = 1\
\pard\pardeftab720\sl560\sa320\partightenfactor0
\cf2 Como ves, hemos llegado a 1.\
\pard\pardeftab720\sl560\sa320\partightenfactor0

\f1 \cf2 Por qu\'e9 es un problema sin resolver
\f0 \
A pesar de su sencillez, nadie ha podido demostrar si la conjetura es cierta para todos los n\'fameros enteros positivos. Se ha comprobado para una gran cantidad de n\'fameros, pero eso no es suficiente para demostrar que se cumple siempre.\
\pard\pardeftab720\sl560\sa160\partightenfactor0

\f1 \cf2 Puntos clave:
\f0 \
\pard\tx220\tx720\pardeftab720\li720\fi-720\sl560\sa160\partightenfactor0
\ls3\ilvl0\cf2 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Es un problema muy simple de entender, pero muy dif\'edcil de resolver.\
\ls3\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 La conjetura dice que cualquier n\'famero entero positivo lleva al ciclo 4, 2, 1.\
\ls3\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 A pesar de muchos intentos, no se ha encontrado una prueba matem\'e1tica definitiva.\
\ls3\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Es un problema que ha atra\'eddo a muchos matem\'e1ticos a lo largo de los a\'f1os.\
\pard\pardeftab720\sl560\sa320\partightenfactor0
\cf2 Espero que esta explicaci\'f3n te sea \'fatil.\
}