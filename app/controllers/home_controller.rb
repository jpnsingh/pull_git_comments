class HomeController < ApplicationController

  include HomeHelper

  def index

  end

  def about

  end

  def get_comments
    client = authenticate_user

    @params = pull_request_params
    @comments = client.issue_comments(@params[:repo], @params[:id]).reverse

    render 'pull_request/show'
    # render 'home/index'
  end

  private
  def pull_request_params
    params.require(:pull_request).permit(:repo, :id)
  end

end
