var jsonldController = {};

module.exports = angular.module('jsonld', [])
  .component('jsonld', {
    controller: function () {
      this.$onChanges = function () {
        this.json = JSON.stringify(this.data);
      };
    },
    controllerAs: '$ctrl',
    bindings: {
      data: '<',
    },
    template: '<script type="application/ld+json" ng-bind="$ctrl.json"></script>',
  })
  .name;

