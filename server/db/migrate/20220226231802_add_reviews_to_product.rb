class AddReviewsToProduct < ActiveRecord::Migration[7.0]
  def change
    add_reference :products, :reviews, foreign_key: true
  end
end
