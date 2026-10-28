class Comment < ApplicationRecord
  self.table_name = "comments"
  self.primary_key = "cID"

  belongs_to :post,
             foreign_key: "cpID",
             primary_key: "pID",
             optional: true
end