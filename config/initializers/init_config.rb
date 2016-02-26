# define global configs here as follows

# git global config
git_config_yml = File.read(File.join(Rails.root, "config/git_config.yml"))
GIT_CONFIG = YAML.load(ERB.new(git_config_yml).result)[Rails.env]
