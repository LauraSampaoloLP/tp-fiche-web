$.ajax({
    type: '',
    url: '', 
    data: '',
    success: function(data){
        if(data != ""){
            $('#section-recherche').append(data);
            }else{
            document.getElementById('section-recherche').innerHTML = "<div style='font-size: 20px; text-align: center; margin-top: 10px'>Aucune fiche trouvée</div>"
        }
    }
  });