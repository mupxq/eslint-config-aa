/**
 * base/index.js
 *
 * @author Hanyu Xue <hanyu.xue@afficienta.com>
 * @project eslint-config-aa
 * @license March, 2018 Afficient Academy, Inc. All Rights Reserved
 */

exports.extends = [

  './rules/best-practices.yml',
  './rules/errors.yml',
  './rules/node.yml',
  './rules/style.yml',
  './rules/variables.yml',
  './rules/esnext.yml',
  './rules/imports.yml'

].map(require.resolve);


exports.parser = 'babel-eslint';


exports.rules = { strict: 'error' };
