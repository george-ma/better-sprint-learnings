class Api::V1::LearningsController < ApplicationController
  def learning_params
    params.permit(:name, :description)
  end

  def create
    learning = Learning.create!(learning_params)
    if learning
      render json: learning
    else
      render json: learning.errors
    end
  end

  def index
    allLearnings = Learning.all.order(created_at: :desc)
    render json: allLearnings
  end

  def learning
    @learning ||= Learning.find(params[:id])
  end

  def show
    if learning
      # render json: learning 
      render :json => learning.to_json(:include => :tags)
    else
      render json: learning.errors
    end
  end

  def destroy
    learning&.destroy # Delete a learning only if it exists
    render json: { message: 'Learning deleted!' }
  end

end
