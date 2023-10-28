Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'pages#home'

  get 'about_me', to: 'pages#about_me'
  get 'projects', to: 'pages#projects'
end
