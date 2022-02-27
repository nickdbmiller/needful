Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'

  resources :users do
    resources :favorites
  end

  get '/users/:user_id/favorites', to: 'favorites#get_user_favorites'

  resources :products do
    resources :reviews
  end

  get '/reviews', to: 'reviews#get_all_reviews'
end
