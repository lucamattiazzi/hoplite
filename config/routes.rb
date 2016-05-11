Rails.application.routes.draw do

  root 'products#index'
  resources :products, param: :code, only: [:index, :show]

  post 'upload_file', to: 'tools#upload_file', as: 'upload_sales_file'
  get 'products/:code/graph_data', to: 'products#graph_data', defaults: { format: 'json' }, as: 'plot_graphs'

  get 'some_data', to: 'tickets#show_data', as: 'show_real_data'

  get 'cthulhu', to: 'tools#destroy_all', as: 'cthulhu'
  get 'logz', to: 'tools#show_logger', as: 'logs'
  get 'logs/:file', to: 'tools#log_to_ajax', as: 'ajax_logs'
end
