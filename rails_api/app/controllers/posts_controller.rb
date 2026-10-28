class PostsController < ApplicationController
  def index
    posts = Post.order(pdateposted: :desc)
    render json: posts
  end

  def show
    post = Post.find(params[:id])

    render json: post.as_json.merge(
      comments: post.comments.as_json
    )
  end
end