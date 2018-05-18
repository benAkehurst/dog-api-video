(function(){
  'use strict';

  $(document).ready(function(){

    $('#getDogButton').click(function(){
      $.get("https://dog.ceo/api/breeds/image/random", function (data) {
        
        console.log(data);

        const dogUrl = data.message;

        $('#dogDisplayImage').attr('src', dogUrl);

      });
    });


  })

})();
