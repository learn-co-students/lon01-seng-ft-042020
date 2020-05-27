Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :questions, only: [:create]
  resources :users, only: [:create]

  # post '/users', to: 'users#create'

  get :'random-question', to: 'questions#new'
  get '/start-over', to: 'questions#start_over'

  get '/sign-in', to: 'users#sign_in'
  get '/sign-out', to: 'users#sign_out'

end
