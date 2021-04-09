function armDor(buscado) {  

    this.buscado = buscado;
    this.buscadoMayus = buscado.replace(/\b\w/g, l => l.toUpperCase());
    this.buscadoAbajo = this.buscadoMayus.replace(/ /g,"_");

}

function wikiBusca(buscara) {  

    let lang = $('#idioma').val();
    let urla;

        if(buscara == 0){urla = "https://"+lang+".wikipedia.org/api/rest_v1/page/random/html"; } 
        else { urla = "https://"+lang+".wikipedia.org/api/rest_v1/page/html/"+buscara; }

        $.ajax({
            
            url: urla,
            method: "GET"

        }).done(function(response){

            $('bodyRest').html(response);

        }).fail(function(){
            
            $('bodyRest').html("<center> '"+buscara+"' no dio resultados <center>");

        });

}

function loadPage(){

    $('bodyRest').html('<center> Un momento, se esta buscando </center>');

        let pre = $('#buscador').val();
        let vars = new armDor(pre);
        new wikiBusca(vars.buscadoAbajo);

}

