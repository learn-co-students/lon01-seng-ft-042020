Rails.application.routes.draw do
  get '/players', to: 'players#index'
  patch '/players/:id', to: 'players#edit'

  post '/comments', to: 'comments#create'
  delete '/comments/:id', to: 'comments#destroy'
end
