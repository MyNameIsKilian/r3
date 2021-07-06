class UsersController < ApplicationController
  def show
    @user = current_user
    @rounds = @user.rounds
    @researches = @user.researches.length
    @points = 0
    @rounds.each do |round|
      @points += round.score 
    end
  end
end
