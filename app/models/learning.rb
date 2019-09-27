class Learning < ApplicationRecord
  validates :name, presence: true
  validates :tags, presence: true
  validates :description, presence: true
end
