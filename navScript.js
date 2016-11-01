

   
   var timingOut = 700;
        
      document.getElementById(".demo-content").style.display="none";
      document.getElementById("mainTitle").style.display="";
        
          $("#theFeed").click(function() {

          
            
              document.getElementById("mainContent").style.display = "none";
              document.getElementById("view-source").style.display = "none";
              document.getElementById("loading").style.display = "";
  
  
                  setTimeout(function() {
                document.getElementById("loading").style.display = "none";
                  document.getElementById("mainContent").style.display = "";
                  document.getElementById("view-source").style.display = "";
                  document.getElementById(".demo-content").style.display="none";
                  document.getElementById("mainTitle").style.display="";
                }, timingOut);
            
            $(".mdl-navigation__link").removeClass("mdl-shadow--6dp");
            $( this ).addClass( "mdl-shadow--6dp" );
            
            
            
            
          });  
            
          $("#theInbox").click(function(){
         
           
              document.getElementById("mainContent").style.display = "none";
              document.getElementById("view-source").style.display = "none";
              document.getElementById("loading").style.display = "";
  
  
                  setTimeout(function() {
                document.getElementById("loading").style.display = "none";
                  document.getElementById("mainContent").style.display = "";
                  document.getElementById("view-source").style.display = "";
                  
                  document.getElementById("mainInbox").style.display="";
                }, timingOut);
            
            $(".mdl-navigation__link").removeClass("mdl-shadow--6dp");
            $( this ).addClass( "mdl-shadow--6dp" );
            
          
          
          $("#theYou").click(function(){
            
           document.getElementById(".demo-content").style.display="none";
           document.getElementById("mainProfile").style.display="";
            
               document.getElementById("mainContent").style.display = "none";
              document.getElementById("view-source").style.display = "none";
              document.getElementById("loading").style.display = "";
  
                  setTimeout(function() {
                document.getElementById("loading").style.display = "none";
                  document.getElementById("mainContent").style.display = "";
                  document.getElementById("view-source").style.display = "";
                }, timingOut);
                  
            
              $(".mdl-navigation__link").removeClass("mdl-shadow--6dp");
            $( this ).addClass( "mdl-shadow--6dp" );
          });
          

          $("#theGigs").click(function(){
          /*  
           $('#mainContent').load('/your_gigs.main.html');
           $('#floatingButton').load('/your_gigs.floater.html');
           
               */   
              document.getElementById("mainContent").style.display = "none";
              document.getElementById("view-source").style.display = "none";
              document.getElementById("loading").style.display = "";
  
                  setTimeout(function() {
                document.getElementById("loading").style.display = "none";
                  document.getElementById("mainContent").style.display = "";
                  document.getElementById("view-source").style.display = "";
                }, timingOut);
           
            $(".mdl-navigation__link").removeClass("mdl-shadow--6dp");
            $( this ).addClass( "mdl-shadow--6dp" );
          
          });
          
          $("#theCommunity").click(function(){
            /*
           $('#mainContent').load('/community.main.html');
           $('#floatingButton').load('/community.floater.html');
           
           */
              document.getElementById("mainContent").style.display = "none";
              document.getElementById("view-source").style.display = "none";
              document.getElementById("loading").style.display = "";
  
                  setTimeout(function() {
                document.getElementById("loading").style.display = "none";
                  document.getElementById("mainContent").style.display = "";
                  document.getElementById("view-source").style.display = "";
                }, timingOut);
           
             $(".mdl-navigation__link").removeClass("mdl-shadow--6dp");
            $( this ).addClass( "mdl-shadow--6dp" );
          
          });
          
          $("#theSettings").click(function(){
            /*
            $('#mainContent').load('/settings.main.html');
            $('#floatingButton').load('/settings.floater.html');
            */
            
              document.getElementById("mainContent").style.display = "none";
              document.getElementById("view-source").style.display = "none";
              document.getElementById("loading").style.display = "";
  
  
                  setTimeout(function() {
                document.getElementById("loading").style.display = "none";
                  document.getElementById("mainContent").style.display = "";
                  document.getElementById("view-source").style.display = "";
                }, timingOut);
            
            $(".mdl-navigation__link").removeClass("mdl-shadow--6dp");
            $( this ).addClass( "mdl-shadow--6dp" );
          });
        
      });
    


    