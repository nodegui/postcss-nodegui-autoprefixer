import postcss from "postcss";

const noop = () => {};

export const autoprefixer = postcss.plugin(
  "postcss-nodegui-autoprefixer",
  () => {
    return root => {
      root.walkDecls(decl => {
        const autoPrefixer = getAutoPrefixerForProp(decl.prop);
        autoPrefixer(decl);
      });
    };
  }
);

const getAutoPrefixerForProp = (propName: string) => {
  const rules: Rules = {
    display: decl => {
      decl.prop = "qproperty-display";
    },
    "align-items": decl => {
      decl.prop = "qproperty-alignItems";
    },
    "align-content": decl => {
      decl.prop = "qproperty-alignContent";
    },
    "align-self": decl => {
      decl.prop = "qproperty-alignSelf";
    },
    "justify-content": decl => {
      decl.prop = "qproperty-justifyContent";
    },
    direction: decl => {
      decl.prop = "qproperty-direction";
    },
    "flex-direction": decl => {
      decl.prop = "qproperty-flexDirection";
    },
    overflow: decl => {
      decl.prop = "qproperty-overflow";
    },
    position: decl => {
      decl.prop = "qproperty-position";
    },
    "flex-wrap": decl => {
      decl.prop = "qproperty-flexWrap";
    },
    flex: decl => {
      decl.prop = "qproperty-flex";
    },
    "flex-grow": decl => {
      decl.prop = "qproperty-flexGrow";
    },
    "flex-shrink": decl => {
      decl.prop = "qproperty-flexShrink";
    },
    "aspect-ratio": decl => {
      decl.prop = "qproperty-aspectRatio";
    },
    top: decl => {
      decl.prop = "qproperty-top";
    },
    right: decl => {
      decl.prop = "qproperty-right";
    },
    bottom: decl => {
      decl.prop = "qproperty-bottom";
    },
    left: decl => {
      decl.prop = "qproperty-left";
    },
    "flex-basis": decl => {
      decl.prop = "qproperty-flexBasis";
    },
    "min-width": decl => {
      decl.prop = "qproperty-minWidth";
    },
    "min-height": decl => {
      decl.prop = "qproperty-minHeight";
    },
    width: decl => {
      decl.prop = "qproperty-qWidth";
    },
    height: decl => {
      decl.prop = "qproperty-qHeight";
    },
    "max-width": decl => {
      decl.prop = "qproperty-maxWidth";
    },
    "max-height": decl => {
      decl.prop = "qproperty-maxHeight";
    },
    "padding-top": decl => {
      decl.prop = "qproperty-paddingTop";
    },
    "padding-right": decl => {
      decl.prop = "qproperty-paddingRight";
    },
    "padding-bottom": decl => {
      decl.prop = "qproperty-paddingBottom";
    },
    "padding-left": decl => {
      decl.prop = "qproperty-paddingLeft";
    },
    "padding-horizontal": decl => {
      decl.prop = "qproperty-paddingHorizontal";
    },
    "padding-vertical": decl => {
      decl.prop = "qproperty-paddingVertical";
    },
    padding: decl => {
      decl.prop = "qproperty-padding";
    },
    "margin-top": decl => {
      decl.prop = "qproperty-marginTop";
    },
    "margin-right": decl => {
      decl.prop = "qproperty-marginRight";
    },
    "margin-bottom": decl => {
      decl.prop = "qproperty-marginBottom";
    },
    "margin-left": decl => {
      decl.prop = "qproperty-marginLeft";
    },
    "margin-horizontal": decl => {
      decl.prop = "qproperty-marginHorizontal";
    },
    "margin-vertical": decl => {
      decl.prop = "qproperty-marginVertical";
    },
    margin: decl => {
      decl.prop = "qproperty-margin";
    },
    "boder-top": decl => {
      decl.prop = "qproperty-borderTop";
    },
    "border-right": decl => {
      decl.prop = "qproperty-borderRight";
    },
    "border-bottom": decl => {
      decl.prop = "qproperty-borderBottom";
    },
    "border-left": decl => {
      decl.prop = "qproperty-borderLeft";
    },
    "border-horizontal": decl => {
      decl.prop = "qproperty-borderHorizontal";
    },
    "border-vertical": decl => {
      decl.prop = "qproperty-borderVertical";
    },
    border: decl => {
      decl.prop = "qproperty-border";
    }
  };
  return rules[propName] || noop;
};

type Rules = {
  [key: string]: (decl: postcss.Declaration) => void;
};

export default autoprefixer;
