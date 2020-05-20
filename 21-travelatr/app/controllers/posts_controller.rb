class PostsController < ApplicationController
  before_action :find_post, only: [:show, :like]

  def show
  end

  def like
    @post.like
    redirect_to @post
  end

  private

  def find_post
    @post = Post.find(params[:id])
  end
end
