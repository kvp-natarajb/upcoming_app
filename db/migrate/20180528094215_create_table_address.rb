class CreateTableAddress < ActiveRecord::Migration[5.0]
  def change
    create_table :addresses do |t|
      t.string :line1
      t.string :line2
      t.string :city
      t.string :country
      t.string :state
      t.integer :zipcode, limit: 6
      t.references :organization, foreign_key: true
    end
  end
end
