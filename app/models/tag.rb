class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :learning_tags
  has_many :learnings, :through => :learning_tags
end
