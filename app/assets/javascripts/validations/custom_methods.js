$.validator.addMethod('verifyDomainNameAvailability', (function(value, element) {
  var isSuccess = true; 
  $.ajax({ url: "/is_domain_available/", 
    data: { organization_name: value }, 
    async: true, 
    success: 
        function(data) { 
        	debugger
        	isSuccess = data.issuccess; 
        }
  });
  isSuccess;
}), 'Domain is not available');
