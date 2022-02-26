class AddReviewColumnToUser < ActiveRecord::Migration[7.0]
  def change
    add_reference :users, :reviews, foreign_key: true
  end
end
