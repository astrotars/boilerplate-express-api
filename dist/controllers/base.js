'use strict';

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.get = async (req, res) => {
	res.json({ status: 'OK', code: 200 });
};