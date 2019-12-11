class ConvertTablesToSupportEmojis < ActiveRecord::Migration[5.2]
  def change
    # Set learnings and tags table to utf8mb4
    execute "ALTER TABLE learnings CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_bin"
    execute "ALTER TABLE tags CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_bin"

    # Change specific columns to 191 characters as emojis take up more bytes (cant have 255)
    execute "ALTER TABLE learnings CHANGE name name VARCHAR(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL"
    execute "ALTER TABLE tags CHANGE name name VARCHAR(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL"
  end
end
