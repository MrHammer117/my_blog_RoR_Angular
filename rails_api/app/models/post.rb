class Post < ApplicationRecord
  self.table_name = "posts"
  self.primary_key = "pID"

  has_many :comments,
           foreign_key: "cpID",
           primary_key: "pID"
end