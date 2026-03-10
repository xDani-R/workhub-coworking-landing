document.addEventListener('DOMContentLoaded', ()=>{

    // ::: BOTONES :::

    // NEXT PREV
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    
    // CIRCLES
    const cOne= document.getElementById('circle-one');
    const cTwo= document.getElementById('circle-two');
    const cThree = document.getElementById('circle-three');
    // ::: BOTONES END :::

    // ::: CARROUSEL :::
    // const carrousel = document.getElementById('carrousel') No lo use... quizas en un futuro...
    
    // ELEMENTOS HTML o SECCIONES
    const elementOne = document.getElementById('c-element-one');
    const elementTwo = document.getElementById('c-element-two');
    const elementThree = document.getElementById('c-element-three');
    
    // ::: INDEXADOR :::
    // CARROUSEL INDEX INDEX
    const carrouselItems = [elementOne,elementTwo,elementThree];
    const circlesButtons = [cOne,cTwo,cThree];
    let carrouselIndexElement = 0;

    // ::: FUNCIONES :::
    // CAPTURAR INDICE ACTUAL Y APLICAR ESTILOS A LOS ELEMENTOS COHINCIDENTES
    const updateActive = () => {
        // recorremos todos los elementos hijo de nuestro carrusel
        carrouselItems.forEach((item, index) => { // item e indice
            if (index === carrouselIndexElement) { // si el indice actual es igual a nuestro indice de carrousel
                item.classList.add('active'); 
                // el elemento que se encuentra dentro de nuestro arreglo en ese indice se le asigna la clase active
            } else { // De lo contrario aquellos que no esten en el actual indice se lo quitamos
                item.classList.remove('active');
            }
        });

        circlesButtons.forEach((button,index)=>{
            if(index === carrouselIndexElement){
                button.classList.add('active');
            }else{
                button.classList.remove('active');
            }
        });

    };

    // AUTO NEXT -- SCROLL INFINITO 
    const startAutoPlay = () => {
        // Usamos setInterval para que se ejecute infinitamente
        autoPlayInterval = setInterval(() => {
            // Reutilizamos la lógica del botón "Next"
            if (carrouselIndexElement < carrouselItems.length - 1) {
                carrouselIndexElement++;
            } else {
                // Caso contrario que el length sea mayor se establece en 0 como cuando llegamos al limite en "next"
                carrouselIndexElement = 0;
            }
            // Se actualiza el estado del carrousel pasado el intervalo
            updateActive();
        }, 5000); // La función siempre se ejecutará en un periodo de 5 segundos. 5000milisegunods = 5s;
    };

    // RESET DEL TIMER CUANDO HACEMOS CLICK EN UN ELEMENTO. 
    // NECESARIO PARA QUE CUANDO VAYAMOS EN UN INDICE ESPECIFICO NO SE CAMBIE DE INMEDIATO POR COHINCIDENCIA DEL TIMER
    const resetTimer = () => {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    };


    // ::: EVENTOS:::
    // CIRCLES BUTTON EVENT
    circlesButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            carrouselIndexElement = index;
            updateActive();
            resetTimer();
        });
    });
    
    // NEXT BUTTON EVENT
    next.addEventListener('click', () => {
        //  Mientras nuestro indice actual sea menor al maximo de nuestra longitud de elementos 
        if (carrouselIndexElement < carrouselItems.length - 1) { // Podemos seguir avanzando
            carrouselIndexElement++; // aumentamos el indice actual
        } else {// De lo contrario lo establemos a 0 si no pasamos al indice 3, y los arreglos parten del 0 hasta el ultimo elemento
            // Este caso hipotetico tiene hasta indice 2, osea, 0;1;2
            carrouselIndexElement = 0;
        }
        // Ya actualizado nuesto indice calleamos nuestra función para que actualizar el estado actual del carrousel
        updateActive();
        resetTimer(); 
    });

    // PREV
    prev.addEventListener('click', () => {
        // Similar al anterior, evaluamos si no nos encontramos en el indice 0, ya que disminuirlo caeriamos en -1 el cual no existe.
        if (carrouselIndexElement > 0) {
            // Si sigue siendo menor nuestro indice, podemos disminuir el indice actual
            carrouselIndexElement--;
        } else {
            // Caso contrario tomamos el largo máximo de nuestro carrousel y le restamos uno para llegar a la opsición 2
            carrouselIndexElement = carrouselItems.length - 1;
            resetTimer(); 
        }
        // Actualizamos estado actual del carrousel
        updateActive();
    });



    // Actualización inicial con let carrouselIndexElement = 0;, el cual será nuestro elemento por defecto que se mostrará de los primeros.
    updateActive();
    startAutoPlay();

})