Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'learnings/index'
      post 'learnings/create'
      get '/show/:id', to: 'learnings#show'
      delete '/destroy/:id', to: 'learnings#destroy'
    end
  end
  root 'home#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
