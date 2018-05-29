class AdminsController < ApplicationController

	before_action :verify_admin_or_not

	def index
		if params[:org_name] || params[:created_by] || params[:country]
			@organizations = Organization.paginate(:page => params[:page], :per_page => 30).joins(:user, :address).where('email = ? OR country = ? OR org_name = ?', params[:created_by], params[:country], params[:org_name])
		else 
			@organizations = Organization.paginate(:page => params[:page], :per_page => 30)
		end
	end

	private

	def verify_admin_or_not
		unless current_user.is_admin
			flash[:notice] = 'You are not authorized to view this page.' 
	      	redirect_to root_path
	    end
	end

end
