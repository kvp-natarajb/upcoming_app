$.validator.addMethod('verifyDomainNameAvailability', (function(value, element) {
  var isSuccess = false;
  $.ajax({ url: "/is_domain_available/", 
    data: { organization_name: value }, 
    async: false, 
    success: 
        function(data) { isSuccess = data.issuccess; }
  });
  return isSuccess
}), 'Domain is not available');
