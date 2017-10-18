Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/games/rescue/:level' => 'games#rescue', as: :games_rescue

  post '/games/rescue/hakoirisolver' => 'games#hakoirisolver', as: :games_rescue_hakoirisolver
end
