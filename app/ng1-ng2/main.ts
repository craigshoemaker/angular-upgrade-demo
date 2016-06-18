import { UpgradeAdapter } from '@angular/upgrade';
import { Ng2Service } from './ng2.service';

let upgradeAdapter = new UpgradeAdapter();
upgradeAdapter.addProvider(Ng2Service);

angular.module('ng1ng2')
       .factory('ng2Service', upgradeAdapter.downgradeNg2Provider(Ng2Service));

upgradeAdapter.bootstrap(document.documentElement, ['ng1ng2']);