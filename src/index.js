export default function({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        if (path.node.name === 'catch' && t.isMemberExpression(path.parent)) {
          path.parent.computed = true
          path.replaceWith(t.stringLiteral('catch'))
        }
      }
    }
  };
}
