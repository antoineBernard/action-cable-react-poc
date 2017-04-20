Rails.application.routes.draw do
  mount ActionCable.server => "/cable"

  root to: 'candidates#index'

  resources :candidates, only: %i(index)

  post 'update_status/:candidate_id/:status', to: 'candidates#update_status', as: :update_status
end
