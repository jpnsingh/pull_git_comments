require 'octokit'

module HomeHelper
  def authenticate_user
    Octokit::Client.new(:access_token => "****")
  end
end
