class ResearchesController < ApplicationController
  def new
    @research = Research.new
    @categories = Category.all
  end

  def create
    if params[:research][:query].present?
      @research = Research.new(research_params)
      @research.user = current_user
      @research.solution = Solution.search_by_category_name(@research.category.name).search_by_object_name(@research.query).first
      if @research.save
        redirect_to research_path(@research)
      else
        render :new
      end
    end
  end

  def show
    @research = Research.find(params[:id])
  end

  private

  def research_params
    params.require(:research).permit(:query, :category_id)
  end
end
