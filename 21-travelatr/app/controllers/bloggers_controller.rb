class BloggersController < ApplicationController
  def index
    @bloggers = Blogger.all
  end

  def show
    @blogger = Blogger.find(params[:id])
    @total_post_likes = @blogger.posts.map { |post| post.likes }.sum
    @featured_post = @blogger.posts.max_by { |post| post.likes }
  end

  def new
    @blogger = Blogger.new
  end

  def create
    blogger = Blogger.create blogger_params
    if blogger.valid?
      redirect_to blogger
    else
      redirect_to new_blogger_path
    end
  end

  private

  def blogger_params
    params.require(:blogger).permit(:age, :bio, :name)
  end
end
