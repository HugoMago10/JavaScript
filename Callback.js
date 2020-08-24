var ban = false;

        function saludos (function1, function2){

            document.getElementById ('btnCambia').addEventListener('click', function(){
                ban ? function1() : function2();
                ban = !ban;
            });
        }
        
        saludos ( function(){
            console.log ("Buenos dias!");
        },function(){
            console.log ("Buenas Noches!");
        } )

        /* Haciendolo con promesas */

        let promise = new Promise ( function ( resolve, reject ){
            setTimeout ( () => resolve (), 1000 );
            // setTimeout(() => reject(new Error("Vaya!")), 1000);
        }).then (
            () => { console.log ('Exito'); },//function resolve
            function gatito(){ console.log ("Error"); },//function reject
        )

        let promise = new Promise ( (resolve, reject )=>{
            setTimeout ( reject ( new Error ('Changos! '), 1000 ) );
        }).then (
            null,
            function ( alerta ){ console.log (alerta+" Monos y Gorilas"); }
        );

            //Es lo mismo que
            https://es.javascript.info/fetch]
            //.then ( null, function ( alerta ){ console.log ( alerta ) } )
            promise.catch ( alert );

       // uso de async y await

       async function f(){
           let promesa = new Promise ( ( resolve, reject ) =>{
               setTimeout ( resolve ("Hecho!"), 1000 );
           });

           let result = await promesa; //Espera hasta que la promesa se resuelva

           alert (result);

       }

       f ();