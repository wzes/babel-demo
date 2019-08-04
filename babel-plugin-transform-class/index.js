// A plugin is just a function
module.exports = function ({ types: t }) {
  return {
      visitor: {
          ClassDeclaration(path) {
              //在这里完成转换
          },
          Identifier(path) {
            let name = path.node.name; // reverse the name: JavaScript -> tpircSavaJ
            path.node.name = name.split('').reverse().join('');
          }
      }
  };
}