 /* function displayPop(){
          /*  var queryURL ="https://api.schooldigger.com/v1.1/districts?st=CA&appID=e30f704e&appKey=9440d7eb65fd2b306e7e51c5fe636610" 
            var queryURL ="https://api.usa.gov/crime/fbi/ucr/ct/count/national/offense_name?page=1&per_page=10&output=json&api_key=F0nGMtJYCdib53otstUsLMGKOjQQZyRDy9Jr2m9X";
            alert("wow");
            var request  = $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function( msg ) {
             var sss = JSON.stringify (msg)

             $('#population').text(sss);
              });

              request.fail(function( jqXHR, textStatus ) {
                alert( "Request failed: " + textStatus );
              }); 
        }; 
        
        /* function displaySchools(){
            var queryURL ="https://api.schooldigger.com/v1.1/districts?st=CA&appID=e30f704e&appKey=9440d7eb65fd2b306e7e51c5fe636610"
            ;
            alert("wow");
            $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function( msg ) {
            var schl= JSON.stringify(msg)
             $('#schools').text(schl);
              });
        }; */






/*function displaySchools(){
            var queryURL ="https://api.census.gov/data/2016/pep/population?get=POP,GEONAME&for=place:*&key=9600ff656f29528f494f981fbe227969244fdfc0"
            ;
            alert("wow");
            $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function( msg ) {
             $('#schools').text(msg);
               });
        }; */

        function displayPop(){
            /*  var queryURL ="https://api.schooldigger.com/v1.1/districts?st=CA&appID=e30f704e&appKey=9440d7eb65fd2b306e7e51c5fe636610" */
              var queryURL ="https://api.usa.gov/crime/fbi/ucr/offenses/count/national/weapon_name/offenses?page=1&per_page=10&output=json&api_key=F0nGMtJYCdib53otstUsLMGKOjQQZyRDy9Jr2m9X";
              alert("wow");
              var request  = $.ajax({
                  url: queryURL,
                  method: 'GET'
              })
              .done(function( msg ) {
               var sss = JSON.stringify (msg)
  
               $('#population').text(sss);
                });
  
                request.fail(function( jqXHR, textStatus ) {
                  alert( "Request failed: " + textStatus );
                }); 
          }; 