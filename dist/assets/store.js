'use strict';



;define("store/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("store/adapters/application", ["exports", "@ember-data/adapter/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class ApplicationAdapter extends _rest.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "host", ' http://pdg-est-1.sts-sio-caen.info/rest');
    }

  }

  _exports.default = ApplicationAdapter;
});
;define("store/app", ["exports", "ember-resolver", "ember-load-initializers", "store/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("store/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("store/components/ui-accordion", ["exports", "semantic-ui-ember/components/ui-accordion"], function (_exports, _uiAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiAccordion.default;
    }
  });
});
;define("store/components/ui-checkbox", ["exports", "semantic-ui-ember/components/ui-checkbox"], function (_exports, _uiCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiCheckbox.default;
    }
  });
});
;define("store/components/ui-dimmer", ["exports", "semantic-ui-ember/components/ui-dimmer"], function (_exports, _uiDimmer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiDimmer.default;
    }
  });
});
;define("store/components/ui-dropdown", ["exports", "semantic-ui-ember/components/ui-dropdown"], function (_exports, _uiDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiDropdown.default;
    }
  });
});
;define("store/components/ui-embed", ["exports", "semantic-ui-ember/components/ui-embed"], function (_exports, _uiEmbed) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiEmbed.default;
    }
  });
});
;define("store/components/ui-modal", ["exports", "semantic-ui-ember/components/ui-modal"], function (_exports, _uiModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiModal.default;
    }
  });
});
;define("store/components/ui-nag", ["exports", "semantic-ui-ember/components/ui-nag"], function (_exports, _uiNag) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiNag.default;
    }
  });
});
;define("store/components/ui-popup", ["exports", "semantic-ui-ember/components/ui-popup"], function (_exports, _uiPopup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiPopup.default;
    }
  });
});
;define("store/components/ui-progress", ["exports", "semantic-ui-ember/components/ui-progress"], function (_exports, _uiProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiProgress.default;
    }
  });
});
;define("store/components/ui-radio", ["exports", "semantic-ui-ember/components/ui-radio"], function (_exports, _uiRadio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiRadio.default;
    }
  });
});
;define("store/components/ui-rating", ["exports", "semantic-ui-ember/components/ui-rating"], function (_exports, _uiRating) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiRating.default;
    }
  });
});
;define("store/components/ui-search", ["exports", "semantic-ui-ember/components/ui-search"], function (_exports, _uiSearch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiSearch.default;
    }
  });
});
;define("store/components/ui-shape", ["exports", "semantic-ui-ember/components/ui-shape"], function (_exports, _uiShape) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiShape.default;
    }
  });
});
;define("store/components/ui-sidebar", ["exports", "semantic-ui-ember/components/ui-sidebar"], function (_exports, _uiSidebar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiSidebar.default;
    }
  });
});
;define("store/components/ui-sticky", ["exports", "semantic-ui-ember/components/ui-sticky"], function (_exports, _uiSticky) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiSticky.default;
    }
  });
});
;define("store/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("store/controllers/dashboard/detail-commande", ["exports", "ember-group-by"], function (_exports, _emberGroupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let DashboardDetailCommandeController = (_dec = (0, _emberGroupBy.default)('model.order.orderdetails', 'sectionName'), (_class = class DashboardDetailCommandeController extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "sections", _descriptor, this);
    }

    init() {
      super.init(...arguments);
      console.log('Test');
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "sections", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = DashboardDetailCommandeController;
});
;define("store/controllers/products", ["exports", "ember-group-by"], function (_exports, _emberGroupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ProductsController = (_dec = (0, _emberGroupBy.default)('model', 'sectionName'), (_class = class ProductsController extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "sections", _descriptor, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "sections", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ProductsController;
});
;define("store/controllers/store/delete-section", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let StoreDeleteSectionController = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, (_class = class StoreDeleteSectionController extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "taille", _descriptor, this);

      _initializerDefineProperty(this, "products", _descriptor2, this);

      _initializerDefineProperty(this, "activeImg", _descriptor3, this);
    }

    get percent() {
      return 100 - this.products.length * 100 / this.taille;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "taille", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "products", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "activeImg", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = StoreDeleteSectionController;
});
;define("store/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("store/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define("store/helpers/app-version", ["exports", "store/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("store/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("store/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("store/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("store/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("store/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("store/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("store/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("store/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("store/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("store/helpers/map-value", ["exports", "semantic-ui-ember/helpers/map-value"], function (_exports, _mapValue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mapValue.default;
    }
  });
  Object.defineProperty(_exports, "mapValue", {
    enumerable: true,
    get: function () {
      return _mapValue.mapValue;
    }
  });
});
;define("store/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEqual.notEqualHelper;
    }
  });
});
;define("store/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("store/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("store/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("store/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("store/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("store/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("store/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "store/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("store/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("store/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("store/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("store/initializers/export-application-global", ["exports", "store/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("store/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("store/mixins/base", ["exports", "semantic-ui-ember/mixins/base"], function (_exports, _base) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _base.default;
    }
  });
});
;define("store/models/employee", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let EmployeeModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.hasMany)('order'), (_class = class EmployeeModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "email", _descriptor2, this);

      _initializerDefineProperty(this, "password", _descriptor3, this);

      _initializerDefineProperty(this, "orders", _descriptor4, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "email", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "password", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "orders", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = EmployeeModel;
});
;define("store/models/order", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let OrderModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('number'), _dec4 = (0, _model.attr)('number'), _dec5 = (0, _model.belongsTo)('user'), _dec6 = (0, _model.belongsTo)('employee'), _dec7 = (0, _model.hasMany)('orderdetail', {
    inverse: null
  }), (_class = class OrderModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "dateCreation", _descriptor, this);

      _initializerDefineProperty(this, "status", _descriptor2, this);

      _initializerDefineProperty(this, "itemsNumber", _descriptor3, this);

      _initializerDefineProperty(this, "amount", _descriptor4, this);

      _initializerDefineProperty(this, "user", _descriptor5, this);

      _initializerDefineProperty(this, "employee", _descriptor6, this);

      _initializerDefineProperty(this, "orderdetails", _descriptor7, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "dateCreation", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "status", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "itemsNumber", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "amount", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "user", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "employee", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "orderdetails", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = OrderModel;
});
;define("store/models/orderdetail", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let OrderdetailModel = (_dec = (0, _model.belongsTo)('order'), _dec2 = (0, _model.belongsTo)('product'), _dec3 = (0, _model.attr)('number'), _dec4 = (0, _model.attr)('number'), (_class = class OrderdetailModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "order", _descriptor, this);

      _initializerDefineProperty(this, "product", _descriptor2, this);

      _initializerDefineProperty(this, "quantity", _descriptor3, this);

      _initializerDefineProperty(this, "prepared", _descriptor4, this);
    }

    get sectionName() {
      let section = this.product.get('section');

      if (section) {
        return section.get('name');
      }

      return null;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "order", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "product", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "quantity", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "prepared", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = OrderdetailModel;
});
;define("store/models/product", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ProductModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('number'), _dec4 = (0, _model.attr)('string'), _dec5 = (0, _model.attr)('number'), _dec6 = (0, _model.attr)('number'), _dec7 = (0, _model.belongsTo)('section'), _dec8 = (0, _model.hasMany)('product', {
    inverse: null
  }), _dec9 = Ember._tracked, (_class = class ProductModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "comments", _descriptor2, this);

      _initializerDefineProperty(this, "stock", _descriptor3, this);

      _initializerDefineProperty(this, "image", _descriptor4, this);

      _initializerDefineProperty(this, "price", _descriptor5, this);

      _initializerDefineProperty(this, "promotion", _descriptor6, this);

      _initializerDefineProperty(this, "section", _descriptor7, this);

      _initializerDefineProperty(this, "packs", _descriptor8, this);

      _initializerDefineProperty(this, "checked", _descriptor9, this);
    }

    get sectionName() {
      if (this.section) {
        return this.section.get('name');
      }

      return null;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "comments", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "stock", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "image", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "price", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "promotion", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "section", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "packs", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "checked", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  })), _class));
  _exports.default = ProductModel;
});
;define("store/models/section", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let SectionModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.hasMany)('product'), (_class = class SectionModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "description", _descriptor2, this);

      _initializerDefineProperty(this, "products", _descriptor3, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "description", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "products", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = SectionModel;
});
;define("store/models/user", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let UserModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.hasMany)('order'), (_class = class UserModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "email", _descriptor2, this);

      _initializerDefineProperty(this, "password", _descriptor3, this);

      _initializerDefineProperty(this, "orders", _descriptor4, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "email", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "password", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "orders", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = UserModel;
});
;define("store/router", ["exports", "store/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('users', function () {
      this.route('add');
    });
    this.route('products', function () {
      this.route('add');
      this.route('update', {
        path: 'update/:product_id'
      });
    });
    this.route('store', function () {
      this.route('detail', {
        path: 'detail/:section_id'
      }, function () {
        this.route('add-product', {
          path: 'add-product/:section_id'
        });
        this.route('edit-product', {
          path: 'edit-product/:product_id'
        });
        this.route('edit-pack', {
          path: 'edit-pack/:pack_id'
        });
      });
      this.route('index', function () {
        this.route('add');
        this.route('edit', {
          path: 'edit/:section_id'
        });
        this.route('add-pack');
        this.route('delete-section', {
          path: 'delete-section/:section_id'
        });
      });
    });
    this.route('gestionStock', function () {
      this.route('section', {
        path: 'section/:section_id'
      });
    });
    this.route('dashboard', function () {
      this.route('detail-commande', {
        path: 'detail-commande/:order_id'
      });
    });
    this.route('gestionEmployee');
    this.route('accueil');
  });
});
;define("store/routes/abstract-route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let AbstractRouteRoute = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, (_class = class AbstractRouteRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "userAuth", _descriptor, this);

      _initializerDefineProperty(this, "store", _descriptor2, this);
    }

    redirect() {
      if (!this.userAuth.isAuth) {
        this.transitionTo('index');
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "userAuth", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "store", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = AbstractRouteRoute;
});
;define("store/routes/accueil", ["exports", "store/routes/abstract-route"], function (_exports, _abstractRoute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class AccueilRoute extends _abstractRoute.default {
    model() {
      return Ember.RSVP.hash({
        employees: this.store.findAll('employee', {
          include: 'orders'
        }),
        connected: this.userAuth.user
      });
    }

  }

  _exports.default = AccueilRoute;
});
;define("store/routes/application", ["exports", "store/routes/abstract-route"], function (_exports, _abstractRoute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ApplicationRoute = (_dec = Ember.inject.service, _dec2 = Ember._action, (_class = class ApplicationRoute extends _abstractRoute.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "userAuth", _descriptor, this);
    }

    model() {
      return Ember.RSVP.hash({
        connected: this.userAuth.user
      });
    }

    logout() {
      this.userAuth.logout();
      this.transitionTo('application');
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "userAuth", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "logout", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "logout"), _class.prototype)), _class));
  _exports.default = ApplicationRoute;
});
;define("store/routes/dashboard", ["exports", "store/routes/abstract-route"], function (_exports, _abstractRoute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let DashboardRoute = (_dec = Ember._action, (_class = class DashboardRoute extends _abstractRoute.default {
    model() {
      return Ember.RSVP.hash({
        employees: this.store.findAll('employee', {
          include: 'orders'
        }),
        connected: this.userAuth.user
      });
    }

    delete(orderToDelete) {
      let order = this.store.peekRecord('order', orderToDelete);
      order.destroyRecord().then(() => {
        this.transitionTo('dashboard');
      });
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "delete", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "delete"), _class.prototype)), _class));
  _exports.default = DashboardRoute;
});
;define("store/routes/dashboard/detail-commande", ["exports", "store/routes/abstract-route"], function (_exports, _abstractRoute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let DashboardDetailCommandeRoute = (_dec = Ember._action, _dec2 = Ember._action, _dec3 = Ember._action, (_class = class DashboardDetailCommandeRoute extends _abstractRoute.default {
    model(params) {
      return Ember.RSVP.hash({
        order: this.store.findRecord('order', params.order_id, {
          include: 'orderdetails.product.section'
        }),
        connected: this.userAuth.user
      });
    }

    save(orderdetails) {
      orderdetails.save();
    }

    valider(order) {
      order.status = "prepared";
      order.save().then(() => {
        this.transitionTo('dashboard');
      });
    }

    prepareAll(order) {
      //initalisation des compteurs
      let len = 0;
      let nbPrepared = 0; //Première boucle pour incrémenter les compteurs

      order.orderdetails.forEach(element => {
        len = len + 1;

        if (element.prepared == 1) {
          nbPrepared = nbPrepared + 1;
        }
      }); //Si tous les orderdetails sont préparés alors on les "déprépare"

      if (len == nbPrepared) {
        order.orderdetails.forEach(element => {
          element.prepared = 0;
          this.save(element);
        });
      } //Sinon on les prépare tous
      else {
          order.orderdetails.forEach(element => {
            element.prepared = 1;
            this.save(element);
          });
        }
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "save", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "save"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "valider", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "valider"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "prepareAll", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "prepareAll"), _class.prototype)), _class));
  _exports.default = DashboardDetailCommandeRoute;
});
;define("store/routes/gestion-stock", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class GestionStockRoute extends Ember.Route {
    model() {
      return this.store.findAll('section');
    }

  }

  _exports.default = GestionStockRoute;
});
;define("store/routes/gestion-stock/section", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let GestionStockSectionRoute = (_dec = Ember._tracked, _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, (_class = class GestionStockSectionRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "actualSection", _descriptor, this);
    }

    model(params) {
      document.getElementById('choix').style.display = 'none';
      this.actualSection = this.store.findRecord('section', params.section_id);
      return Ember.RSVP.hash({
        section: this.store.findRecord('section', params.section_id, {
          include: 'products'
        })
      });
    }

    update(product) {
      product.stock += parseInt(product._stock);
      product.save(); //   .then(() => {
      //   this.transitionTo('gestionStock.section', product.section.id);
      // });
    }

    multiUpdate(products, stock) {
      let checked = products._objects.filterBy('checked', true);

      checked.forEach(product => {
        product.stock += parseInt(stock);
        product.save();
      }); // this.transitionTo('gestionStock.section', products.section.id);
    }

    checked(product) {
      product.checked = product.checked === false;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "actualSection", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "update", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "multiUpdate", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "multiUpdate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "checked", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "checked"), _class.prototype)), _class));
  _exports.default = GestionStockSectionRoute;
});
;define("store/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let IndexRoute = (_dec = Ember.inject.service, _dec2 = Ember._action, (_class = class IndexRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "userAuth", _descriptor, this);
    }

    model() {
      return {};
    }

    login(user) {
      this.store.query('employee', {
        filter: {
          email: user.email
        }
      }).then(employees => {
        if (employees.length) {
          let connected = employees.firstObject;

          if (connected.password && connected.password === user.password) {
            this.userAuth.login(connected);
            this.transitionTo('accueil');
          }
        }
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "userAuth", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "login", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "login"), _class.prototype)), _class));
  _exports.default = IndexRoute;
});
;define("store/routes/products", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ProductsRoute extends Ember.Route {
    model() {
      return this.store.findAll('product', {
        include: 'packs,section'
      });
    }

  }

  _exports.default = ProductsRoute;
});
;define("store/routes/products/add", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let ProductsAddRoute = (_dec = Ember._action, (_class = class ProductsAddRoute extends Ember.Route {
    model() {
      return Ember.RSVP.hash({
        sections: this.store.findAll('section'),
        products: this.store.findAll('product'),
        product: {}
      });
    }

    save(p) {
      let product = this.store.createRecord('product', p);
      product.save().then(() => {
        this.transitionTo('products');
      });
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "save", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "save"), _class.prototype)), _class));
  _exports.default = ProductsAddRoute;
});
;define("store/routes/products/update", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let ProductsUpdateRoute = (_dec = Ember._action, (_class = class ProductsUpdateRoute extends Ember.Route {
    model(params) {
      return Ember.RSVP.hash({
        sections: this.store.findAll('section'),
        products: this.store.findAll('product'),
        product: this.store.findRecord('product', params.product_id)
      });
    }

    save(product) {
      product.save().then(() => {
        this.transitionTo('products');
      });
    }

    renderTemplate() {
      this.render('products.add');
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "save", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "save"), _class.prototype)), _class));
  _exports.default = ProductsUpdateRoute;
});
;define("store/routes/store/detail", ["exports", "jquery"], function (_exports, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let StoreDetailRoute = (_dec = Ember._action, _dec2 = Ember._action, (_class = class StoreDetailRoute extends Ember.Route {
    model(params) {
      return Ember.RSVP.hash({
        detailSection: this.store.findRecord('section', params.section_id, {
          include: 'products'
        })
      });
    }

    delete(productDelete) {
      let product = this.store.peekRecord('product', productDelete);
      product.destroyRecord();
    }

    initUi() {
      (0, _jquery.default)('.ui.modal').modal('hideAll');
    }

    didTransition() {
      Ember.run.next(this, 'initUi');
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "delete", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "delete"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "didTransition", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "didTransition"), _class.prototype)), _class));
  _exports.default = StoreDetailRoute;
});
;define("store/routes/store/detail/add-product", ["exports", "jquery"], function (_exports, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let StoreAddProductRoute = (_dec = Ember._action, _dec2 = Ember._action, (_class = class StoreAddProductRoute extends Ember.Route {
    model(params) {
      return Ember.RSVP.hash({
        section: this.store.findRecord('section', params.section_id),
        product: {}
      });
    }

    save(productData, m) {
      productData.section = m.section;
      let product = this.store.createRecord('product', productData);
      product.save().then(() => {
        this.transitionTo('store.detail', m.section.id);
      });
    }

    initUi() {
      (0, _jquery.default)('.ui.modal').modal({
        closable: false
      }).modal('show');
    }

    didTransition() {
      Ember.run.next(this, 'initUi');
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "save", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "save"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "didTransition", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "didTransition"), _class.prototype)), _class));
  _exports.default = StoreAddProductRoute;
});
;define("store/routes/store/detail/edit-product", ["exports", "jquery"], function (_exports, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let StoreEditProductRoute = (_dec = Ember._action, _dec2 = Ember._action, (_class = class StoreEditProductRoute extends Ember.Route {
    model(params) {
      return Ember.RSVP.hash({
        productToEdit: this.store.findRecord('product', params.product_id, {
          include: 'section'
        })
      });
    }

    save(productEditing, idSection) {
      productEditing.save().then(() => {
        this.transitionTo('store.detail', idSection);
      });
    }

    initUi() {
      (0, _jquery.default)('.ui.modal').modal({
        closable: false
      }).modal('show');
    }

    didTransition() {
      Ember.run.next(this, 'initUi');
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "save", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "save"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "didTransition", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "didTransition"), _class.prototype)), _class));
  _exports.default = StoreEditProductRoute;
});
;define("store/routes/store/index", ["exports", "store/routes/abstract-route", "jquery"], function (_exports, _abstractRoute, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let StoreIndexRoute = (_dec = Ember._action, _dec2 = Ember._action, (_class = class StoreIndexRoute extends _abstractRoute.default {
    model() {
      return Ember.RSVP.hash({
        sections: this.store.findAll('section', {
          include: 'products'
        })
      });
    }

    delete(section) {
      if (section.products.length > 0) {
        this.transitionTo('store.index.delete-section', section.id);
      } else {
        section.destroyRecord();
      }
    }

    initUi() {
      (0, _jquery.default)('.ui.modal').modal('hideAll');
    }

    didTransition() {
      Ember.run.next(this, 'initUi');
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "delete", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "delete"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "didTransition", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "didTransition"), _class.prototype)), _class));
  _exports.default = StoreIndexRoute;
});
;define("store/routes/store/index/add-pack", ["exports", "jquery"], function (_exports, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let StoreAddPackRoute = (_dec = Ember._action, _dec2 = Ember._action, (_class = class StoreAddPackRoute extends Ember.Route {
    model() {
      return Ember.RSVP.hash({
        sections: this.store.findAll('section'),
        products: this.store.findAll('product'),
        product: {}
      });
    }

    save(p) {
      var prix = 0;
      p.packs.forEach(element => {
        prix = prix + element.prix;
      });
      p.promotion = prix - p.prix;
      let product = this.store.createRecord('product', p);
      product.save().then(() => {
        this.transitionTo('store');
      });
    }

    initUi() {
      (0, _jquery.default)('.ui.modal').modal({
        closable: false
      }).modal('show');
    }

    didTransition() {
      Ember.run.next(this, 'initUi');
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "save", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "save"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "didTransition", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "didTransition"), _class.prototype)), _class));
  _exports.default = StoreAddPackRoute;
});
;define("store/routes/store/index/add", ["exports", "jquery"], function (_exports, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let StoreAddRoute = (_dec = Ember._action, _dec2 = Ember._action, (_class = class StoreAddRoute extends Ember.Route {
    model() {
      return {};
    }

    save(sectionData) {
      let section = this.store.createRecord('section', sectionData);
      section.save().then(() => {
        this.transitionTo('store');
      });
    }

    initUi() {
      (0, _jquery.default)('.ui.modal').modal({
        closable: false
      }).modal('show');
    }

    didTransition() {
      Ember.run.next(this, 'initUi');
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "save", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "save"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "didTransition", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "didTransition"), _class.prototype)), _class));
  _exports.default = StoreAddRoute;
});
;define("store/routes/store/index/delete-section", ["exports", "jquery"], function (_exports, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let StoreDeleteSectionRoute = (_dec = Ember._action, _dec2 = Ember._action, _dec3 = Ember._action, (_class = class StoreDeleteSectionRoute extends Ember.Route {
    model(params) {
      return Ember.RSVP.hash({
        sectionDelete: this.store.findRecord('section', params.section_id, {
          include: 'products'
        }),
        sections: this.store.findAll('section'),
        secToChange: {}
      });
    }

    deleteAll(sectionId) {
      this.store.findRecord('section', sectionId, {
        include: 'products',
        reload: true
      }).then(section => {
        this.deleteProducts(section.products).then(() => {
          section.destroyRecord().then(() => {
            this.transitionTo('store');
          });
        });
      });
    }

    async deleteProducts(products) {
      while (products.firstObject) {
        let p = products.firstObject;
        this.controllerFor(this.routeName).set('activeImg', p.image);
        await p.destroyRecord();
      }
    }

    setupController(controller, model) {
      controller.set('taille', model.sectionDelete.products.length);
      controller.set('products', model.sectionDelete.products);
    }

    changeAll(sectionId, secToChange) {
      this.store.findRecord('section', sectionId, {
        include: 'products',
        reload: true
      }).then(section => {
        this.changeProducts(section.get('products'), secToChange).then(() => {
          section.destroyRecord().then(() => {
            this.transitionTo('store');
          });
        });
      });
    }

    async changeProducts(products, secToChange) {
      while (products.firstObject) {
        let p = products.firstObject;
        p.section = secToChange;
        await p.save();
      }
    }

    initUi() {
      (0, _jquery.default)('.ui.modal').modal({
        closable: false
      }).modal('show');
    }

    didTransition() {
      Ember.run.next(this, 'initUi');
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "deleteAll", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "deleteAll"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeAll", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "changeAll"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "didTransition", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "didTransition"), _class.prototype)), _class));
  _exports.default = StoreDeleteSectionRoute;
});
;define("store/routes/store/index/edit", ["exports", "jquery"], function (_exports, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let StoreEditRoute = (_dec = Ember._action, _dec2 = Ember._action, (_class = class StoreEditRoute extends Ember.Route {
    model(params) {
      return Ember.RSVP.hash({
        sectionToEdit: this.store.findRecord('section', params.section_id)
      });
    }

    edit(sectionEditing) {
      sectionEditing.save().then(() => {
        this.transitionTo('store.detail', sectionEditing.section.id);
      });
    }

    initUi() {
      (0, _jquery.default)('.ui.modal').modal({
        closable: false
      }).modal('show');
    }

    didTransition() {
      Ember.run.next(this, 'initUi');
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "edit", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "edit"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "didTransition", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "didTransition"), _class.prototype)), _class));
  _exports.default = StoreEditRoute;
});
;define("store/routes/users", ["exports", "store/routes/abstract-route"], function (_exports, _abstractRoute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let UsersRoute = (_dec = Ember._action, (_class = class UsersRoute extends _abstractRoute.default {
    model() {
      return Ember.RSVP.hash({
        users: this.store.findAll('user', {
          include: 'orders'
        }),
        connected: this.userAuth.user
      });
    }

    remove(user, model) {
      Ember.set(model, 'deleted', user);
      user.destroyRecord().then(() => {});
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "remove", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "remove"), _class.prototype)), _class));
  _exports.default = UsersRoute;
});
;define("store/routes/users/add", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let UsersAddRoute = (_dec = Ember._action, (_class = class UsersAddRoute extends Ember.Route {
    model() {
      return {};
    }

    save(userData) {
      let user = this.store.createRecord('user', userData);
      user.save().then(() => {
        this.transitionTo('users');
      });
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "save", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "save"), _class.prototype)), _class));
  _exports.default = UsersAddRoute;
});
;define("store/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("store/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("store/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("store/serializers/application", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationSerializer extends _json.default {}

  _exports.default = ApplicationSerializer;
});
;define("store/serializers/employee", ["exports", "@ember-data/serializer/json", "@ember-data/serializer/rest"], function (_exports, _json, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class EmployeeSerializer extends _json.default.extend(_rest.EmbeddedRecordsMixin) {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        orders: {
          embedded: 'always'
        }
      });
    }

  }

  _exports.default = EmployeeSerializer;
});
;define("store/serializers/order", ["exports", "@ember-data/serializer/json", "@ember-data/serializer/rest"], function (_exports, _json, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class OrderSerializer extends _json.default.extend(_rest.EmbeddedRecordsMixin) {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        orderdetails: {
          embedded: 'always'
        }
      });
    }

  }

  _exports.default = OrderSerializer;
});
;define("store/serializers/orderdetail", ["exports", "@ember-data/serializer/json", "@ember-data/serializer/rest"], function (_exports, _json, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class OrderdetailSerializer extends _json.default.extend(_rest.EmbeddedRecordsMixin) {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        product: {
          deserialize: 'records',
          serialize: 'id'
        }
      });

      _defineProperty(this, "compositeKeys", ['order', 'product']);
    }

    extractId(modelClass, resourceHash) {
      return this.compositeKeys.map(key => {
        if (resourceHash[key].id) {
          return resourceHash[key].id;
        }

        return resourceHash[key];
      }).join(',');
    }

  }

  _exports.default = OrderdetailSerializer;
});
;define("store/serializers/product", ["exports", "@ember-data/serializer/json", "@ember-data/serializer/rest"], function (_exports, _json, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class ProductSerializer extends _json.default.extend(_rest.EmbeddedRecordsMixin) {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        packs: {
          embedded: 'always'
        },
        section: {
          deserialize: 'records',
          serialize: 'id'
        }
      });
    }

  }

  _exports.default = ProductSerializer;
});
;define("store/serializers/section", ["exports", "@ember-data/serializer/json", "@ember-data/serializer/rest"], function (_exports, _json, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class UserSerializer extends _json.default.extend(_rest.EmbeddedRecordsMixin) {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        products: {
          embedded: 'always'
        }
      });
    }

  }

  _exports.default = UserSerializer;
});
;define("store/serializers/user", ["exports", "@ember-data/serializer/json", "@ember-data/serializer/rest"], function (_exports, _json, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class UserSerializer extends _json.default.extend(_rest.EmbeddedRecordsMixin) {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        orders: {
          embedded: 'always'
        }
      });
    }

  }

  _exports.default = UserSerializer;
});
;define("store/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("store/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("store/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("store/services/user-auth", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let UserAuthService = (_dec = Ember._tracked, (_class = class UserAuthService extends Ember.Service {
    constructor() {
      super();

      _initializerDefineProperty(this, "user", _descriptor, this);

      _defineProperty(this, "storage", void 0);

      this.storage = sessionStorage;

      if (this.storage.user) {
        let u = JSON.parse(this.storage.user);
        Ember.set(this, 'user', u);
      }
    } //Retourne l'employé connecté


    getUser() {
      return this.user;
    } //Retourne vrai si un employé est connecté


    get isAuth() {
      return this.user !== null;
    } //Déconnecte l'employé actuellement connecté


    logout() {
      this.user = null;
      this.storage.removeItem('user');
      this.storage.clear();
    } //A appeler pour connexion de l'employé, après validation positive du formulaire de connexion


    login(user) {
      this.user = user;
      this.storage.user = JSON.stringify({
        id: user.id,
        email: user.email
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "user", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  })), _class));
  _exports.default = UserAuthService;
});
;define("store/templates/accueil", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Bk7cgm3M",
    "block": "[[[1,[28,[35,0],[\"Accueil\"],null]],[1,\"\\n\"],[10,0],[14,0,\"ui teal segment center aligned\"],[12],[1,\"\\n  \"],[10,\"h1\"],[14,0,\"ui header\"],[12],[1,\"Gestion interne du store\"],[13],[1,\"\\n  \"],[10,0],[14,0,\"ui divider\"],[12],[13],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"employees\"]]],null]],null],null,[[[41,[28,[37,4],[[30,1,[\"connected\",\"email\"]],[30,2,[\"email\"]]],null],[[[1,\"      \"],[10,\"h4\"],[12],[1,\"Bienvenue \"],[1,[30,2,[\"name\"]]],[13],[1,\"\\n\"]],[]],null]],[2]],null],[1,\"  \"],[10,0],[14,0,\"ui image\"],[12],[1,\"\\n    \"],[10,\"img\"],[14,\"src\",\"/images/logo.png\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[46,[28,[37,6],null,null],null,null,null]],[\"@model\",\"employee\"],false,[\"page-title\",\"each\",\"-track-array\",\"if\",\"eq\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/accueil.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "C8T7WKYc",
    "block": "[[[1,[28,[35,0],[\"Store\"],null]],[1,\"\\n\"],[10,0],[14,0,\"ui inverted secondary pointing menu\"],[14,5,\"margin:0;position: fixed;top :0;z-index: 100;width: 100vw;background-color: #444\"],[12],[1,\"\\n  \"],[10,3],[14,0,\"ui item\"],[14,6,\"../../../../accueil\"],[12],[1,\"\\n    Accueil\\n  \"],[13],[1,\"\\n  \"],[10,3],[14,0,\"ui item\"],[14,6,\"../../../../gestionStock\"],[12],[1,\"\\n    Gestion du Stock\\n  \"],[13],[1,\"\\n  \"],[10,3],[14,0,\"ui item\"],[14,6,\"../../../../store/index\"],[12],[1,\"\\n    Gestion du Store\\n  \"],[13],[1,\"\\n  \"],[10,3],[14,0,\"ui item\"],[14,6,\"../../../../dashboard\"],[12],[1,\"\\n    Gestion des Commandes\\n  \"],[13],[1,\"\\n  \"],[10,3],[14,0,\"ui item\"],[14,6,\"../../../../gestionEmployee\"],[12],[1,\"\\n    Gestion des Employés\\n  \"],[13],[1,\"\\n\"],[41,[30,1,[\"connected\",\"email\"]],[[[1,\"    \"],[10,0],[14,0,\"right menu\"],[12],[1,\"\\n      \"],[11,\"button\"],[24,0,\"ui item\"],[4,[38,2],[[30,0],\"logout\"],[[\"on\"],[\"click\"]]],[12],[1,\"\\n        \"],[10,0],[14,0,\"ui label\"],[12],[1,\"Logout : \"],[1,[30,1,[\"connected\",\"email\"]]],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[10,0],[14,0,\"right menu\"],[12],[1,\"\\n      \"],[10,3],[14,0,\"ui item\"],[14,6,\"../../../../\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"ui label\"],[12],[1,\"Login\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]]],[13],[1,\"\\n\"],[46,[28,[37,4],null,null],null,null,null]],[\"@model\"],false,[\"page-title\",\"if\",\"action\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/dashboard", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "btCnVQIH",
    "block": "[[[1,[28,[35,0],[\"Dashboard\"],null]],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"employees\"]]],null]],null],null,[[[41,[28,[37,4],[[30,1,[\"connected\",\"email\"]],[30,2,[\"email\"]]],null],[[[1,\"      \"],[10,0],[12],[10,\"h1\"],[12],[1,\"Employé : \"],[1,[30,2,[\"name\"]]],[13],[13],[1,\"\\n      \"],[10,0],[14,0,\"ui segment\"],[12],[1,\"\\n        \"],[10,\"table\"],[14,0,\"ui striped table\"],[12],[1,\"\\n          \"],[10,\"thead\"],[12],[1,\"\\n          \"],[10,\"th\"],[14,0,\"numCommande\"],[12],[1,\"N° Commande\"],[13],[1,\"\\n          \"],[10,\"th\"],[12],[1,\"Date Création\"],[13],[1,\"\\n          \"],[10,\"th\"],[12],[1,\"Statut\"],[13],[1,\"\\n          \"],[10,\"th\"],[14,0,\"sectionButtonStore\"],[12],[13],[1,\"\\n          \"],[10,\"th\"],[12],[13],[1,\"\\n          \"],[10,\"th\"],[12],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,2,[\"orders\"]]],null]],null],null,[[[1,\"            \"],[10,\"tr\"],[12],[1,\"\\n              \"],[10,\"td\"],[12],[1,[30,3,[\"id\"]]],[13],[1,\"\\n              \"],[10,\"td\"],[14,5,\"font-size: 11px\"],[12],[1,[30,3,[\"dateCreation\"]]],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,[30,3,[\"status\"]]],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"\\n                \"],[10,3],[15,6,[29,[\"../../dashboard/detail-commande/\",[30,3,[\"id\"]]]]],[12],[1,\"\\n                  \"],[10,\"button\"],[14,0,\"ui active button\"],[12],[1,\"\\n                    \"],[10,\"i\"],[14,0,\"eye icon\"],[12],[13],[1,\"\\n                    Détails\\n                  \"],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"\\n                \"],[11,\"button\"],[24,0,\"circular ui icon red button\"],[4,[38,5],[[30,0],\"delete\",[30,3,[\"id\"]]],null],[12],[1,\"\\n                  \"],[10,\"i\"],[14,0,\"icon delete\"],[12],[13],[1,\"\\n                  Annuler Commande\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[3]],null],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null]],[2]],null],[46,[28,[37,7],null,null],null,null,null]],[\"@model\",\"employee\",\"order\"],false,[\"page-title\",\"each\",\"-track-array\",\"if\",\"eq\",\"action\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/dashboard.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/dashboard/detail-commande", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "fTah8nLj",
    "block": "[[[1,[28,[35,0],[\"DetailCommande\"],null]],[1,\"\\n\"],[10,0],[14,0,\"ui segment\"],[12],[1,\"\\n  \"],[10,\"h1\"],[12],[1,\"Préparation de commande\"],[13],[1,\"\\n  Commande N°\"],[1,[30,1,[\"order\",\"id\"]]],[1,\"  \\n  \"],[10,0],[14,5,\"float:right\"],[12],[1,[30,1,[\"order\",\"itemsNumber\"]]],[1,\" Produits \\n    \"],[10,0],[14,0,\"ui checkbox\"],[12],[8,[39,1],[[4,[38,2],[[30,0],\"prepareAll\",[30,1,[\"order\"]]],[[\"on\"],[\"change\"]]]],[[\"@type\"],[\"checkbox\"]],null],[10,\"label\"],[12],[1,\"Tout Préparés\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"ui celled  ordered list\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,0,[\"sections\"]]],null]],null],null,[[[1,\"     \"],[10,0],[14,0,\"item\"],[12],[1,[30,2,[\"value\"]]],[1,\"\\n       \"],[10,0],[14,0,\"list\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,2,[\"items\"]]],null]],null],null,[[[1,\"           \"],[10,0],[14,0,\"item\"],[12],[1,[30,3,[\"product\",\"name\"]]],[1,\"   Prix : \"],[1,[30,3,[\"product\",\"price\"]]],[1,\" €\\n             \"],[10,0],[14,5,\"float:right; margin: 0%\"],[12],[1,\"Quantité : \"],[1,[30,3,[\"quantity\"]]],[1,\"\\n               \"],[10,0],[14,0,\"ui toggle checkbox\"],[12],[8,[39,1],[[4,[38,2],[[30,0],\"save\",[30,3]],[[\"on\"],[\"change\"]]]],[[\"@type\",\"@checked\"],[\"checkbox\",[30,3,[\"prepared\"]]]],null],[1,\"\\n              \"],[10,\"label\"],[12],[1,[52,[30,3,[\"prepared\"]],\"Préparé\",\"Non Préparé\"]],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n           \"],[13],[10,\"br\"],[12],[13],[1,\"\\n\"]],[3]],null],[1,\"       \"],[13],[1,\"\\n     \"],[13],[1,\"\\n\"]],[2]],null],[1,\"    \"],[11,\"button\"],[24,0,\"circular ui icon green button\"],[4,[38,2],[[30,0],\"valider\",[30,1,[\"order\"]]],[[\"on\"],[\"click\"]]],[12],[1,\"\\n      \"],[10,\"i\"],[14,0,\"icon thumbs up\"],[12],[13],[1,\"\\n      Valider la Commande\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[46,[28,[37,7],null,null],null,null,null]],[\"@model\",\"section\",\"od\"],false,[\"page-title\",\"input\",\"action\",\"each\",\"-track-array\",\"if\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/dashboard/detail-commande.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/gestion-stock", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5jkGXafA",
    "block": "[[[1,[28,[35,0],[\"GestionStock\"],null]],[1,\"\\n\"],[10,0],[14,5,\"float:left;width:19rem;background-color: white;height: calc(100vh - 47px);top:47px;position: fixed;\"],[12],[1,\"\\n  \"],[10,\"ul\"],[14,0,\"list-group list-group-flush\"],[12],[1,\"\\n    \"],[10,\"li\"],[14,0,\"list-group-item\"],[12],[1,\"\\n      Sections :\\n    \"],[13],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1]],null]],null],null,[[[1,\"      \"],[10,\"li\"],[14,0,\"list-group-item\"],[12],[1,\"\\n        \"],[8,[39,3],[[24,0,\"btn btn-light\"]],[[\"@route\",\"@model\"],[\"gestionStock.section\",[30,2,[\"id\"]]]],[[\"default\"],[[[[1,\"\\n          \"],[1,[30,2,[\"name\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n\"]],[2]],null],[1,\"  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,0],[14,1,\"choix\"],[14,0,\"ui placeholder segment\"],[14,5,\"margin:0;margin-left: 266px;\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"ui icon header\"],[12],[1,\"\\n    \"],[10,\"i\"],[14,0,\"search icon\"],[12],[13],[1,\"\\n      Choisissez une section\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[46,[28,[37,5],null,null],null,null,null]],[\"@model\",\"section\"],false,[\"page-title\",\"each\",\"-track-array\",\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/gestion-stock.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/gestion-stock/section", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "74kl/S4R",
    "block": "[[[1,[28,[35,0],[\"Section\"],null]],[1,\"\\n\"],[11,\"form\"],[4,[38,1],[[30,0],\"multiUpdate\",[30,1,[\"section\",\"products\"]],[30,0,[\"_stock\"]]],[[\"on\"],[\"submit\"]]],[12],[1,\"\\n  \"],[10,0],[14,0,\"ui small action input\"],[14,5,\"top: 47px;margin-left: 266px;position: fixed;z-index: 100;background-color:white;width: 100%;border:6px white solid\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"ui right pointing label\"],[12],[1,\"\\n      Ajout de stock pour plusieurs objets à la fois\\n    \"],[13],[1,\"\\n    \"],[8,[39,2],[[24,\"required\",\"required\"],[24,5,\"flex: none !important;\"],[24,\"placeholder\",\"Ajouter\"],[24,4,\"number\"]],[[\"@value\"],[[30,0,[\"_stock\"]]]],null],[1,\"\\n    \"],[10,\"button\"],[14,0,\"ui icon button\"],[14,4,\"submit\"],[12],[1,\"\\n      \"],[10,\"i\"],[14,0,\"plus icon\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,\"br\"],[12],[13],[1,\"\\n\"],[10,0],[14,0,\"ui seven doubling cards\"],[14,5,\"margin-left:266px;padding-top: 84px\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,1,[\"section\",\"products\"]]],null]],null],null,[[[1,\"    \"],[10,0],[14,0,\"card\"],[14,5,\"float: left\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"content\"],[12],[1,\"\\n        \"],[1,[30,2,[\"name\"]]],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"image\"],[14,5,\"height: 200px;margin: auto;\"],[12],[1,\"\\n        \"],[10,\"img\"],[15,\"src\",[29,[\"/images/\",[30,2,[\"image\"]],\".jpg\"]]],[14,0,\"card-img-top\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"content\"],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"box icon\"],[12],[13],[1,\"\\n        \"],[1,[30,2,[\"stock\"]]],[1,\"\\n        \"],[10,1],[14,0,\"right floated\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"ui checkbox\"],[12],[1,\"\\n            \"],[8,[39,2],[[24,3,\"example\"],[24,4,\"checkbox\"],[4,[38,1],[[30,0],\"checked\",[30,2]],[[\"on\"],[\"change\"]]]],null,null],[1,\"\\n            \"],[10,\"label\"],[12],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"content\"],[12],[1,\"\\n        \"],[11,\"form\"],[4,[38,1],[[30,0],\"update\",[30,2],[33,5]],[[\"on\"],[\"submit\"]]],[12],[1,\"\\n          \"],[10,0],[14,0,\"ui mini action input\"],[12],[1,\"\\n            \"],[8,[39,2],[[24,5,\"width:70%;\"],[24,\"required\",\"required\"],[16,\"placeholder\",[30,2,[\"stock\"]]],[24,4,\"number\"]],[[\"@value\"],[[30,2,[\"_stock\"]]]],null],[1,\"\\n            \"],[10,\"button\"],[14,5,\"width:30%;\"],[14,0,\"ui button\"],[14,\"tabindex\",\"0\"],[14,4,\"submit\"],[12],[1,\"\\n              \"],[10,\"i\"],[14,0,\"plus icon\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[2]],null],[13],[1,\"\\n\"],[46,[28,[37,7],null,null],null,null,null]],[\"@model\",\"product\"],false,[\"page-title\",\"action\",\"input\",\"each\",\"-track-array\",\"stock\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/gestion-stock/section.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "B6Z2IWwe",
    "block": "[[[1,[28,[35,0],[\"Index\"],null]],[1,\"\\n\"],[10,0],[14,0,\"containerP\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"boxP\"],[12],[1,\"\\n    \"],[11,\"form\"],[24,0,\"ui inline form contentP\"],[4,[38,1],[[30,0],\"login\",[30,1]],[[\"on\"],[\"submit\"]]],[12],[1,\"\\n      \"],[10,\"h2\"],[14,0,\"ui center aligned icon header\"],[12],[1,\"\\n        Page de connexion\\n      \"],[13],[1,\"\\n      \"],[8,[39,2],[[24,0,\"ui input\"],[24,\"placeholder\",\"Votre email\"],[24,4,\"email\"]],[[\"@value\"],[[30,1,[\"email\"]]]],null],[1,\"\\n      \"],[8,[39,2],[[24,0,\"ui input\"],[24,\"placeholder\",\"Votre mot de passe\"],[24,4,\"password\"]],[[\"@value\"],[[30,1,[\"password\"]]]],null],[1,\"\\n      \"],[10,\"button\"],[14,0,\"ui fluid blue button\"],[14,4,\"submit\"],[12],[1,\"Se connecter\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[46,[28,[37,4],null,null],null,null,null]],[\"@model\"],false,[\"page-title\",\"action\",\"input\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/products", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "erNuF6Ba",
    "block": "[[[1,[28,[35,0],[\"Products\"],null]],[1,\"\\n\"],[8,[39,1],[[24,0,\"ui green button\"]],[[\"@route\"],[\"products.add\"]],[[\"default\"],[[[[1,\"\\n  Ajouter un produit\\n\"]],[]]]]],[1,\"\\n\"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\"],[10,\"ol\"],[12],[1,\"\\n\"],[42,[28,[37,5],[[28,[37,5],[[30,1]],null]],null],null,[[[1,\"  \"],[10,\"li\"],[12],[1,\"\\n    \"],[8,[39,1],[[24,0,\"ui mini icon button\"]],[[\"@route\",\"@model\"],[\"products.update\",[30,2,[\"id\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[10,\"i\"],[14,0,\"ui edit icon\"],[12],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[1,[30,2,[\"name\"]]],[1,\" - \"],[10,1],[14,0,\"ui mini tag label\"],[12],[1,[30,2,[\"section\",\"name\"]]],[13],[1,\"\\n  \"],[10,\"ul\"],[12],[1,\"\\n\"],[42,[28,[37,5],[[28,[37,5],[[30,2,[\"packs\"]]],null]],null],null,[[[1,\"      \"],[10,\"li\"],[12],[1,[30,3,[\"name\"]]],[13],[1,\"\\n\"]],[3]],null],[1,\"  \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[2]],null],[13],[1,\"\\n\"]],[\"@model\",\"product\",\"pack\"],false,[\"page-title\",\"link-to\",\"component\",\"-outlet\",\"each\",\"-track-array\"]]",
    "moduleName": "store/templates/products.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/products/add", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "8iEE54n9",
    "block": "[[[1,[28,[35,0],[\"Add\"],null]],[1,\"\\n\"],[11,\"form\"],[24,0,\"ui form\"],[4,[38,1],[[30,0],\"save\",[30,1,[\"product\"]]],[[\"on\"],[\"submit\"]]],[12],[1,\"\\n  \"],[8,[39,2],[[24,\"placeholder\",\"Nom du produit\"]],[[\"@value\"],[[30,1,[\"product\",\"name\"]]]],null],[1,\"\\n  \"],[8,[39,3],[[24,0,\"selection multiple\"]],[[\"@selected\",\"@onChange\"],[[30,1,[\"product\",\"packs\"]],[28,[37,4],[[28,[37,5],[[30,1,[\"product\",\"packs\"]]],null]],null]]],[[\"default\"],[[[[1,\"\\n    \"],[10,0],[14,0,\"default text\"],[12],[1,\"Packs\"],[13],[1,\"\\n    \"],[10,\"i\"],[14,0,\"dropdown icon\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"menu\"],[12],[1,\"\\n\"],[42,[28,[37,7],[[28,[37,7],[[30,1,[\"products\"]]],null]],null],null,[[[1,\"        \"],[10,0],[15,\"data-value\",[29,[[28,[37,8],[[30,3],[30,4]],null]]]],[14,0,\"item\"],[12],[1,\"\\n          \"],[1,[30,4,[\"name\"]]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[4]],null],[1,\"    \"],[13],[1,\"\\n  \"]],[2,3]]]]],[1,\"\\n  \"],[8,[39,3],[[24,0,\"selection\"]],[[\"@selected\",\"@onChange\"],[[30,1,[\"product\",\"section\"]],[28,[37,4],[[28,[37,5],[[30,1,[\"product\",\"section\"]]],null]],null]]],[[\"default\"],[[[[1,\"\\n    \"],[10,0],[14,0,\"default text\"],[12],[1,\"Section\"],[13],[1,\"\\n    \"],[10,\"i\"],[14,0,\"dropdown icon\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"menu\"],[12],[1,\"\\n\"],[42,[28,[37,7],[[28,[37,7],[[30,1,[\"sections\"]]],null]],null],null,[[[1,\"        \"],[10,0],[15,\"data-value\",[29,[[28,[37,8],[[30,6],[30,7]],null]]]],[14,0,\"item\"],[12],[1,\"\\n          \"],[1,[30,7,[\"name\"]]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[7]],null],[1,\"    \"],[13],[1,\"\\n  \"]],[5,6]]]]],[1,\"\\n\"],[10,\"button\"],[14,0,\"ui positive button\"],[14,4,\"submit\"],[12],[1,\"Valider\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[46,[28,[37,10],null,null],null,null,null]],[\"@model\",\"execute\",\"mapper\",\"product\",\"execute\",\"mapper\",\"section\"],false,[\"page-title\",\"action\",\"input\",\"ui-dropdown\",\"fn\",\"mut\",\"each\",\"-track-array\",\"map-value\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/products/add.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/products/update", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "rZKAuZek",
    "block": "[[[1,[28,[35,0],[\"Update\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/products/update.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/store/detail", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "+KF45QNq",
    "block": "[[[1,[28,[35,0],[\"Detail\"],null]],[1,\"\\n\"],[10,\"h4\"],[14,0,\"ui horizontal divider header\"],[12],[1,\"\\n  \"],[10,\"i\"],[14,0,\"box icon\"],[12],[13],[1,\"\\n  Section : \"],[1,[30,1,[\"detailSection\",\"name\"]]],[1,\"\\n\"],[13],[1,\"\\n\"],[10,0],[12],[1,\"\\n  \"],[8,[39,1],[[24,0,\"ui button\"]],[[\"@route\"],[\"store.index\"]],[[\"default\"],[[[[1,\"Retour aux sections\"]],[]]]]],[1,\"\\n  \"],[8,[39,1],[[24,0,\"ui button\"]],[[\"@route\",\"@model\"],[\"store.detail.add-product\",[30,1,[\"detailSection\",\"id\"]]]],[[\"default\"],[[[[1,\"Ajouter un produit\"]],[]]]]],[1,\"\\n\"],[13],[1,\"\\n\"],[10,0],[14,0,\"ui seven cards cartesSection\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,1,[\"detailSection\",\"products\"]]],null]],null],null,[[[1,\"    \"],[10,0],[14,0,\"card\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"content\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"header\"],[12],[1,[30,2,[\"name\"]]],[13],[1,\"\\n        \"],[10,0],[14,0,\"ui image\"],[12],[1,\"\\n          \"],[10,\"img\"],[15,\"src\",[29,[\"/images/\",[30,2,[\"image\"]],\".jpg\"]]],[14,0,\"card-img-top\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"meta\"],[12],[1,\"\\n          Prix :  \"],[1,[30,2,[\"price\"]]],[1,\"€\\n\"],[41,[51,[28,[37,5],[[30,2,[\"promotion\"]],0],null]],[[[1,\"            \"],[10,0],[14,0,\"meta\"],[12],[1,\"\\n              \"],[1,[30,2,[\"promotion\"]]],[1,\"%\\n            \"],[13],[1,\"\\n\"]],[]],null],[1,\"        \"],[13],[1,\"\\n\"],[41,[51,[28,[37,5],[[30,2,[\"comments\"]],\"\"],null]],[[[1,\"          \"],[10,2],[12],[1,[30,2,[\"comments\"]]],[13],[1,\"\\n\"]],[]],null],[1,\"      \"],[13],[1,\"\\n\"],[41,[28,[37,5],[[30,2,[\"comments\"]],\"\"],null],[[[1,\"        \"],[8,[39,1],[[24,0,\"ui bottom attached button\"]],[[\"@route\",\"@model\"],[\"store.detail.edit-pack\",[30,2,[\"id\"]]]],[[\"default\"],[[[[10,\"i\"],[14,0,\"icon edit\"],[12],[13],[1,\"Editer\"]],[]]]]],[1,\"\\n\"]],[]],[[[1,\"        \"],[8,[39,1],[[24,0,\"ui bottom attached button\"]],[[\"@route\",\"@model\"],[\"store.detail.edit-product\",[30,2,[\"id\"]]]],[[\"default\"],[[[[10,\"i\"],[14,0,\"icon edit\"],[12],[13],[1,\"Editer\"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"      \"],[11,\"button\"],[24,0,\"ui bottom attached button\"],[4,[38,7],[[30,0],\"delete\",[30,2,[\"id\"]]],null],[12],[10,\"i\"],[14,0,\"icon delete\"],[12],[13],[1,\"Supprimer\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[2]],null],[13],[1,\"\\n\"],[46,[28,[37,9],null,null],null,null,null]],[\"@model\",\"product\"],false,[\"page-title\",\"link-to\",\"each\",\"-track-array\",\"unless\",\"eq\",\"if\",\"action\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/store/detail.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/store/detail/add-product", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "qKaGbB2m",
    "block": "[[[1,[28,[35,0],[\"AddProduct\"],null]],[1,\"\\n\"],[6,[39,1],null,[[\"class\"],[\"ui modal\"]],[[\"default\"],[[[[1,\"  \"],[11,\"form\"],[24,0,\"ui form\"],[4,[38,2],[[30,0],\"save\",[30,1,[\"product\"]],[30,1]],[[\"on\"],[\"submit\"]]],[12],[1,\"\\n    \"],[10,\"h2\"],[12],[1,\"Ajouter un produit\"],[13],[1,\"\\n    \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n      \"],[10,\"label\"],[12],[1,\"Nom du produit\"],[13],[1,\"\\n      \"],[8,[39,3],[[24,3,\"nom-produit\"],[24,\"required\",\"required\"],[24,\"placeholder\",\"Nom du produit\"],[24,4,\"text\"]],[[\"@value\"],[[30,1,[\"product\",\"name\"]]]],null],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n      \"],[10,\"label\"],[12],[1,\"Description\"],[13],[1,\"\\n      \"],[8,[39,4],[[24,3,\"comments-produit\"],[24,\"placeholder\",\"Commentaires\"]],[[\"@value\"],[[30,1,[\"product\",\"comments\"]]]],null],[1,\"    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n      \"],[10,\"label\"],[12],[1,\"Stock\"],[13],[1,\"\\n      \"],[8,[39,3],[[24,3,\"stock-produit\"],[24,\"required\",\"required\"],[24,\"placeholder\",\"Stock du produit\"],[24,4,\"number\"]],[[\"@value\"],[[30,1,[\"product\",\"stock\"]]]],null],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n      \"],[10,\"label\"],[12],[1,\"Prix\"],[13],[1,\"\\n      \"],[8,[39,3],[[24,3,\"price-produit\"],[24,\"required\",\"required\"],[24,\"placeholder\",\"Prix du produit\"],[24,4,\"number\"]],[[\"@value\"],[[30,1,[\"product\",\"price\"]]]],null],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n      \"],[10,\"label\"],[12],[1,\"Image\"],[13],[1,\"\\n      \"],[8,[39,3],[[24,1,\"fileupload\"],[24,3,\"myfile\"],[24,4,\"file\"]],[[\"@value\"],[[30,1,[\"product\",\"image\"]]]],null],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"button\"],[14,0,\"ui positive button\"],[14,4,\"submit\"],[12],[1,\"Valider\"],[13],[1,\"\\n    \"],[8,[39,5],[[24,0,\"ui negative button\"]],[[\"@route\",\"@model\"],[\"store.detail\",[30,1,[\"section\",\"id\"]]]],[[\"default\"],[[[[1,\"Annuler\"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[46,[28,[37,7],null,null],null,null,null]],[\"@model\"],false,[\"page-title\",\"ui-modal\",\"action\",\"input\",\"textarea\",\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/store/detail/add-product.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/store/detail/edit-product", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Oxjhkcrm",
    "block": "[[[1,[28,[35,0],[\"EditProduct\"],null]],[1,\"\\n\"],[6,[39,1],null,[[\"class\"],[\"ui modal\"]],[[\"default\"],[[[[1,\"  \"],[11,\"form\"],[24,0,\"ui form\"],[4,[38,2],[[30,0],\"save\",[30,1,[\"productToEdit\"]],[30,1,[\"productToEdit\",\"section\",\"id\"]]],[[\"on\"],[\"submit\"]]],[12],[1,\"\\n    \"],[10,\"h2\"],[12],[1,\"Modifier le produit\"],[13],[1,\"\\n    \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n      \"],[10,\"label\"],[12],[1,\"Nom du produit\"],[13],[1,\"\\n      \"],[8,[39,3],[[24,3,\"name-produit\"],[24,\"required\",\"required\"],[24,4,\"text\"]],[[\"@value\"],[[30,1,[\"productToEdit\",\"name\"]]]],null],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n      \"],[10,\"label\"],[12],[1,\"Commentaire\"],[13],[1,\"\\n      \"],[8,[39,4],[[24,3,\"comments-produit\"],[24,\"required\",\"required\"]],[[\"@value\"],[[30,1,[\"productToEdit\",\"comments\"]]]],null],[1,\"    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n      \"],[10,\"label\"],[12],[1,\"Prix\"],[13],[1,\"\\n      \"],[8,[39,3],[[24,\"step\",\"any\"],[24,3,\"price-produit\"],[24,\"required\",\"required\"],[24,4,\"number\"]],[[\"@value\"],[[30,1,[\"productToEdit\",\"price\"]]]],null],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"button\"],[14,0,\"ui positive button\"],[14,4,\"submit\"],[12],[1,\"Modifier\"],[13],[1,\"\\n    \"],[8,[39,5],[[24,0,\"ui negative button\"]],[[\"@route\",\"@model\"],[\"store.detail\",[30,1,[\"productToEdit\",\"section\",\"id\"]]]],[[\"default\"],[[[[1,\"Annuler\"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[46,[28,[37,7],null,null],null,null,null]],[\"@model\"],false,[\"page-title\",\"ui-modal\",\"action\",\"input\",\"textarea\",\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/store/detail/edit-product.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/store/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "++LHhlGh",
    "block": "[[[1,[28,[35,0],[\"Index\"],null]],[1,\"\\n\"],[10,\"h4\"],[14,0,\"ui horizontal divider header\"],[12],[1,\"\\n  \"],[10,\"i\"],[14,0,\"box icon\"],[12],[13],[1,\"\\n  Sections\\n\"],[13],[1,\"\\n\"],[10,0],[14,0,\"segment\"],[12],[1,\"\\n  \"],[8,[39,1],[[24,0,\"ui button\"]],[[\"@route\"],[\"store.index.add\"]],[[\"default\"],[[[[1,\"Ajouter section\"]],[]]]]],[1,\"\\n  \"],[8,[39,1],[[24,0,\"ui button\"]],[[\"@route\"],[\"store.index.add-pack\"]],[[\"default\"],[[[[1,\"Ajouter un pack\"]],[]]]]],[1,\"\\n  \"],[10,\"table\"],[14,0,\"ui striped table\"],[12],[1,\"\\n    \"],[10,\"thead\"],[12],[1,\"\\n    \"],[10,\"th\"],[14,0,\"sectionNameStore\"],[12],[1,\"Section\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Description\"],[13],[1,\"\\n    \"],[10,\"th\"],[14,0,\"sectionButtonStore\"],[12],[13],[1,\"\\n    \"],[10,\"th\"],[12],[13],[1,\"\\n    \"],[10,\"th\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,1,[\"sections\"]]],null]],null],null,[[[1,\"      \"],[10,\"tr\"],[12],[1,\"\\n        \"],[10,\"td\"],[12],[1,[30,2,[\"name\"]]],[13],[1,\"\\n        \"],[10,\"td\"],[14,5,\"font-size: 11px\"],[12],[1,[30,2,[\"description\"]]],[13],[1,\"\\n        \"],[10,\"td\"],[12],[1,\"\\n          \"],[8,[39,1],[[24,0,\"ui button icon\"]],[[\"@route\",\"@model\"],[\"store.detail\",[30,2,[\"id\"]]]],[[\"default\"],[[[[10,\"i\"],[14,0,\"eye icon\"],[12],[13],[1,\" Détails\"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"td\"],[12],[1,\"\\n          \"],[8,[39,1],[[24,0,\"ui button circular green icon\"]],[[\"@route\",\"@model\"],[\"store.index.edit\",[30,2,[\"id\"]]]],[[\"default\"],[[[[10,\"i\"],[14,0,\"icon edit\"],[12],[13]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"td\"],[12],[1,\"\\n          \"],[11,\"button\"],[24,0,\"circular ui icon red button\"],[4,[38,4],[[30,0],\"delete\",[30,2]],null],[12],[1,\"\\n            \"],[10,\"i\"],[14,0,\"icon delete\"],[12],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[2]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[46,[28,[37,6],null,null],null,null,null]],[\"@model\",\"section\"],false,[\"page-title\",\"link-to\",\"each\",\"-track-array\",\"action\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/store/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/store/index/add-pack", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Ii7grIZu",
    "block": "[[[1,[28,[35,0],[\"AddPack\"],null]],[1,\"\\n\"],[6,[39,1],null,[[\"class\"],[\"ui modal\"]],[[\"default\"],[[[[1,\"  \"],[11,\"form\"],[24,0,\"ui form\"],[4,[38,2],[[30,0],\"save\",[30,1,[\"product\"]]],[[\"on\"],[\"submit\"]]],[12],[1,\"\\n    \"],[10,\"h2\"],[12],[1,\"Ajouter un pack\"],[13],[1,\"\\n    \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n      \"],[10,\"label\"],[12],[1,\"Nom du pack\"],[13],[1,\"\\n      \"],[8,[39,3],[[24,\"placeholder\",\"Nom du pack\"]],[[\"@value\"],[[30,1,[\"product\",\"name\"]]]],null],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n      \"],[10,\"label\"],[12],[1,\"Produits du pack\"],[13],[1,\"\\n      \"],[8,[39,4],[[24,0,\"selection search multiple\"]],[[\"@selected\",\"@onChange\"],[[30,1,[\"product\",\"packs\"]],[28,[37,5],[[28,[37,6],[[30,1,[\"product\",\"packs\"]]],null]],null]]],[[\"default\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"default text\"],[12],[1,\"Produits\"],[13],[1,\"\\n        \"],[10,\"i\"],[14,0,\"dropdown icon\"],[12],[13],[1,\"\\n        \"],[10,0],[14,0,\"menu\"],[12],[1,\"\\n\"],[42,[28,[37,8],[[28,[37,8],[[30,1,[\"products\"]]],null]],null],null,[[[1,\"            \"],[10,0],[15,\"data-value\",[29,[[28,[37,9],[[30,3],[30,4]],null]]]],[14,0,\"item\"],[12],[1,\"\\n              \"],[1,[30,4,[\"name\"]]],[1,\"\\n            \"],[13],[1,\"\\n\"]],[4]],null],[1,\"        \"],[13],[1,\"\\n      \"]],[2,3]]]]],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n      \"],[10,\"label\"],[12],[1,\"Section du pack\"],[13],[1,\"\\n      \"],[8,[39,4],[[24,0,\"selection search\"]],[[\"@selected\",\"@onChange\"],[[30,1,[\"product\",\"section\"]],[28,[37,5],[[28,[37,6],[[30,1,[\"product\",\"section\"]]],null]],null]]],[[\"default\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"default text\"],[12],[1,\"Section\"],[13],[1,\"\\n        \"],[10,\"i\"],[14,0,\"dropdown icon\"],[12],[13],[1,\"\\n        \"],[10,0],[14,0,\"menu\"],[12],[1,\"\\n\"],[42,[28,[37,8],[[28,[37,8],[[30,1,[\"sections\"]]],null]],null],null,[[[1,\"            \"],[10,0],[15,\"data-value\",[29,[[28,[37,9],[[30,6],[30,7]],null]]]],[14,0,\"item\"],[12],[1,\"\\n              \"],[1,[30,7,[\"name\"]]],[1,\"\\n            \"],[13],[1,\"\\n\"]],[7]],null],[1,\"        \"],[13],[1,\"\\n      \"]],[5,6]]]]],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n      \"],[10,\"label\"],[12],[1,\"Prix\"],[13],[1,\"\\n      \"],[8,[39,3],[[24,3,\"price-produit\"],[24,\"required\",\"required\"],[24,\"placeholder\",\"Prix du pack\"],[24,4,\"number\"]],[[\"@value\"],[[30,1,[\"product\",\"price\"]]]],null],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"button\"],[14,0,\"ui positive button\"],[14,4,\"submit\"],[12],[1,\"Valider\"],[13],[1,\"\\n    \"],[8,[39,10],[[24,0,\"ui negative button\"]],[[\"@route\"],[\"store.index\"]],[[\"default\"],[[[[1,\"Annuler\"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[46,[28,[37,12],null,null],null,null,null]],[\"@model\",\"execute\",\"mapper\",\"product\",\"execute\",\"mapper\",\"section\"],false,[\"page-title\",\"ui-modal\",\"action\",\"input\",\"ui-dropdown\",\"fn\",\"mut\",\"each\",\"-track-array\",\"map-value\",\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/store/index/add-pack.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/store/index/add", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "avT8wyYF",
    "block": "[[[1,[28,[35,0],[\"Add\"],null]],[1,\"\\n\"],[6,[39,1],null,[[\"class\"],[\"ui modal\"]],[[\"default\"],[[[[1,\"    \"],[11,\"form\"],[24,0,\"ui form\"],[4,[38,2],[[30,0],\"save\",[30,1]],[[\"on\"],[\"submit\"]]],[12],[1,\"\\n      \"],[10,\"h2\"],[12],[1,\"Ajouter une section\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Nom de la section\"],[13],[1,\"\\n        \"],[8,[39,3],[[24,3,\"nom-section\"],[24,\"required\",\"required\"],[24,\"placeholder\",\"Nom de la section\"],[24,4,\"text\"]],[[\"@value\"],[[30,1,[\"name\"]]]],null],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Description\"],[13],[1,\"\\n        \"],[8,[39,4],[[24,3,\"description\"],[24,\"required\",\"required\"],[24,\"placeholder\",\"Description\"]],[[\"@value\"],[[30,1,[\"description\"]]]],null],[1,\"      \"],[13],[1,\"\\n      \"],[10,\"button\"],[14,0,\"ui positive approve button\"],[14,4,\"submit\"],[12],[1,\"Valider\"],[13],[1,\"\\n      \"],[8,[39,5],[[24,0,\"ui deny negative button\"]],[[\"@route\"],[\"store\"]],[[\"default\"],[[[[1,\"Annuler\"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]]]]],[46,[28,[37,7],null,null],null,null,null]],[\"@model\"],false,[\"page-title\",\"ui-modal\",\"action\",\"input\",\"textarea\",\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/store/index/add.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/store/index/delete-section", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "xhbCc+NF",
    "block": "[[[1,[28,[35,0],[\"DeleteSection\"],null]],[1,\"\\n\"],[6,[39,1],null,[[\"class\"],[\"ui modal segment center aligned\"]],[[\"default\"],[[[[1,\"    \"],[10,0],[14,0,\"ui icon header center aligned\"],[12],[1,\"\\n      \"],[10,\"i\"],[14,0,\"question icon\"],[12],[13],[1,\"\\n      La section \\\"\"],[1,[30,1,[\"sectionDelete\",\"name\"]]],[1,\"\\\" va être supprimée, mais elle comporte des produits, que voulez-vous faire de ces \"],[1,[30,1,[\"sectionDelete\",\"products\",\"length\"]]],[1,\" produits ? La section sera ensuite supprimée.\\n    \"],[13],[1,\"\\n    \"],[11,0],[24,0,\"ui green button\"],[24,5,\"margin-top: 1rem;\"],[4,[38,2],[[30,0],\"deleteAll\",[30,1,[\"sectionDelete\",\"id\"]]],null],[12],[1,\"Supprimer ces produits\"],[13],[1,\"\\n    \"],[10,0],[14,0,\"ui horizontal divider\"],[12],[1,\"\\n      Ou\\n    \"],[13],[1,\"\\n      \"],[11,\"form\"],[24,5,\"z-index: 999!important;\"],[4,[38,2],[[30,0],\"changeAll\",[30,1,[\"sectionDelete\",\"id\"]],[30,1,[\"secToChange\"]]],[[\"on\"],[\"submit\"]]],[12],[1,\"\\n      \"],[8,[39,3],[[24,0,\"selection search\"]],[[\"@selected\",\"@onChange\"],[[30,1,[\"secToChange\"]],[28,[37,4],[[28,[37,5],[[30,1,[\"secToChange\"]]],null]],null]]],[[\"default\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"default text\"],[12],[1,\"Section\"],[13],[1,\"\\n        \"],[10,\"i\"],[14,0,\"dropdown icon\"],[12],[13],[1,\"\\n        \"],[10,0],[14,0,\"menu\"],[12],[1,\"\\n\"],[42,[28,[37,7],[[28,[37,7],[[30,1,[\"sections\"]]],null]],null],null,[[[41,[51,[28,[37,9],[[30,4,[\"name\"]],[30,1,[\"sectionDelete\",\"name\"]]],null]],[[[1,\"              \"],[10,0],[15,\"data-value\",[29,[[28,[37,10],[[30,3],[30,4]],null]]]],[14,0,\"item\"],[12],[1,\"\\n                \"],[1,[30,4,[\"name\"]]],[1,\"\\n              \"],[13],[1,\"\\n\"]],[]],null]],[4]],null],[1,\"        \"],[13],[1,\"\\n      \"]],[2,3]]]]],[1,\"\\n      \"],[10,\"button\"],[14,0,\"ui orange button\"],[14,4,\"submit\"],[12],[1,\"Les déplacer dans une autre catégorie\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[8,[39,11],[[24,0,\"teal indicating\"]],[[\"@percent\",\"@total\"],[[29,[[30,0,[\"percent\"]]]],[29,[[30,0,[\"taille\"]]]]]],[[\"default\"],[[[[1,\"\\n      \"],[10,0],[14,0,\"bar\"],[12],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n\"],[41,[30,0,[\"activeImg\"]],[[[1,\"      \"],[10,\"img\"],[15,\"src\",[29,[\"/images/\",[30,0,[\"activeImg\"]],\".jpg\"]]],[14,0,\"ui medium image\"],[12],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[8,[39,13],[[24,0,\"ui negative button right floated\"]],[[\"@route\"],[\"store.index\"]],[[\"default\"],[[[[1,\"Annuler\"]],[]]]]],[1,\"\\n\"]],[]]]]],[46,[28,[37,15],null,null],null,null,null]],[\"@model\",\"execute\",\"mapper\",\"section\"],false,[\"page-title\",\"ui-modal\",\"action\",\"ui-dropdown\",\"fn\",\"mut\",\"each\",\"-track-array\",\"unless\",\"eq\",\"map-value\",\"ui-progress\",\"if\",\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/store/index/delete-section.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/store/index/edit", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hoZ4+VPE",
    "block": "[[[1,[28,[35,0],[\"Edit\"],null]],[1,\"\\n\"],[6,[39,1],null,[[\"class\"],[\"ui modal\"]],[[\"default\"],[[[[1,\"    \"],[11,\"form\"],[24,0,\"ui form\"],[4,[38,2],[[30,0],\"edit\",[30,1,[\"sectionToEdit\"]]],[[\"on\"],[\"submit\"]]],[12],[1,\"\\n      \"],[10,\"h2\"],[12],[1,\"Modifier la section\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Nom de la section\"],[13],[1,\"\\n        \"],[8,[39,3],[[24,3,\"nom-section\"],[24,\"required\",\"required\"],[24,4,\"text\"]],[[\"@value\"],[[30,1,[\"sectionToEdit\",\"name\"]]]],null],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Description\"],[13],[1,\"\\n        \"],[8,[39,4],[[24,3,\"description\"]],[[\"@value\"],[[30,1,[\"sectionToEdit\",\"description\"]]]],[[\"default\"],[[[],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"button\"],[14,0,\"ui positive button\"],[14,4,\"submit\"],[12],[1,\"Modifier\"],[13],[1,\"\\n      \"],[8,[39,5],[[24,0,\"ui negative button\"]],[[\"@route\"],[\"store\"]],[[\"default\"],[[[[1,\"Annuler\"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]]]]],[46,[28,[37,7],null,null],null,null,null]],[\"@model\"],false,[\"page-title\",\"ui-modal\",\"action\",\"input\",\"textarea\",\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/store/index/edit.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/users", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "yPML1eKP",
    "block": "[[[1,[28,[35,0],[\"Users\"],null]],[1,\"\\n\"],[10,0],[14,0,\"ui label\"],[12],[1,[30,1,[\"connected\",\"email\"]]],[13],[1,\"\\n\"],[8,[39,1],[[24,0,\"ui button\"]],[[\"@route\"],[\"users.add\"]],[[\"default\"],[[[[1,\"Ajouter utilisateur\"]],[]]]]],[1,\"\\n\"],[41,[30,1,[\"deleted\"]],[[[10,0],[14,0,\"ui success icon message\"],[12],[1,\"\\n  \"],[10,\"i\"],[14,0,\"ui circle remove icon\"],[12],[13],[1,\"\\n  Utilisateur supprimé : \"],[1,[30,1,[\"deleted\",\"name\"]]],[1,\"\\n\"],[13],[1,\"\\n\"]],[]],null],[10,\"ul\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,1,[\"users\"]]],null]],null],null,[[[1,\"    \"],[10,\"li\"],[12],[1,[30,2,[\"name\"]]],[1,\" \"],[1,[30,2,[\"email\"]]],[1,\"\\n      \"],[11,1],[24,0,\"ui red mini icon button\"],[4,[38,5],[[30,0],\"remove\",[30,2],[30,1]],null],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"ui remove icon\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[10,\"ul\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,2,[\"orders\"]]],null]],null],null,[[[1,\"        \"],[10,\"li\"],[12],[1,[30,3,[\"dateCreation\"]]],[1,\" \"],[1,[30,3,[\"status\"]]],[13],[1,\"\\n\"]],[3]],null],[1,\"    \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[2]],null],[13],[1,\"\\n\"],[46,[28,[37,7],null,null],null,null,null]],[\"@model\",\"user\",\"order\"],false,[\"page-title\",\"link-to\",\"if\",\"each\",\"-track-array\",\"action\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/users.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/templates/users/add", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "BToQStPU",
    "block": "[[[1,[28,[35,0],[\"Add\"],null]],[1,\"\\n\"],[11,\"form\"],[24,0,\"ui form\"],[4,[38,1],[[30,0],\"save\",[30,1]],[[\"on\"],[\"submit\"]]],[12],[1,\"\\n  \"],[8,[39,2],[[24,0,\"ui input\"],[24,\"required\",\"required\"],[24,\"placeholder\",\"Votre nom\"]],[[\"@value\"],[[30,1,[\"name\"]]]],null],[1,\"\\n  \"],[8,[39,2],[[24,0,\"ui input\"],[24,\"placeholder\",\"Votre email\"],[24,4,\"email\"]],[[\"@value\"],[[30,1,[\"email\"]]]],null],[1,\"\\n  \"],[8,[39,2],[[24,0,\"ui input\"],[24,\"placeholder\",\"Votre password\"],[24,4,\"password\"]],[[\"@value\"],[[30,1,[\"password\"]]]],null],[1,\"\\n  \"],[10,\"button\"],[14,0,\"ui positive button\"],[14,4,\"submit\"],[12],[1,\"Valider\"],[13],[1,\"\\n  \"],[8,[39,3],[[24,0,\"ui button\"]],[[\"@route\"],[\"users\"]],[[\"default\"],[[[[1,\"Annuler\"]],[]]]]],[1,\"\\n\"],[13],[1,\"\\n\"],[46,[28,[37,5],null,null],null,null,null]],[\"@model\"],false,[\"page-title\",\"action\",\"input\",\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "store/templates/users/add.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("store/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("store/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("store/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("store/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('store/config/environment', [], function() {
  var prefix = 'store';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("store/app")["default"].create({"name":"store","version":"0.0.0+ad858deb"});
          }
        
//# sourceMappingURL=store.map
