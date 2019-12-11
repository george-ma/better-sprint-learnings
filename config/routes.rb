Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'learnings/index'
      post 'learnings/create'
      # The constraint allows tagName to include periods
      get 'learnings/filterByTag/:tagName', to: 'learnings#filterByTag', constraints: { tagName: /[^\/]+/} 
      get '/show/:id', to: 'learnings#show'
      post '/edit/:id', to: 'learnings#edit'
      delete '/destroy/:id', to: 'learnings#destroy'
    end
  end
  root 'home#index'
  get '/*path' => 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
