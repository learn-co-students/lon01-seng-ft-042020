Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :questions, only: [:new, :create]
  get :'random-question', to: 'questions#new'
  get '/start-over', to: 'questions#start_over'
end
