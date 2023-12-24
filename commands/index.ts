import {
  callPoliceRegex,
  reportCrimeRegex
} from './regexes';

import {
  activateEmergencyModeCb,
  callPoliceCb,
  deactivateEmergencyModeCb,
  dialCb,
  navigateCb,
  reportCrimeCb,
} from './callbacks';

export {
  callPoliceRegex,
  reportCrimeRegex
}

export const allCommands = [
  {
    command: 'Emergency',
    callback: activateEmergencyModeCb,
    matchInterim: true
  },
  {
    command: 'Deactivate',
    callback: deactivateEmergencyModeCb,
    matchInterim: true
  },
  {
    command: callPoliceRegex,
    callback: callPoliceCb
  },
  {
    command: reportCrimeRegex,
    callback: reportCrimeCb
  },
  {
    command: 'Dial *',
    callback: dialCb
  },
  {
    command: 'Give me directions to *',
    callback: navigateCb
  }
];

export default allCommands
