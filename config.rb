###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

config[:source]             = "app"
config[:js_dir]             = "assets/javascripts"
config[:css_dir]            = "assets/stylesheets"
config[:images_dir]         = "assets/images"
config[:font_dir]           = "assets/stylesheets/fonts"

ignore 'assets/javascripts/source/*'
ignore 'assets/stylesheets/source/*'

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  config[:build_dir] = "dist"
end

# Copy all files to dist/ after build
after_build do |builder|
  FileUtils.cp_r 'files_to_copy_in_dist/.', 'dist/'
end
