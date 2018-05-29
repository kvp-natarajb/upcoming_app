class OrganizationsController < ApplicationController

	before_action :authenticate_user!

	def new
		@organization = current_user.build_organization
		@organization.build_profile
		@organization.build_address
	end

	def create
		@organization = current_user.build_organization(organization_params)

		respond_to do |format|
			if @organization.save
				format.html { redirect_to root_url, notice: 'Organization was successfully created.' }
        		format.json { render :show, status: :created, location: @task }
        	else
        		format.html { render :new }
        		format.json { render json: @organization.errors, status: :unprocessable_entity }
			end
		end
	end 

	def is_domain_available
		status = Organization.find_by(org_name: params["organization_name"]).blank?
	    render json: { issuccess:  status }
	end

	private

	def organization_params
		params.require(:organization).permit(:org_name, :org_identifier, profile_attributes: [:first_name, :last_name], address_attributes: [:line1, :line2, :city, :state, :country, :zipcode])
	end

end
