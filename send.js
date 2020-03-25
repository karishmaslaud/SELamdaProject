$(document).ready(function() {

    // Handle form submission.
    $("#submit").click(function(e) {
  
      var data = $("#YAML").val(),
      source = window.location.pathname;
      console.log(data);
      
      e.preventDefault();
      $.ajax({
          type: 'POST',
          url: 'https://k3tye3jfp2.execute-api.us-east-1.amazonaws.com/default/tryAcceptJSONInRequest',
          contentType: 'application/json',
          data: data,
          success: function(res) {
            console.log(res);
        
          },
          error: function(jqxhr, status, exception) {
            console.log(jqxhr);

          }
        });
      
    });
  });