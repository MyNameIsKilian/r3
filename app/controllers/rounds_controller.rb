class RoundsController < ApplicationController
  def new
    @round = Round.new
    find_game
  end

  def create
    @round = Round.new(round_params)
    @round.user = current_user
    @round.save
  end

  private

  def find_game
    @game = Game.find(params[:game_id])
  end

  def round_params
    params.require(:round).permit(:score)
  end
end
