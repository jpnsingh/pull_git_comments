module CommentsHelper
  include OctokitHelper

  def get_comments (repo, id)
    client = authenticate_user

    client.issue_comments(repo, id)
        .concat(client.pull_request_comments(repo, id)).reverse
  end
end
