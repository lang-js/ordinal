/**
 * Module dependencies
 */

var cldr = require('cldr');
var CldrPluralRuleSet = require('cldr/lib/CldrPluralRuleSet');
var Path = require('path');
var xpath = require('xpath');
var uglifyJs = require('uglify-js');

function expandLocaleIdToPrioritizedList(localeId) {
  if (!localeId) {
    return [];
  }
  var localeIds = [localeId];
  while (/_[^_]+$/.test(localeId)) {
    localeId = localeId.replace(/_[^_]+$/, '');
    localeIds.push(localeId);
  }
  return localeIds;
}

module.exports = function(cldr, localeId) {
  var document = cldr.getDocument(Path.resolve(cldr.cldrPath, 'common', 'supplemental', 'ordinals.xml'));
  var subLocaleIds = expandLocaleIdToPrioritizedList(localeId);
  var statementAsts = [];

  for (var i = 0 ; i < subLocaleIds.length ; i += 1) {
    var subLocaleId = subLocaleIds[i],
        matchLocalesXPathExpr =
          "@locales = '" + subLocaleId + "' or " +
          "starts-with(@locales, '" + subLocaleId + "') or " +
          "contains(@locales, ' " + subLocaleId + " ') or " +
          "substring(@locales, string-length(@locales) - string-length(' " + subLocaleId + "') + 1) = ' " + subLocaleId + "'",
        pluralRulesNodes = xpath.select("/supplementalData/plurals/pluralRules[" + matchLocalesXPathExpr + "]", document),
        cldrPluralRuleSet = new CldrPluralRuleSet();
    if (pluralRulesNodes.length > 0) {
      xpath.select("pluralRule", pluralRulesNodes[0]).forEach(function (pluralRuleNode) {
        cldrPluralRuleSet.addRule(pluralRuleNode.textContent, pluralRuleNode.getAttribute('count'));
      });
      statementAsts = cldrPluralRuleSet.toJavaScriptFunctionBodyAst();
      break;
    }
  }
  return new Function("n", uglifyJs.uglify.gen_code(['toplevel', statementAsts]));
};
