class HomeController < ApplicationController

  include HomeHelper

  def index

  end

  def about

  end

  def get_comments
    client = authenticate_user

    @comments = client.issue_comments(pull_request_params[:repo], pull_request_params[:id]).reverse

    render 'pull_request/show'
    # render 'home/index'
  end

  private
  def pull_request_params
    params.require(:pull_request).permit(:repo, :id)
  end

end
