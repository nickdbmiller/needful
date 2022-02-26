class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :title
      t.float :price
      t.string :category
      t.text :description
      t.text :image_url

      t.timestamps
    end
  end
end
