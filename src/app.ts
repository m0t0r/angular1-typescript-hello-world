import { HelloWorldDirective } from './hello-world/hello-world';

angular
  .module('app', [])
  .directive('helloWorld', HelloWorldDirective.instance);
