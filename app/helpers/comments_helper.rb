module CommentsHelper
  include OctokitHelper

  def get_comments (repo, id)
    client = authenticate_user

    client.issue_comments(repo, id)
        .concat(client.pull_request_comments(repo, id)).reverse
  end

  def get_comments_for_range (repo, from, to)
    client = authenticate_user

    comments = []
    (from..to).each do |id|
      comment = client
                    .issue_comments(repo, id)
                    .concat(client.pull_request_comments(repo, id))
                    .reverse

      comments.concat(comment) unless comment.empty?

      binding.pry
    end
  end
end
