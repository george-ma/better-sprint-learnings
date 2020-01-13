# Create Mock Learnings
9.times do |i|
  Learning.create(
    name: "Learning #{i + 1}"
  )
end

# Create Mock Tags
Tag.create(
  name: "item-data-platform"
)

learning = Learning.first
tag = Tag.first

# Create a learning tag for a learning, and add to tag
learningTag = LearningTag.create(learning: learning)
tag.learning_tags << learningTag