/**
 * @file 创建page功能模块
 *
 * @author galaa2011[zhaopeng7353@163.com]
 */

var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdirp')
var handlebars = require('handlebars')
var log = require('./log')
var copy = require('sb-copy')

/**
 * [main] 新建page模板主函数
 * @param  {[Array]} args [命令行参数]
 */
exports.main = function (args) {
  var source = path.resolve(__dirname, '../tpl/')
  var dest = path.resolve(process.cwd(), './')
  console.log(source, dest)
  copy(source, dest)
    .then(function () {
      log.info('初始化成功')
    })
}