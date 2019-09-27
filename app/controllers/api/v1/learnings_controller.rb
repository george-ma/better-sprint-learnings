class Api::V1::LearningsController < ApplicationController
  def index
    learning = Learning.all.order(created_at: :desc)
    render json: learning
  end

  def create
    learning = Learning.create!(learning_params)
    if learning
      render json: learning
    else
      render json: learning.errors
    end
  end

  def show
    if learning
      render json: learning
    else
      render json: learning.errors
    end
  end

  def destroy
    learning&.destroy # Delete a learning only if it exists
    render json: { message: 'Learning deleted!' }
  end

  def learning_params
    params.permit(:name, :tags, :description)
  end

  def learning
    @learning ||= Learning.find(params[:id])
  end
end
