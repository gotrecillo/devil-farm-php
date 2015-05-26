<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles/index.css" type="text/css" />
        <script src="scripts/jquery-1.11.2.js"></script>
        <script src="scripts/flip.js"></script>
        <script src="scripts/main.js"></script>
        <meta charset="UTF-8"/>
        <title>MemoryGame</title>
    </head>
    <body>
      <h1>El juego de la granja</h1>
      <div id="container"></div>
    
      <div id="manual">
        <p>Detrás de las cartas hay diferentes especies de animales de varios colores.</p>
        <p>Encuentra dos animales de la misma especie o del mismo color y sigue buscando hasta que encuentres a todos.</p>
        <p>Falla y tendrás que empezar desde el principio.</p>
        <p>Movimientos:</p>
        <div id="turn">0</div>
      </div>

    <script type="text/javascript">
            fill();
            $(function(){
                $(".cards").flip({trigger: 'manual'});
            });
    </script>
    </body>
</html>
