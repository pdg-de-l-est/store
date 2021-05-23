import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = ' https://pdg-est.sts-sio-caen.info/rest';
}
