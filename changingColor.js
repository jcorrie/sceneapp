
            
            
            $(document).ready (function() {
                
                    
                  
                
                var keepThis = $("#availableTag").css("color");
                
                
                

                
                
               
                
                           $("#availableTag").mouseover(function() {
                           
                           $("#availableTag").css("background-color", "initial");
                           $("#availableTag").css("color", keepThis);
                          
                           
                         }); 
                      
                          if ($ ("#availableLabel").hasClass("is-checked") ) {
                          
                          console.log("is checked")
                          $( "#availableText" ).text( "Available!" );
                          makePink();
                          $("#availableText").fadeTo( "slow", 0.87);
                        
                         
                                          
                         
                        } else {
                          
                          console.log("not checked")
                        $("#availableText").fadeTo( "fast", 0.37);
                         $( "#availableText" ).text( "Busy..." );
                         
                        makeGrey();
                         
                        }
                        
                        
                       });       
                       
                       
                       $('#switch-2').click(function() {
                        
                        if ($ ("#availableLabel").hasClass("is-checked") ) {
                          
                          console.log("was checked, is unchecked");
                        
                        
                        $("#availableText").fadeTo( "fast", 0.37);
                         $( "#availableText" ).text( "Busy..." );
                         
                        makeGrey();
                           
              
                           
                        
                          
                          
                        } else {
                          
                          console.log("was unchecked, now checked");
                          $( "#availableText" ).text( "Available!" );
                          makePink();
                          $("#availableText").fadeTo( "slow", 0.87);
                        
                        };
     
                    
                        
                       });
              
              
                  var myElement= $("#availableText");
                  function makeGrey(){
                  
                  $(myElement).addClass("mdl-color-text--blue-grey-400");
                  $(myElement).removeClass("mdl-color-text--pink-A400");
                  
                };
                
                  function makePink(){
                    
                    $(myElement).removeClass("mdl-color-text--blue-grey-400");
                    $(myElement).addClass("mdl-color-text--pink-A400");
                    
                  };
                  
                  
                
            