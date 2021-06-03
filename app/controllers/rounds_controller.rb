class RoundsController < ApplicationController
  def new
    @round = Round.new
    @game = Game.find(params[:game_id])
  end

  def create
    @round = Round.new(round_params)
    @round.user = current_user
    @round.score = 100
    @game = Game.find(params[:game_id])
    @round.game = @game
    redirect_to game_path(@game) if @round.save
  end

  private

  def round_params
    params.require(:round).permit(:score)
  end
end
