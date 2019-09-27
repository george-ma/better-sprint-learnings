class CreateLearnings < ActiveRecord::Migration[5.2]
  def change
    create_table :learnings do |t|
      t.string :name, null: false
      t.text :tags, null: false
      t.text :description, null: false
      t.timestamps
    end
  end
end
