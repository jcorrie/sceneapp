
              //Script for snackbar 
              
              (function() {
                          'use strict';
                          var snackbarContainer = document.querySelector('#demo-snackbar-example');
                          var showSnackbarButton = document.querySelector('#view-source');
                          var handler = function(event) {
                            showSnackbarButton.style.backgroundColor = '';
                          };
                          showSnackbarButton.addEventListener('click', function() {
                            'use strict';
                            showSnackbarButton.style.backgroundColor = '#' +
                                Math.floor(Math.random() * 0xFFFFFF).toString(16);
                            var data = {
                              message: "Keep clicking...",
                              timeout: 2000,
                              actionHandler: handler,
                              actionText: 'me'
                            };
                            snackbarContainer.MaterialSnackbar.showSnackbar(data);
                          });
                        }());
  //window.onload = function(){ document.getElementById("loading").style.display = "none" }
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("view-source").style.display = "none";
  
  
  setTimeout(function() {
document.getElementById("loading").style.display = "none";
  document.getElementById("mainContent").style.display = "";
  document.getElementById("view-source").style.display = "";
}, 1500);
  

  document.getElementById("randomBadge").className += " material-icons mdl-badge mdl-badge--overlap";
  
  var randomNum = Math.floor(Math.random() * 10);
  var brand = randomBadge.getAttribute("data-badge")
  
  
  if(randomNum === 0){
    
    randomBadge.removeAttribute("data-badge")
    
  } else {
    
    randomBadge.setAttribute("data-badge", randomNum)
  }

      
        // Creating the "about us" pop up
    var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('#show-dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
      
     
    });
    
    var darkenIcon = document.getElementById("darkenIcon");
   var originClass = darkenIcon.className;
    
    var iconSize = darkenIcon.style.fontSize;
    var iconMargin = [darkenIcon.style.marginLeft, darkenIcon.style.marginBottom] 
  
    var myColor = "pink";
    
     darkenIcon.onmouseover= function(){
      
      darkenIcon.className = " mdl-color-text--"+myColor+"-600 material-icons";
      
      darkenIcon.style.fontSize = "30px" ;
      darkenIcon.style.marginLeft = "-3px";
      darkenIcon.style.marginBottom = "-2px";
    
      
    }
    
    darkenIcon.onmouseout = function() {
          
     darkenIcon.style.fontSize = iconSize;
     darkenIcon.style.marginLeft = iconMargin[0];
      darkenIcon.style.marginBottom = iconMargin[1];
      darkenIcon.className = originClass;f
   }     
    

    

        $('.darkenIcon').hover(function(){ 
         $(this).css("background-color", "blue"); 
         
       });
      
        

      
    