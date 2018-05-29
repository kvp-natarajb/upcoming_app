class Address < ApplicationRecord
	belongs_to :organization

	validates :line1, presence: true, length: { maximum: 30 }
    validates :line2, length: { maximum: 30 }
    validates :city, presence: true, length: { maximum: 30}
    validates :state, length: { maximum: 30 }
    validates :country, presence: true, length: { maximum: 30 }
    validates :zipcode, presence: true, length: { minimum: 6, maximum: 6 }
end
