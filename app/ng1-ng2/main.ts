import { Ng2Service } from './ng2.service';
import { Ng2DirectiveComponent } from './ng2-directive.component';
import { AppComponent } from './app.component';
import upgradeAdapter from './upgradeAdapter';

upgradeAdapter.addProvider(Ng2Service);

angular.element(document).ready(() => { 
    let app = angular.module('ng1ng2');

    app.factory('ng2Service', upgradeAdapter.downgradeNg2Provider(Ng2Service));
    app.directive('ng2Directive',<angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(Ng2DirectiveComponent));
    app.directive('myApp', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(AppComponent));

    upgradeAdapter.bootstrap(document.documentElement, ['ng1ng2']);
});