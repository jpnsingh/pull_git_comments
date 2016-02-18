require 'octokit'

class CommentsService
  def authenticate_user
    Octokit::Client.new(:access_token => "****")
  end
end

service = CommentsService.new
client = service.authenticate_user

user = client.user

# p user
puts 'login: ' + user.login
puts 'name: ' + user.name
puts 'email: ' + user.email
puts 'location: ' + user.location
puts 'org url: ' + user.organizations_url
puts 'repos url: ' + user.repos_url

puts '*********************************************************************'

client.issue_comments("octocat/Spoon-Knife", 1176).each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]

  puts "#{username} made a comment on #{post_date}. It says:\n'#{content}'\n"
end

puts '*********************************************************************'

client.issue_comments("jpnsingh/branch-merge-demo", 1).each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]

  puts "#{username} made a comment on #{post_date}. It says:\n'#{content}'\n"
end

puts '*********************************************************************'

comments = client.pull_request_comments("OnlifeHealth/liveon", 2006)
# comments = client.issue_comments("OnlifeHealth/liveon", 2006)

puts comments.empty?

comments.each do |comment|
  p comment
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]

  puts "#{username} made a comment on #{post_date}. It says:\n'#{content}'\n"
end
