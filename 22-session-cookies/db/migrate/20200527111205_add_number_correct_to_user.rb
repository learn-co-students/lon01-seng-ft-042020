class AddNumberCorrectToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :number_correct, :integer, default: 0
  end
end
