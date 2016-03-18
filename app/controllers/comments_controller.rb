class CommentsController < ApplicationController
  include CommentsHelper

  def comments
    @org = params[:org]
    @repo = params[:repo]
    @number = params[:id]

    @comments = get_comments("#{@org}/#{@repo}", @number)

    render 'comments/show'
  end

end
