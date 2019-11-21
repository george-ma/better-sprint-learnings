class Api::V1::LearningsController < ApplicationController

  # Create learning, tag, and laerning-tag relation (LearningTag) (if any)
  def create
    learning = Learning.create(name: params[:name], description: params[:description])
    
    tags = params[:tags]
    tags.each do |tagHash| # tagHash = hash of {name:"exampleTag"}
      tag = Tag.find_or_create_by(name: tagHash[:name])
      
      learningTag = LearningTag.create(learning: learning)
      tag.learning_tags << learningTag
    end

    if learning
      render json: learning
    else
      render json: learning.errors
    end
  end

  def edit
    res = Learning.where(id: params[:id]).update(name: params[:name], description: params[:description])
    if res
      render json: res
    else
      render json: res.errors
    end
    # tags = params[:tags]
    # tags.each do |tagHash| # tagHash = hash of {name:"exampleTag"}
    #   tag = Tag.find_or_create_by(name: tagHash[:name])
      
    #   learningTag = LearningTag.create(learning: learning)
    #   tag.learning_tags << learningTag
    # end

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
