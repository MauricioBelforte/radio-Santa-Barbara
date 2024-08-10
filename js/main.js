
var 
   
    btn= document.getElementById('player'),
    rectangulodegrafico= document.getElementById('rectangulocongrafico'),
    rectangulodeaudio= document.getElementById('rectangulodelaudio')
    contador=0;
   

    function encender() {

        if (contador==0) {
            rectangulodegrafico.classList.add('encendido');
            rectangulodeaudio.classList.add('encendido')
            contador=1;
            console.log("paso");
            
        }
        else{
            rectangulodegrafico.classList.remove('encendido');
            rectangulodeaudio.classList.remove('encendido')
            contador= 0;
        }
    }


    function openNav(){
        document.getElementById("menu-movil").style.width = "100%"
    }

    function closeNav(){
        document.getElementById("menu-movil").style.width = "0%"
    }
    
    


btn.addEventListener('mouseover',encender,true)



