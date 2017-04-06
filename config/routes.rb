Rails.application.routes.draw do
  root to: 'hello_world#index'
  get 'hello_world', to: 'hello_world#index'

  resources :candidates, only: %i(index)
end
