# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts 'Creating  user!'
valentina = User.new(first_name: "Valentina", last_name: "forever", email: "valentina@gmail.com", password: "secret", phone_number: "0600000000")
valentina.save!

kiki = User.new(first_name: "Kiki", last_name: "forever", email: kiki@gmail.com, password: "secret", phone_number: "0600000001")
kiki.save!

soso = User.new(first_name: "Soso", last_name: "Forever", email: soso@gmail.com, password: "secret", phone_number: "0600000002")
soso.save!

puts 'Creating games. !.'
game1 = Game.new(name: 'Tetris', description: '')
game1.save!

game2 = Game.new(name: 'Follow the right road', description: '')
game2.save!

game3 = Game.new(name: 'Foolish sorting', description: '')
game3.save!

puts "Seed finished"

