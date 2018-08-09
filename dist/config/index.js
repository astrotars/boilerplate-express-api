'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	env: process.env.NODE_ENV || 'development',
	server: {
		port: process.env.PORT || 3000
	}
};