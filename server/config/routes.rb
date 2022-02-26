Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  
  resources :users
  resources :products
end
