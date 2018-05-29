class Organization < ApplicationRecord
  belongs_to :user
  has_one :profile, inverse_of: :organization, dependent: :destroy
  has_one :address, inverse_of: :organization, dependent: :destroy

  accepts_nested_attributes_for :profile
  accepts_nested_attributes_for :address
end
