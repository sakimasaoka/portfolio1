Rails.application.routes.draw do
  root to: "top#index"

  resources :blog, only: :index
end
