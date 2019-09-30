# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

9.times do |i|
  Learning.create(
    name: "Learning #{i + 1}",
    tags: 'ItemDataPlatform, idp-admin',
    description: 'Test Description'
  )
end