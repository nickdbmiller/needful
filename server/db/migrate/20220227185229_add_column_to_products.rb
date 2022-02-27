class AddColumnToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :img_alt, :text
  end
end
