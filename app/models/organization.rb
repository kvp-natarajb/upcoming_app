class Organization < ApplicationRecord
  belongs_to :user
  has_one :profile, inverse_of: :organization, dependent: :destroy
  has_one :address, inverse_of: :organization, dependent: :destroy

  accepts_nested_attributes_for :profile
  accepts_nested_attributes_for :address

  validates :org_name, presence: true, length: { maximum: 30 }
  validates :org_identifier, presence: true, length: { maximum: 30 }, format: { with: /\A[a-zA-Z0-9_]+\z/ }
end
