'use strict';

/**
 * testiblog service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testiblog.testiblog');
