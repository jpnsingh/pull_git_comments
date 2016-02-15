require 'octokit'

module HomeHelper
  def authenticate_user
    # Octokit.configure do |c|
    #   c.login = 'jpnsingh'
    #   c.password = '****'
    # end

    Octokit::Client.new(:access_token => "96d38330c6fb4e930882cc26a2e77d29e68a9836")
  end
end
