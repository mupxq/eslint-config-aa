/**
 * hapi/index.js
 *
 * @author Hanyu Xue <hanyu.xue@afficienta.com>
 * @project eslint-config-aa
 * @license March, 2018 Afficient Academy, Inc. All Rights Reserved
 */

exports.extends = [

  './rules/hapi.yml'

].map(require.resolve);
