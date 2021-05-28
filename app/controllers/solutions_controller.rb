class SolutionsController < ApplicationController
  def new
    @solution = Solution.new
  end

  def create
    @solution = Solution.new(solution_params)
    @solution.object_name = object_name
    @solution.content
    @solution.category_id
    @solution.save
    redirect_to solution_path(@solution)
  end

  def show
    @solution = Solution.find(params[:id])
  end

  private

  def solution_params
    params.require(:solutions).permit(:content)
  end
end