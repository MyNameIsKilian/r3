class ResearchesController < ApplicationController
  def new
    @research = Research.new
  end

  def create
    @research = Research.new(research_params)
    @research.user = current_user
    @research.category
    @research.solution
    @research.save
    redirect_to research_path(@research)
  end

  def show
    @research = Research.find(params[:id])
  end

  private

  def research_params
    params.require(:research).permit(:query)
  end
end