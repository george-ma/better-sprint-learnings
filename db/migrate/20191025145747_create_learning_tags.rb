class CreateLearningTags < ActiveRecord::Migration[5.2]
  def change
    create_table :learning_tags do |t|

      t.belongs_to :learning
      t.belongs_to :tag
      t.timestamps
    end
  end
end
