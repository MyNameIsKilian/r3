Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :games, only: [:index, :show] do
    resources :rounds, only: [:new, :create]
  end

  resources :users, only: [:show]
  resources :researches, only: [:new, :create, :show]
end
