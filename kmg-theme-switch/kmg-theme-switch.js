define( [
    'qlik'
],
function (qlik) {
    'use strict';

    function addStyleLinkToHeader (key, link) {
        $(document).ready(function () {
         var idPattern = 'wiStyleLinked_' + key;
         if ($('#' + idPattern).length === 0) {
      
         var $lnk = $(document.createElement('link'));
         $lnk.attr('rel', 'stylesheet');
         $lnk.attr('href', link);
         $lnk.attr('id', idPattern);
         $("head").append($lnk);
         }
        });
    };

    addStyleLinkToHeader('wiFonts-fa', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css");  
      
    document.addEventListener("click", function(evt) {
        if(evt.target.id == 'nightmode') {
            if(document.body.classList.contains('nightmode')) {
                qlik.theme.apply('kmg-light-theme').then(function(result){
                    //qlik.currApp().theme.save('kmg-light-theme');
                });
            } else {
                qlik.theme.apply('kmg-dark-theme').then(function(result){
                    //qlik.currApp().theme.save('kmg-dark-theme');
                });
            }
        }
    })
    return {
        paint: function ( $element, layout ) {

            let style = "<style> #nightmode {background-size: 20px; background-repeat: no-repeat; width: 15px; border: none; width: 37px; display: flex; align-items: center; justify-content: center; text-align: center; background-position: center; background-color: white; transition: all 250ms ease; font-size: 20px;} #nightmode:hover {background-color: #c9c9c9; opacity: 0.6;} .nightmode #nightmode:hover {background-color: #222222; color: #868686;} #nightmode i {pointer-events: none;} .nightmode #nightmode {background: #2d2d2d;} .nightmode .fas.fa-moon {display: none;} .nightmode .fas.fa-sun {display: block; color: #cacaca;} .fas.fa-sun {display: none;} .fas.fa-moon {display: block;}</style>";
            if(document.querySelector("#nightmode")) {
                return;
            } else {
                document.querySelector('.buttons-end').insertAdjacentHTML("afterEnd",style+"<button id='nightmode'><i class='fas fa-sun'></i><i class='fas fa-moon'></i></button>");
            }

        }
    };
} );