Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: %i[create]
      post "/login", to: "auth#create"
      get "/profile", to: "users#profile"
      get '/all_users', to: "users#index"
    end
  end
end
