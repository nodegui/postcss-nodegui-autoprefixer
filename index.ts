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
      decl.cloneBefore({ prop: "qproperty-position" });
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
      decl.cloneBefore({ prop: "qproperty-top" });
    },
    right: decl => {
      decl.cloneBefore({ prop: "qproperty-right" });
    },
    bottom: decl => {
      decl.cloneBefore({ prop: "qproperty-bottom" });
    },
    left: decl => {
      decl.cloneBefore({ prop: "qproperty-left" });
    },
    "flex-basis": decl => {
      decl.prop = "qproperty-flexBasis";
    },
    "min-width": decl => {
      decl.cloneBefore({ prop: "qproperty-minWidth" });
    },
    "min-height": decl => {
      decl.cloneBefore({ prop: "qproperty-minHeight" });
    },
    width: decl => {
      decl.cloneBefore({ prop: "qproperty-qWidth" });
    },
    height: decl => {
      decl.cloneBefore({ prop: "qproperty-qHeight" });
    },
    "max-width": decl => {
      decl.cloneBefore({ prop: "qproperty-maxWidth" });
    },
    "max-height": decl => {
      decl.cloneBefore({ prop: "qproperty-maxHeight" });
    },
    "padding-top": decl => {
      decl.cloneBefore({ prop: "qproperty-paddingTop" });
    },
    "padding-right": decl => {
      decl.cloneBefore({ prop: "qproperty-paddingRight" });
    },
    "padding-bottom": decl => {
      decl.cloneBefore({ prop: "qproperty-paddingBottom" });
    },
    "padding-left": decl => {
      decl.cloneBefore({ prop: "qproperty-paddingLeft" });
    },
    "padding-horizontal": decl => {
      decl.cloneBefore({ prop: "qproperty-paddingHorizontal" });
      decl.cloneBefore({ prop: "padding-right" });
      decl.cloneBefore({ prop: "padding-left" });
      decl.remove();
    },
    "padding-vertical": decl => {
      decl.cloneBefore({ prop: "qproperty-paddingVertical" });
      decl.cloneBefore({ prop: "padding-bottom" });
      decl.cloneBefore({ prop: "padding-top" });
      decl.remove();
    },
    padding: decl => {
      decl.cloneBefore({ prop: "qproperty-padding" });
    },
    "margin-top": decl => {
      decl.cloneBefore({ prop: "qproperty-marginTop" });
    },
    "margin-right": decl => {
      decl.cloneBefore({ prop: "qproperty-marginRight" });
    },
    "margin-bottom": decl => {
      decl.cloneBefore({ prop: "qproperty-marginBottom" });
    },
    "margin-left": decl => {
      decl.cloneBefore({ prop: "qproperty-marginLeft" });
    },
    "margin-horizontal": decl => {
      decl.cloneBefore({ prop: "qproperty-marginHorizontal" });
      decl.cloneBefore({ prop: "margin-right" });
      decl.cloneBefore({ prop: "margin-left" });
      decl.remove();
    },
    "margin-vertical": decl => {
      decl.cloneBefore({ prop: "qproperty-marginVertical" });
      decl.cloneBefore({ prop: "margin-bottom" });
      decl.cloneBefore({ prop: "margin-top" });
      decl.remove();
    },
    margin: decl => {
      decl.cloneBefore({ prop: "qproperty-margin" });
    },
    "border-top": decl => {
      decl.cloneBefore({
        prop: "qproperty-borderTop",
        value: parseInt(`${decl.value}`)
      });
    },
    "border-right": decl => {
      decl.cloneBefore({
        prop: "qproperty-borderRight",
        value: parseInt(`${decl.value}`)
      });
    },
    "border-bottom": decl => {
      decl.cloneBefore({
        prop: "qproperty-borderBottom",
        value: parseInt(`${decl.value}`)
      });
    },
    "border-left": decl => {
      decl.cloneBefore({
        prop: "qproperty-borderLeft",
        value: parseInt(`${decl.value}`)
      });
    },
    "border-horizontal": decl => {
      decl.cloneBefore({
        prop: "qproperty-borderHorizontal",
        value: parseInt(`${decl.value}`)
      });
      decl.cloneBefore({ prop: "border-right" });
      decl.cloneBefore({ prop: "border-left" });
      decl.remove();
    },
    "border-vertical": decl => {
      decl.cloneBefore({
        prop: "qproperty-borderVertical",
        value: parseInt(`${decl.value}`)
      });
      decl.cloneBefore({ prop: "border-bottom" });
      decl.cloneBefore({ prop: "border-top" });
      decl.remove();
    },
    border: decl => {
      decl.cloneBefore({
        prop: "qproperty-border",
        value: parseInt(`${decl.value}`)
      });
    },
    "border-top-width": decl => {
      decl.cloneBefore({
        prop: "qproperty-borderTop",
        value: parseInt(`${decl.value}`)
      });
    },
    "border-right-width": decl => {
      decl.cloneBefore({
        prop: "qproperty-borderRight",
        value: parseInt(`${decl.value}`)
      });
    },
    "border-bottom-width": decl => {
      decl.cloneBefore({
        prop: "qproperty-borderBottom",
        value: parseInt(`${decl.value}`)
      });
    },
    "border-left-width": decl => {
      decl.cloneBefore({
        prop: "qproperty-borderLeft",
        value: parseInt(`${decl.value}`)
      });
    },
    "border-horizontal-width": decl => {
      decl.cloneBefore({
        prop: "qproperty-borderHorizontal",
        value: parseInt(`${decl.value}`)
      });
      decl.cloneBefore({ prop: "border-right" });
      decl.cloneBefore({ prop: "border-left" });
      decl.remove();
    },
    "border-vertical-width": decl => {
      decl.cloneBefore({
        prop: "qproperty-borderVertical",
        value: parseInt(`${decl.value}`)
      });
      decl.cloneBefore({ prop: "border-bottom" });
      decl.cloneBefore({ prop: "border-top" });
      decl.remove();
    },
    "border-width": decl => {
      decl.cloneBefore({
        prop: "qproperty-border",
        value: parseInt(`${decl.value}`)
      });
    }
  };
  return rules[propName] || noop;
};

type Rules = {
  [key: string]: (decl: postcss.Declaration) => void;
};

export default autoprefixer;
