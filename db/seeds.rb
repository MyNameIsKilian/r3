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

kiki = User.new(first_name: "Kilian", last_name: "forever", email: "kiki@gmail.com", password: "secret", phone_number: "0600000001")
kiki.save!

soso = User.new(first_name: "Soso", last_name: "Forever", email: "soso@gmail.com", password: "secret", phone_number: "0600000002")
soso.save!

puts 'Creating games!'
game1 = Game.new(partial_name: 'partial_games/tetris', name: 'Tetris', description: 'Déplace les déchets dans les bonnes poubelles ! Poubelle jaune: plastique et papier, poubelle bleue: verre, poubelle verte: déchets verts.')
game1.save!

game2 = Game.new(name: 'Angry Trash', description: 'Vise et jette les déchets dans la poubelle pour marquer un maximum de points !')
game2.save!

game3 = Game.new(name: 'World of Wartrash', description: 'Commence une aventure hors du commun dans un monde de déchets. Améliore ta poubelle et défis les autres joueurs.')
game3.save!

puts "Creating rounds for kiki"

r1 = Round.new(game: game1, user: kiki, score: 1000)
r1.save!

r2 = Round.new(game: game1, user: kiki, score: 1)
r2.save!

puts 'Creating categories!'
category1 = Category.new(name: 'plastique')
category1.save!

category2 = Category.new(name: 'carton')
category2.save!

category3 = Category.new(name: 'verre')
category3.save!

category4 = Category.new(name: 'papier')
category4.save!

category5 = Category.new(name: 'aluminium')
category5.save!

category6 = Category.new(name: 'bambou')
category6.save!

category7 = Category.new(name: 'textile')
category7.save!

solutions = File.read(Rails.root.join("lib", "seeds", "R3-recyclage.csv"))
csv_options = { headers: :first_row }
csv = CSV.parse(solutions, csv_options)
csv.each do |row|
  t = Solution.new
  t.object_name = row["object_name"]
  t.content = row["content"]
  t.category = Category.find(row["category_id"].to_i)
  t.save!
end

puts "Seed finished"


