import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';

angular
  .module('app', ['ui.router'])
  .constant('SC', '095fe1dcd09eb3d0e1d3d89c76f5618f')
  .config(config)
  .controller('HomeController', HomeController)
;