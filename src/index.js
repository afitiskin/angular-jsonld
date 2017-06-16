class jsonldController {
  static template = '<script type="application/ld+json" ng-bind="$ctrl.json"></script>';
  static controllerAs = '$ctrl';
  static bindings = {
    data: '<',
  };

  $onChanges() {
    this.json = JSON.stringify(this.data);
  }
}

export default angular.module('jsonld', [])
  .component('jsonld', {
    controller: jsonldController,
    controllerAs: jsonldController.controllerAs,
    bindings: jsonldController.bindings,
    template: jsonldController.template,
  })
  .name;
