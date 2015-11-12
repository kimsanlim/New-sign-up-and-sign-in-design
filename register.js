$(document).ready(function(){
  $('#signUpUserInfo').css('display', 'none');
  $('#btnSignUpContinue').on('click', function(){
    console.log("click");
    if(isEmail($('#email').val())){
      $(this).css('display', 'none');
      $('.signUpUserInfo').css('display', 'block');
      $('.linkToSignIn').removeClass('pull-left');
      $('#signUpEmailValidation').css('display', 'none');
    }
    else{
      $('#signUpEmailValidation').text("Invalid email format!");
      $('#signUpEmailValidation').css('display', 'block');
    }
    if($('#email').val() == ""){
      $('#signUpEmailValidation').text("Please input your email address!");
      $('#signUpEmailValidation').css('display', 'block');
    }
  });
  $('#btnPasswordVisible').on('click', function(){
    $('#password').attr('type', 'text');
    $(this).css('display', 'none');
    $('#btnPasswordInvisible').css('display', 'block');
  });
  $('#btnPasswordInvisible').on('click', function(){
    $('#password').attr('type', 'password');
    $(this).css('display', 'none');
    $('#btnPasswordVisible').css('display', 'block');
  });

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
});