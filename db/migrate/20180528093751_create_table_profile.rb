class CreateTableProfile < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.string :first_name
      t.string :last_name
      t.references :organization, foreign_key: true
    end
  end
end
