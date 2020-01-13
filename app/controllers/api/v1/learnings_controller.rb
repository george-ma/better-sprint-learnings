class Api::V1::LearningsController < ApplicationController
  def learning
    @learning ||= Learning.find(params[:id])
  end

  def learning_tags
    @learning_tags ||= LearningTag.where(learning_id: params[:id])
  end

  def create_tags(learning)
    tags = params[:tags]
    tags.each do |tagHash| # tagHash = hash of {name:"exampleTag"}
      tag = Tag.find_or_create_by(name: tagHash[:name])
      
      # Prevent duplicate learning_tags to be created
      if !LearningTag.find_by(learning_id: learning.id, tag_id: tag.id)
        learningTag = LearningTag.create(learning: learning)
        tag.learning_tags << learningTag
      end
    end
  end

  # Create learning, tag, and learning-tag relation (LearningTag) (if any)
  def create
    learning = Learning.create(name: params[:name], description: params[:description].to_json)
    create_tags learning

    if learning
      render json: learning
    else
      render json: learning.errors
    end
  end

  def edit
    res = Learning.where(id: params[:id]).update(name: params[:name], description: params[:description])

    learning_tags&.destroy_all
    create_tags res.first

    if res
      render json: res
    else
      render json: res.errors
    end
  end

  def index
    allLearnings = Learning.all.order(created_at: :desc)
    render json: allLearnings
  end

  def filterByTag
    filteredLearnings = Learning.joins(:tags).where(tags: { name: params[:tagName]})

    if filteredLearnings
      render json: filteredLearnings
    else
      render json: filteredLearnings.errors
    end
  end

  def show
    if learning
      render :json => learning.to_json(:include => :tags)
    else
      render json: learning.errors
    end
  end

  def destroy
    learning&.destroy # Delete a learning only if it exists
    learning_tags&.destroy_all
    render json: { message: 'Learning deleted!' }
  end

end
