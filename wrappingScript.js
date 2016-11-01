

              //Script for snackbar 
              

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
    var showDialogButton = document.querySelector('#show-help');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
      
     
    });
    
                  (function() {
                          'use strict';
                          var snackbarContainer = document.querySelector('#demo-snackbar-example');
                          var showSnackbarButton = document.querySelector('#show-help');
                          var handler = function(event) {
                            showSnackbarButton.style.backgroundColor = '';
                          };
                          dialog.addEventListener('click', function() {
                            'use strict';
                          
                            var data = {
                              message: "Keep clicking...",
                              timeout: 2000,
                              actionHandler: handler,
                              actionText: 'me'
                            };
                            snackbarContainer.MaterialSnackbar.showSnackbar(data);
                          });
                        }());
    
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
    
/*

 $(document).ready(function(){
        
        $("#mainContent").load("/title.main.html");
        $("#floatingButton").load("/title.floater.html");
        
          $("#theFeed").click(function() {
            
            $("#mainContent").load("/title.main.html")
            $("#floatingButton").load("/title.floater.html");
            
            $(".mdl-navigation__link").removeClass("mdl-shadow--6dp");
            $( this ).addClass( "mdl-shadow--6dp" );
          });  
            
          $("#theInbox").click(function(){
            
           $('#mainContent').load('/inbox.main.html');
           $("#floatingButton").load("/inbox.floater.html");
           
           
              document.getElementById("mainContent").style.display = "none";
  document.getElementById("view-source").style.display = "none";
  
  
            setTimeout(function() {
          document.getElementById("loading").style.display = "none";
            document.getElementById("mainContent").style.display = "";
            document.getElementById("view-source").style.display = "";
          }, 1500);
           
            $(".mdl-navigation__link").removeClass("mdl-shadow--6dp");
            $( this ).addClass( "mdl-shadow--6dp" );
          });
          
          
          $("#theYou").click(function(){
            
            $('#mainContent').load('/profile.main.html');
            $("#floatingButton").load("/profile.floater.html");
              $(".mdl-navigation__link").removeClass("mdl-shadow--6dp");
            $( this ).addClass( "mdl-shadow--6dp" );
          });
          

          $("#theGigs").click(function(){
            
           $('#mainContent').load('/your_gigs.main.html');
           $('#floatingButton').load('/your_gigs.floater.html');
            $(".mdl-navigation__link").removeClass("mdl-shadow--6dp");
            $( this ).addClass( "mdl-shadow--6dp" );
          
          });
          
          $("#theCommunity").click(function(){
            
           $('#mainContent').load('/community.main.html');
           $('#floatingButton').load('/community.floater.html');
             $(".mdl-navigation__link").removeClass("mdl-shadow--6dp");
            $( this ).addClass( "mdl-shadow--6dp" );
          
          });
          
          $("#theSettings").click(function(){
            
            $('#mainContent').load('/settings.main.html');
            $('#floatingButton').load('/settings.floater.html');
            $(".mdl-navigation__link").removeClass("mdl-shadow--6dp");
            $( this ).addClass( "mdl-shadow--6dp" );
          });
        
      });
    

      
        */
        
        

      
    