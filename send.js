$(document).ready(function() {

    // Handle form submission.
    $("#submit").click(function(e) {
  
      var firstName = $("#YAML").val(),
          source = window.location.pathname
         ;
  
      e.preventDefault();
  
    $('#submit').prop('disabled', true);
    $('#submit').html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>  Saving your preferences</button>');
  
        
        var data = JSON.stringify({
          firstName
          });
  
        $.ajax({
          type: 'POST',
          url: 'https://k3tye3jfp2.execute-api.us-east-1.amazonaws.com/default/tryAcceptJSONInRequest',
          contentType: 'application/json',
          data: data,
          success: function(res) {
            $('#form-response').html('<div class="mt-3 alert alert-success" role="alert"><p>Congratulations! You&apos;ve successfully registered for SMS Alerts from ExampleCorp.</p><p>We just sent you a message. Follow the instructions in the message to confirm your subscription. We won&apos;t send any additional messages until we receive your confirmation.</p><p>If you decide you don&apos;t want to receive any additional messages from us, just reply to one of our messages with the keyword STOP.</p></div>');
            $('#submit').prop('hidden', true);
            $('#submit').text('Preferences saved!');
          },
          error: function(jqxhr, status, exception) {
            $('#form-response').html('<div class="mt-3 alert alert-danger" role="alert">An error occurred. Please try again later.</div>');
            $('#submit').text('Save preferences');
            $('#submit').prop('disabled', false);
          }
        });
      
    });
  });