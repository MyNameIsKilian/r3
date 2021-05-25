class CreateResearches < ActiveRecord::Migration[6.0]
  def change
    create_table :researches do |t|
      t.references :user, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true
      t.references :solution, null: false, foreign_key: true
      t.string :query

      t.timestamps
    end
  end
end
