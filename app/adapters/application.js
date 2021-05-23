import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = ' http://pdg-est.sts-sio-caen.info/rest';
}
