// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import jQuery from "jquery";
import "@hotwired/turbo-rails"
import "controllers"
import 'bootstrap'

// NOTE: make jQuery global if needed
window.$ = window.jQuery = jQuery;

console.log($); // ok
