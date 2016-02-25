class HomeController < ApplicationController
  include CommentsHelper

  def dashboard
    if git_access_token.nil?
      redirect_to root_path
    else
      render 'home/dashboard'
    end
  end

  def about

  end

  def comments
    @selected_pull_request = JSON.parse(pull_request_params[:pull])
    $selected_pull_request = JSON.parse(pull_request_params[:pull])

    @comments = get_comments(pull_request_params[:repo], pull_request_params[:id])

    render 'home/pull_request_comments'
  end

  private
  def pull_request_params
    params.require(:pull_request).permit(:repo, :id, :pull)
  end

end
