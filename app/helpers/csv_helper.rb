module CsvHelper
  require 'csv'

  def convert_to_csv (headers, comments, mappers, options = {})
    CSV.generate(options) do |csv|
      csv << headers
      comments.each do |comment|
        csv << [
            @repo_full_name,
            @pull_id,
            hyperlink($selected_pull_request['html_url'], "#{@repo_full_name}/#{@pull_id}"),
            $selected_pull_request['user']['login'],
            comment.user.login,
            comment.body,
            hyperlink(comment.html_url, "View in Github"),
            comment.created_at.strftime('%F'),
            comment.created_at.strftime('%T')
        ]
      end
    end
  end

  private
  def hyperlink (url, name)
    "=HYPERLINK(\"#{url}\", \"#{name}\")"
  end
end
