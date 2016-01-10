///<reference path="../../typings/angularjs/angular.d.ts"/>
var app;
(function (app) {
    var helloWorld;
    (function (helloWorld) {
        'use strict';
        var HelloWorldController = (function () {
            function HelloWorldController() {
            }
            HelloWorldController.prototype.sayHelloWorld = function () {
                console.log('Hello ' + this.name);
            };
            return HelloWorldController;
        })();
        var HelloWorldDirective = (function () {
            function HelloWorldDirective() {
                this.restrict = 'E';
                this.controller = HelloWorldController;
                this.controllerAs = 'vm';
                this.scope = {};
                this.template = "<div>Hello {{ vm.name }}</div>";
            }
            HelloWorldDirective.instance = function () {
                return new HelloWorldDirective;
            };
            HelloWorldDirective.prototype.link = function (scope, el, attrs, ctrl) {
                ctrl.name = attrs.name || 'World';
                el.on('mouseover', function () {
                    ctrl.sayHelloWorld();
                });
            };
            return HelloWorldDirective;
        })();
        helloWorld.HelloWorldDirective = HelloWorldDirective;
    })(helloWorld = app.helloWorld || (app.helloWorld = {}));
})(app || (app = {}));
