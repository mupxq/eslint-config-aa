/**
 * index.js
 *
 * @author Hanyu Xue <hanyu.xue@afficienta.com>
 * @project eslint-config-aa
 * @license March, 2018 Afficient Academy, Inc. All Rights Reserved
 */

exports.extends = [

  './base',
  './react',
  './lodash',
  './promise',
  './hapi', // new line at the beginning of function 
  './ava'

].map(require.resolve);
