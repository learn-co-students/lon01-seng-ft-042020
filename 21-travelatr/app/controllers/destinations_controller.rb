class DestinationsController < ApplicationController
  def show
    @destination = Destination.find(params[:id])
    @most_recent_posts = @destination.posts.max_by(3) { |p| p.created_at }
    @featured_post = @destination.posts.max_by { |p| p.likes }
    @avg_blogger_age = @destination.avg_blogger_age
  end
end
