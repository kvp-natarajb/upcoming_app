Rails.application.routes.draw do
  devise_for :users

  root "dashboard#home"

  get "admins" => "admins#index", as: :admins

  resources :organizations, only: [:new, :create]
  get '/is_domain_available' => 'organizations#is_domain_available'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
