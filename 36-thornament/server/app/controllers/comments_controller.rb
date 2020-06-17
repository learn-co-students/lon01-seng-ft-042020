class CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: {error: comment.errors.full_messages }, status: 400
    end
  end

  def destroy
    comment = Comment.find_by(id: params[:id])
    if comment
      comment.destroy
      render json: { message: 'Comment deleted successfully.' }
    else
      render json: { error: 'Comment not found.' }, status: 404
    end
  end

  private

  def comment_params
    params.require(:comment).permit([:player_id, :content])
  end
end
