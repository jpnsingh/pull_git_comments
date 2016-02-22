module HomeHelper

  def git_access_token
    session[:access_token] || ''
  end

  def authenticate_user
    Octokit::Client.new(:access_token => git_access_token)
  end

  def nav_bar
    true
  end
end
