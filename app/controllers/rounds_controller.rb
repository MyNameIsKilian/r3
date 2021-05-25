class RoundsController < ApplicationController
  def new
    @round = Round.new
  end

  def create
    @round = Round.new(round_params)
    @round.user = current_user
    @round.game
    @round.save
    redirect_to round_path(@round)
  end

  private

  def round_params
    params.require(:round).permit(:score)
  end
end