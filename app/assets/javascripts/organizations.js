//= require validations/custom_methods

$(document).ready(function(){
  validate_form();
  generate_identifier();
  duplicate_check();
})



function generate_identifier(){
  $('#organization_org_name').keyup(function(){
    var identifier = $(this).val().replace(/[^a-z0-9_]/gi, ' ').replace(/\s{1,}/g, '_').toLowerCase();
    $("#organization_org_identifier").val(identifier);
  });
}


function duplicate_check(){
  $(':input[name="organization[org_name]"]').rules("add",
  {
    remote:
    {
        url: '/is_domain_available/',
        data:
        {
            organization_name: function()
            {
                return $('#new_organization :input[name="organization[org_name]"]').val();
            }
        }
    },
    messages: {
      remote: 'Domain is not available'
    }
  });
}




function validate_form(){

  $('.new_organization').validate({
    onkeyup: false,
    errorClass: 'state-error',
    validClass: 'state-success',
    errorElement: 'em',
    rules: {
      'organization[org_name]': {
        required: true,
        minlength: 2,
        maxlength: 30
      },
      'organization[profile_attributes][first_name]': {
        required: true,
        minlength: 3,
        maxlength: 30
      },
      'organization[profile_attributes][last_name]': {
        required: true,
        maxlength: 30
      },
      'organization[address_attributes][line1]': {
        required: true,
        maxlength: 30
      },
      'organization[address_attributes][line2]': {
        required: true,
        maxlength: 30
      },
      'organization[address_attributes][city]':{
        required: true,
        maxlength: 30
      },
      'organization[address_attributes][state]':{
        required: true,
        maxlength: 30
      },
      'organization[address_attributes][country]':{
        required: true,
        maxlength: 30
      },
      'organization[address_attributes][zipcode]':{
        required: true,
        minlength: 6
      }
    },
    messages: {
      'organization[org_name]': {
        required: 'Please enter organization name',
        minlength: 'should have minimum 2 characters.',
        maxlength: 'should be less than 30 characters.'
      },
      'organization[profile_attributes][first_name]': {
        required: 'Please enter first name',
        maxlength: 'should not be more than 30 characters.'
      },
      'organization[profile_attributes][last_name]': {
        required: 'Please enter last name'
      },
      'organization[address_attributes][line1]': {
        required: 'Please enter address line1',
        maxlength: 'should not be more than 30 characters.'
      },
      'organization[address_attributes][line2]': {
        required: 'Please enter address line2',
        maxlength: 'should not be more than 30 characters.'
      },
      'organization[address_attributes][city]':{
        required: 'Please enter city',
        maxlength: 'should not be more than 30 characters.'
      },
      'organization[address_attributes][state]':{
        required: 'Please enter state',
        maxlength: 'should not be more than 30 characters.'
      },
      'organization[address_attributes][country]':{
        required: 'Please enter country',
        maxlength: 'should not be more than 30 characters.'
      },
      'organization[address_attributes][zipcode]':{
        required: 'Please enter zipcode',
        maxlength: 'should not be more than 6 characters.'
      }
    },
    highlight: function(element, errorClass, validClass) {
      $(element).closest('.field').addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).closest('.field').removeClass(errorClass).addClass(validClass);
    },
    errorPlacement: function(error, element) {
      error.insertAfter(element.parent());
    }
  });

}
