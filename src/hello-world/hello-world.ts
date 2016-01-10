///<reference path="../../typings/angularjs/angular.d.ts"/>

'use strict';

interface IHelloWorldController {
    name: string;

    sayHelloWorld(): void;
}

class HelloWorldController implements IHelloWorldController {
    name:string;

    constructor() {}

    sayHelloWorld() {
       console.log('Hello ' + this.name);
    }
}

interface IAttributes extends ng.IAttributes {
    name: string;
}

export class HelloWorldDirective implements ng.IDirective {

    static instance(): ng.IDirective {
        return new HelloWorldDirective;
    }

    restrict = 'E';
    controller = HelloWorldController;
    controllerAs = 'vm';
    scope = {
        name: '@'
    };
    template = `<div>Hello {{ vm.name }}</div>`;
    link(scope: ng.IScope, el: ng.IAugmentedJQuery, attrs: IAttributes, ctrl: HelloWorldController) {
        ctrl.name = attrs.name || 'World';

        el.on('mouseover', (): void => {
            ctrl.sayHelloWorld()
        })
    }
}