# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

helps_yaml = YAML.load_file(Rails.root.join('config','locales','help.yml'))
helps_yaml.map{|help| Help.create(title: help.first, text: help.second['text'])}
seed_file = File.new(Rails.root.join('public','seed.txt')
Parser.new(seed_file)
MatchMaker.new
