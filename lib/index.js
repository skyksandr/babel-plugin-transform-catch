"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(_ref) {
  var t = _ref.types;
  return {
    visitor: {
      Identifier: function Identifier(path) {
        if (path.node.name === 'catch' && t.isMemberExpression(path.parent)) {
          path.parent.computed = true;
          path.replaceWith(t.stringLiteral('catch'));
        }
      }
    }
  };
}