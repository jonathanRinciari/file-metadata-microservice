/*global $*/

$(document).ready(
  function(){
    $('#input').change(function(){
        if($(this).val()){
          $('button').removeAttr('disabled')
        }
        
    })
  }
)