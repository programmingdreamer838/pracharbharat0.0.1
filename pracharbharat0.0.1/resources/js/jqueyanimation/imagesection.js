

 $(document).ready(
    function(){

               let overlay_col=document.getElementsByClassName('overlaycommon');
               function visiblityhide(){
                   for(j=0;j<overlay_col.length;j++){
                       //$(overlay_col[j]).fadeOut(8000)
                       overlay_col[j].classList.remove('overlay_transition');
                       //overlay_col[j].classList.add('overlay_transition_fadeout');
                      // console.log(overlay_col[j].style.width+'debug')
                   }
               }


    setInterval(function(){
            i=0;

            let intervalid=setInterval(
                  function(){
                          overlay_col[i++].classList.add("overlay_transition");
                          if(i===overlay_col.length)
                               {clearInterval(intervalid)}
                                                  },2000)
                         setTimeout(function(){visiblityhide()},15500)

                           },15700)



   });