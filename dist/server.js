'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = (0, _express2.default)();

api.use((0, _cors2.default)());
api.use((0, _compression2.default)());
api.use(_bodyParser2.default.urlencoded({ extended: true }));
api.use(_bodyParser2.default.json());

api.listen(_config2.default.server.port, err => {
	if (err) {
		console.error(err);
		process.exit(1);
	}

	_fs2.default.readdirSync(_path2.default.join(__dirname, 'routes')).map(file => {
		require('./routes/' + file)(api);
	});

	console.log(`API is now running on port ${_config2.default.server.port} in ${_config2.default.env} mode`);
});

module.exports = api;