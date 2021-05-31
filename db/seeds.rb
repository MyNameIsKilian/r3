# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

puts 'Creating user!'
valentina = User.new(first_name: "Valentina", last_name: "forever", email: "valentina@gmail.com", password: "secret", phone_number: "0600000000")
valentina.save!

kiki = User.new(first_name: "Kiki", last_name: "forever", email: "kiki@gmail.com", password: "secret", phone_number: "0600000001")
kiki.save!

soso = User.new(first_name: "Soso", last_name: "Forever", email: "soso@gmail.com", password: "secret", phone_number: "0600000002")
soso.save!

puts 'Creating games!'
game1 = Game.new(name: 'Tetris', description: 'Tetris challenges you to make complete lines by moving pieces of different shapes, the tetrominoes, which scroll from the top to the bottom of the screen.')
game1.save!

game2 = Game.new(name: 'Follow the right road', description: 'In turn, this game allows you to deposit one of the waste in the appropriate garbage can.')
game2.save!

game3 = Game.new(name: 'Foolish sorting', description: 'à voir')
game3.save!

puts 'Creating categories!'
category1 = Category.new(name: 'plastic')
category1.save!

category2 = Category.new(name: 'box')
category2.save!

category3 = Category.new(name: 'glass')
category3.save!

category4 = Category.new(name: 'packaging and paper')
category4.save!

category5 = Category.new(name: 'aluminium')
category5.save!

solution1 = Solution.new(object_name: "carton", category: category1, content: "solution")
solution1.save!
research = Research.new(user: kiki, category: category1, solution: solution1, query: "carton")
research.save!

solutions = File.read(Rails.root.join("lib", "seeds", "R3-recyclage.csv"))
csv_options = { headers: :first_row }
csv = CSV.parse(solutions, csv_options)
csv.each do |row|
  t = Solution.new
  t.object_name = row["object_name"]
  t.content = row["content"]
  puts row["category_id"]
  t.category = Category.find(row["category_id"].to_i)
  t.save!
end

puts "Seed finished"


