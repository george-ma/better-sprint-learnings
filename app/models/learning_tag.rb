class LearningTag < ApplicationRecord
  # Validations
  validates_presence_of :learning, :tag

  # Relations
  belongs_to :learning
  belongs_to :tag
end
