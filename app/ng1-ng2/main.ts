import { Ng2Service } from './ng2.service';
import { Ng2ItemComponent } from './ng2-item.component';
import { AppComponent } from './app.component';
import upgradeAdapter from './upgradeAdapter';

upgradeAdapter.addProvider(Ng2Service);

angular.element(document).ready(() => { 
    let app = angular.module('ng1ng2');

    app.factory('ng2Service', upgradeAdapter.downgradeNg2Provider(Ng2Service));
    app.directive('ng2Item', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(Ng2ItemComponent));
    app.directive('ng2App', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(AppComponent));

    upgradeAdapter.bootstrap(document.documentElement, ['ng1ng2']).ready(() => {
        console.log('Hybrid Angular application bootstrapped with Upgrade Adapter.');
    });
});