///<reference path="../../typings/angularjs/angular.d.ts"/>

'use strict';

interface IHelloWorldController {
  name: string;

  sayHello(): void;
}

class HelloWorldController implements IHelloWorldController {
  name: string;

  constructor() {
    this.name = 'World';
  }

  sayHello() {
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
  bindToController = true;
  template = `<div>Hello {{ vm.name }}</div>`;

  link(scope: ng.IScope, el: ng.IAugmentedJQuery, attrs: IAttributes, ctrl: HelloWorldController) {

    el.on('mouseover', (): void => {
      ctrl.sayHello();
    });
  }
}
