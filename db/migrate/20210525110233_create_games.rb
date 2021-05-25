class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.text :description
      t.string :name
      t.string :partial_name

      t.timestamps
    end
  end
end
