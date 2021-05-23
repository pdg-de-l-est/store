import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = ' http://pdg-est-1.sts-sio-caen.info/rest';
}
