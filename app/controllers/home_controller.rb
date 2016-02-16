class HomeController < ApplicationController

  include HomeHelper

  def index

  end

  def about

  end

  def comments
    client = authenticate_user

    @params = pull_request_params
    @comments = client.issue_comments(@params[:repo], @params[:id])
                    .concat(client.pull_request_comments(@params[:repo], @params[:id])).reverse

    render 'home/pull_request_comments'
  end

  private
  def pull_request_params
    params.require(:pull_request).permit(:repo, :id)
  end

end
