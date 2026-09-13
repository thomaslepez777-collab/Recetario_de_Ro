class headerPrincipal extends HTMLElement{
connectedCallback(){
    this.innerHTML = `
   <header class="header-main"> 
<div class="Contenedor-Logo"> <img src="/imagenes/Logo.jpg" alt="Logo sobre fondo amarillo pastel que muestra una rosa minimalista en espiral roja con tallo verde azulado a la izquierda, y a la derecha el texto «Ro Recetario» en letra cursiva a juego.">
</div>

<nav class="main-nav"> 
    <ul> 
        <li><a href="/index.html">Inicio</a></li>
        <li><a href="/recetasdulces.html">Recetas Dulces</a></li>
        <li><a href="/recetassaladas.html">Recetas Saladas</a></li>
        <li><a href="/sobrennosotros.html">Sobre nosotros</a></li>
    </ul>
</nav>

<form action="" method="post">

 <label for="buscador"></label>
 <input type="text" id="buscador" name="buscador">

</form>

</header>
    `;
}
}
customElements.define('header-principal', headerPrincipal);