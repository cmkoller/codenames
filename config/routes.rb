Rails.application.routes.draw do
  root "homes#welcome"
  get "/play" => "homes#index"
  get "/about" => "homes#welcome"

  namespace :api do
    namespace :v1 do
      resources :players, only: [:index, :create, :update, :destroy]
      resources :games, only: [:index, :create, :destroy]
      resources :cards, only: [:index, :update]
    end
  end
end
