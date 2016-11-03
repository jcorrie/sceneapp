
            
            
            $(document).ready (function() {
                
                
                $('p').addClass("mdl-color-text--grey-800");
                $('h4').addClass("mdl-color-text--grey-900"); 
              $('h5').addClass("mdl-color-text--grey-600"); 
                
                
                $(".likeButton").click(function(){
                  
                  if($(this).find('.likeIcon').hasClass("mdl-color-text--blue-grey-400")){
                  
                 $(this).find('.likeIcon').removeClass("mdl-color-text--blue-grey-400"); 
                 $(this).find('.likeIcon').addClass("mdl-color-text--blue-400"); 
                 console.log("working...?");
                 
                  } else {
                    
                    $(this).find('.likeIcon').addClass("mdl-color-text--blue-grey-400");
                    $(this).find('.likeIcon').removeClass("mdl-color-text--blue-400"); 
                  }
                  
                });


                $("a").click(function(){
                  
                  if($(this).find('.starIcon').hasClass("mdl-color-text--grey-400")){
                  
                 $(this).find('.starIcon').removeClass("mdl-color-text--grey-400"); 
                 $(this).find('.starIcon').addClass("mdl-color-text--pink-500"); 
                 console.log("working...?");
                 
                  } else {
                    
                    $(this).find('.starIcon').addClass("mdl-color-text--grey-400");
                    $(this).find('.starIcon').removeClass("mdl-color-text--pink-500"); 
                  }
                  
                });
                  
                
                var keepThis = $("#availableTag").css("color");
                
                
                $(".cardIcon").addClass("mdl-color-text--blue-grey-400");

                
                
               
                
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
                        
                        }
     
                    
                        
                       });
              
              
                  var myElement= $("#availableText");
                  function makeGrey(){
                  
                  $(myElement).addClass("mdl-color-text--blue-grey-400");
                  $(myElement).removeClass("mdl-color-text--pink-A400");
                  
                }
                
                  function makePink(){
                    
                    $(myElement).removeClass("mdl-color-text--blue-grey-400");
                    $(myElement).addClass("mdl-color-text--pink-A400");
                    
                  }
                  
                  
                
            