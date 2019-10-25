class Learning < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true

  has_many :learning_tags
  has_many :tags, :through => :learning_tags
end
