import postcss from "postcss";

const noop = () => {};

export default postcss.plugin("postcss-nodegui-prefix", () => {
  return root => {
    root.walkDecls(decl => {
      const autoPrefixer = getAutoPrefixerForProp(decl.prop);
      autoPrefixer(decl);
    });
  };
});

const getAutoPrefixerForProp = (propName: string) => {
  const rules: Rules = {
    flex: decl => {
      decl.prop = "qproperty-flex";
    },
    "align-items": decl => {
      decl.prop = "qproperty-alignItems";
    },
    "justify-content": decl => {
      decl.prop = "qproperty-justifyContent";
    },
    "flex-direction": decl => {
      decl.prop = "qproperty-flexDirection";
    }
  };
  return rules[propName] || noop;
};

type Rules = {
  [key: string]: (decl: postcss.Declaration) => void;
};
