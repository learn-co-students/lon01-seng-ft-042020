Rails.application.routes.draw do
  get "destinations/Posts"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :bloggers, only: [:index, :create, :show, :new]
  resources :posts, only: [:show]
  resources :destinations, only: [:show]

  # this is cool
  get "/posts/:id/like", to: "posts#like", as: "like_post"
end
