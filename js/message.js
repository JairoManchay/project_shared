const click_head = document.getElementById('click_head');

click_head.addEventListener('click', function(){
    modalPrimavera('Flores amarillas!!!', html_texto, '../img/imagen_pareja.jpeg');
})


function modalPrimavera(titulo, texto, imagen){
    Swal.fire({
        title: titulo,
        html: `<audio src="/audio/audio.mpeg" autoplay loop></audio>
        <p>${texto}</p>`,
        imageUrl: imagen,
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Imagen pareja',
      })
}



let html_texto = 'El camino que trazo junto a ti, es simplemente hermoso, podemos tener días dificiles, dias medios, dias buenos pero todo eso lo cura nuestro inmenso amor y las ganas que tengo \n cada día por esforzarme para darte lo mejor.....🌹';