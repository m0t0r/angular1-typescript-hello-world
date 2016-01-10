import { HelloWorldDirective } from './hello-world/hello-world';
var app;
(function (app) {
    angular
        .module('app', [])
        .directive('helloWorld', HelloWorldDirective.instance);
})(app || (app = {}));
