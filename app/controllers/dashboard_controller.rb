class DashboardController < ApplicationController
  
  before_action :authenticate_user!

  def home
  	if current_user.organization.nil?
  		redirect_to new_organization_path
  	end
  end

end
