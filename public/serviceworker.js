// serviceworker.js

// Network Only strategy
import {registerRoute} from 'workbox-routeing';
import {NetworkOnly} from 'workbox-strategies';

registerRoute(
  new NetworkOnly()
);
