class CreateCustomersAndReceiptsTableAndAddPriceColumnToBooksTable < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.string :name
    end

    create_table :receipts do |t|
      t.integer :customer_id
      t.integer :book_id
    end

    add_column :books, :price, :integer
  end
end
