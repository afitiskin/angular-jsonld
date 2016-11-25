import angular from 'angular';
import 'angular-mocks';
import jsonld from '../src';

describe('ld+json component', () => {
  let $compile;
  let $scope;

  beforeEach(angular.mock.module(jsonld));

  beforeEach(angular.mock.inject(($injector) => {
    $compile = $injector.get('$compile');
    $scope = $injector.get('$rootScope').$new();
  }));

  it('Should works properly', () => {
    $scope.data = {
      test: 'passed',
    };
    const element = $compile('<jsonld data="data"></jsonld>')($scope);
    $scope.$digest();

    expect(element[0].firstChild.tagName).toEqual('SCRIPT');
    expect(element[0].firstChild.textContent).toEqual(JSON.stringify($scope.data));
    expect(element[0].firstChild.type).toEqual('application/ld+json');

    expect(jsonld).toEqual('jsonld');
  });
});
