'use strict';

var _base = require('../controllers/base');

var _base2 = _interopRequireDefault(_base);

var _controllers = require('../utils/controllers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = api => {
	api.route('/').get((0, _controllers.wrapAsync)(_base2.default.get));
};