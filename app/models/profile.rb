class Profile < ApplicationRecord
	belongs_to :organization

	validates :first_name, presence: true, length: { minimum: 3, maximum: 30 }
    validates :last_name, presence: true, length: { maximum: 50 }
    
end
