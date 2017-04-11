Rails.application.routes.draw do
  root to: 'hello_world#index'
  get 'hello_world', to: 'hello_world#index'

  resources :candidates, only: %i(index)

  post 'next_step/:candidate_id',     to: 'candidates#next_step',     as: :next_step
  post 'previous_step/:candidate_id', to: 'candidates#previous_step', as: :previous_step
end
