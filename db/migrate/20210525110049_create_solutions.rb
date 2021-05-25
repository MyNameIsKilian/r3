class CreateSolutions < ActiveRecord::Migration[6.0]
  def change
    create_table :solutions do |t|
      t.string :object_name
      t.text :content
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
