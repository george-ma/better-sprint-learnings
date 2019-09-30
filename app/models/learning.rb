class Learning < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true

  has_and_belongs_to_many :tags
end
