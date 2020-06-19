
function validateFormLogin() {
  var min_length = 20;
  var max_length = 50;
  var error_message = "";

  var val_length = $("#domain-text").val().length;
  if (val_length > 0) {
    if (val_length < min_length) {
      error_message = "Wallet address is invalid! Enter correct wallet address. ";
      $("#result").html(error_message);
      return false;
    }
    if (val_length > max_length) {
      error_message = "Wallet address is invalid! Enter correct wallet address. ";
      $("#result").html(error_message);
      return false;
    }
    var validAddress = WAValidator.validate($("#domain-text").val(), 'dogecoin');
    if (validAddress) {
      success_message = "Logging In...";
      $("#result").text(success_message);
      return true;
    } else {
      error_message = "Wallet address is invalid! Enter correct wallet address.";
      $("#result").html(error_message);
      return false;
    }
  } else {
    error_message = "Wallet address is required.";
    $("#result").text(error_message);
    return false;
  }
}
//Counter
$(document).ready(function() {
  var speed = (parseFloat(800.38909) / 1).toFixed(8);
  setInterval(function() {
    var oldvalue = parseFloat($('#bal').html()).toFixed(8);
    var result = parseFloat(parseFloat(oldvalue) + parseFloat(speed / 10)).toFixed(8);
    $("#bal").html(result);
  }, 100); //1000
});
//Wallet show
function go_show_address() {
  $('#show_address').html('isi address DOge lu');
}
    