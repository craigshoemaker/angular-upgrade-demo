import upgradeAdapter from './upgradeAdapter';

const ng1Item = upgradeAdapter.upgradeNg1Component('ng1Item');
const ng1Service = upgradeAdapter.upgradeNg1Provider('ng1Service');

export const NG1_COMPONENTS = {
  "ng1Item": ng1Item,
  "ng1Service": ng1Service
};