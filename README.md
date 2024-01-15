# TEST TÉCNICO

## Requerimientos:

- La solución debe estar implementada en PHP, JavaScript (VueJS, React, NodeJS), Python, Java con una interfaz de usuario que permita el ingreso de la información y visualizar los resultados.
- La aplicación debe recibir como entrada un archivo de texto.
- Utilizar únicamente elementos de su autoría. (No librerías de Terceros)

## Problema: Temas de la conferencia.

### Planteamiento del problema:

- Se ha decidido planificar una conferencia y se han recibido muchas propuestas lo que ha generado dificultad para que todas quepan en los espacios previstos para el día del evento. Debido a que existen muchas posibilidades se necesita crear un programa que ayude a organizar el evento.

### Características

- La conferencia está dividida en varias temáticas.
- Cada temática tiene una sesión en la mañana y otra en la tarde.
- Cada sesión contiene múltiples charlas.
- Las sesiones de la mañana empiezan a las 9 AM y deben terminar a las 12 del mediodía, para el almuerzo.
- Las sesiones de la tarde empiezan a la 1 PM y deben terminar a tiempo para el evento social.
- El evento social no puede empezar antes de las 4:00 ni después de las 5:00.
- Ninguno de los títulos de las charlas contienen números.
- La duración de todas las charlas está dada en minutos (no horas).
- Se asume que los presentadores serán muy puntuales por lo tanto no hay necesidad de programar descansos entre sesiones. - Existen varias formas de resolver este problema y se van a generar diferentes combinaciones, se incluye un ejemplo pero no se tiene que replicar el mismo resultado.

## Desplegar la solucion

Para correr la solucion es necesario, ingresar a la carpeta contenedora de la app, dentro de nuestra terminal preferida colocarnos en la carpeta que contenga la app, toamr en cuenta que debe estar instalado previamente NodeJS 18v+
Garantizando que se tenga la version correcta de Node ubicados en la carpeta abrir la terminar, ejecutar los siguientes comandos

```bash
  npm install
```

con este comado se descargara todas las dependencias necesarias para la ejecucion del programa

```bash
  npm start
```

este comando levantara la app en http://localhost:3000/ el puerto por defecto que se levanta las apps react es el 3000 sin embargo se debe tomar en cuenta donde se desplego

#Solucion del problema

- como primer punto lo que hice fue leer el archivo y cargarlo en un textarea para poder visaulizar la informacion que seria procesada
- con la informacion ya mostrandose en el textarea lo que hice gue procesar la informacion en un compontente llamado TestProcessButton, en este componente procese la informacion de tal manera que se presentara como un JSON, lo logre tomando la informacion ingresada y separadola usando split en cada salto de linea
- con la informacion separada por salto de linea, compare los datos en las lineas para poder separar la descricion del tiempo de duracion
- con esta informacion separada obtuve un JSON que separaba los dos datos que nos proporsionaba por cada tema a exponer.
