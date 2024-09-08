
var love = setInterval(function(){
    var r_num = Math.floor(Math.random() * 40) + 1;
      var r_size = Math.floor(Math.random() * 65) + 10;
      var r_left = Math.floor(Math.random() * 100) + 1;
      var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
    
    
  },500);
  
  var i = 0;
  var txt1 = "Hola Mi amorcito.....!  <<               Quiero dedicarte unas palabras especiales. <<<                aqui vamos :3...!                                                                           > Hoy cumplimos un año juntos, y no puedo evitar sonreír al pensar en todo lo que hemos vivido desde que te conocí hace cinco años..  <<                  Sé que a veces puedo ser un tonto y cometer errores, pero nunca ha sido mi intención lastimarte.  < te amo más de lo que puedo expresar con palabras,! <<                           más de lo que a veces soy capaz de mostrar...!                                                     > Lo que siento por ti crece cada día, y no sé cómo agradecerte por ser tan increíble y paciente conmigo!                     << Eres mi todo, y no puedo esperar para seguir creando recuerdos a tu lado, porque en ti encontré mucho más que una compañera, encontré mi hogar!                                                     > Gracias por este año, por ser tú, y por amarme a pesar de mis fallos!                    << Prometo que seguiré esforzándome por ser mejor,                                                             >porque tú lo mereces. |                  <<<< Te amo más de lo que imaginas!";
  var speed = 40;
  typeWriter();
  function typeWriter() {
    if (i < txt1.length) {        
       if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
      else if(txt1.charAt(i)=='>')
        document.getElementById("text1").innerHTML = ''
      else if(txt1.charAt(i)=='|')
        {
          
  
        }
      else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }