class CreateLearningsTagsJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :learnings, :tags
  end
end
