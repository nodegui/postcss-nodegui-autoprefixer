import type { Declaration } from "postcss";

const noop = () => {};

const autoprefixer = (opts?: any) => {
  return {
    postcssPlugin: 'postcss-nodegui-autoprefixer',
    Once (root: any) {
      root.walkDecls((decl: any) => {
        const autoPrefixer = getAutoPrefixerForProp(decl.prop);
        autoPrefixer(decl);
      });
    }
  }
}
export const postcss = true;

const getAutoPrefixerForProp = (propName: string) => {
  const rules: Rules = {
      display: decl => {
      decl.prop = "qproperty-yDisplay";
    },
    "align-items": decl => {
      decl.prop = "qproperty-yAlignItems";
    },
    "align-content": decl => {
      decl.prop = "qproperty-yAlignContent";
    },
    "align-self": decl => {
      decl.prop = "qproperty-yAlignSelf";
    },
    "justify-content": decl => {
      decl.prop = "qproperty-yJustifyContent";
    },
    direction: decl => {
      decl.prop = "qproperty-yDirection";
    },
    "flex-direction": decl => {
      decl.prop = "qproperty-yFlexDirection";
    },
    overflow: decl => {
      decl.prop = "qproperty-yOverflow";
    },
    position: decl => {
      decl.cloneBefore({ prop: "qproperty-yPosition" });
    },
    "flex-wrap": decl => {
      decl.prop = "qproperty-yFlexWrap";
    },
    flex: decl => {
      decl.prop = "qproperty-yFlex";
    },
    "flex-grow": decl => {
      decl.prop = "qproperty-yFlexGrow";
    },
    "flex-shrink": decl => {
      decl.prop = "qproperty-yFlexShrink";
    },
    "aspect-ratio": decl => {
      decl.prop = "qproperty-yAspectRatio";
    },
    top: decl => {
      decl.cloneBefore({ prop: "qproperty-yTop" });
    },
    right: decl => {
      decl.cloneBefore({ prop: "qproperty-yRight" });
    },
    bottom: decl => {
      decl.cloneBefore({ prop: "qproperty-yBottom" });
    },
    left: decl => {
      decl.cloneBefore({ prop: "qproperty-yLeft" });
    },
    "flex-basis": decl => {
      decl.prop = "qproperty-yFlexBasis";
    },
    "min-width": decl => {
      decl.cloneBefore({ prop: "qproperty-yMinWidth" });
    },
    "min-height": decl => {
      decl.cloneBefore({ prop: "qproperty-yMinHeight" });
    },
    width: decl => {
      decl.cloneBefore({ prop: "qproperty-yWidth" });
    },
    height: decl => {
      decl.cloneBefore({ prop: "qproperty-yHeight" });
    },
    "max-width": decl => {
      decl.cloneBefore({ prop: "qproperty-yMaxWidth" });
    },
    "max-height": decl => {
      decl.cloneBefore({ prop: "qproperty-yMaxHeight" });
    },
    "padding-top": decl => {
      decl.cloneBefore({ prop: "qproperty-yPaddingTop" });
    },
    "padding-right": decl => {
      decl.cloneBefore({ prop: "qproperty-yPaddingRight" });
    },
    "padding-bottom": decl => {
      decl.cloneBefore({ prop: "qproperty-yPaddingBottom" });
    },
    "padding-left": decl => {
      decl.cloneBefore({ prop: "qproperty-yPaddingLeft" });
    },
    "padding-horizontal": decl => {
      decl.cloneBefore({ prop: "qproperty-yPaddingHorizontal" });
      decl.cloneBefore({ prop: "padding-right" });
      decl.cloneBefore({ prop: "padding-left" });
      decl.remove();
    },
    "padding-vertical": decl => {
      decl.cloneBefore({ prop: "qproperty-yPaddingVertical" });
      decl.cloneBefore({ prop: "padding-bottom" });
      decl.cloneBefore({ prop: "padding-top" });
      decl.remove();
    },
    padding: decl => {
      decl.cloneBefore({ prop: "qproperty-yPadding" });
    },
    "margin-top": decl => {
      decl.cloneBefore({ prop: "qproperty-yMarginTop" });
    },
    "margin-right": decl => {
      decl.cloneBefore({ prop: "qproperty-yMarginRight" });
    },
    "margin-bottom": decl => {
      decl.cloneBefore({ prop: "qproperty-yMarginBottom" });
    },
    "margin-left": decl => {
      decl.cloneBefore({ prop: "qproperty-yMarginLeft" });
    },
    "margin-horizontal": decl => {
      decl.cloneBefore({ prop: "qproperty-yMarginHorizontal" });
      decl.cloneBefore({ prop: "margin-right" });
      decl.cloneBefore({ prop: "margin-left" });
      decl.remove();
    },
    "margin-vertical": decl => {
      decl.cloneBefore({ prop: "qproperty-yMarginVertical" });
      decl.cloneBefore({ prop: "margin-bottom" });
      decl.cloneBefore({ prop: "margin-top" });
      decl.remove();
    },
    margin: decl => {
      decl.cloneBefore({ prop: "qproperty-yMargin" });
    },
    "border-top": decl => {
      decl.cloneBefore({
        prop: "qproperty-yBorderTop",
        value: decl.value
      });
    },
    "border-right": decl => {
      decl.cloneBefore({
        prop: "qproperty-yBorderRight",
        value: decl.value
      });
    },
    "border-bottom": decl => {
      decl.cloneBefore({
        prop: "qproperty-yBorderBottom",
        value: decl.value
      });
    },
    "border-left": decl => {
      decl.cloneBefore({
        prop: "qproperty-yBorderLeft",
        value: decl.value
      });
    },
    "border-horizontal": decl => {
      decl.cloneBefore({
        prop: "qproperty-yBorderHorizontal",
        value: decl.value
      });
      decl.cloneBefore({ prop: "border-right" });
      decl.cloneBefore({ prop: "border-left" });
      decl.remove();
    },
    "border-vertical": decl => {
      decl.cloneBefore({
        prop: "qproperty-yBorderVertical",
        value: decl.value
      });
      decl.cloneBefore({ prop: "border-bottom" });
      decl.cloneBefore({ prop: "border-top" });
      decl.remove();
    },
    border: decl => {
      decl.cloneBefore({
        prop: "qproperty-yBorder",
        value: decl.value
      });
    },
    "border-top-width": decl => {
      decl.cloneBefore({
        prop: "qproperty-yBorderTop",
        value: decl.value
      });
    },
    "border-right-width": decl => {
      decl.cloneBefore({
        prop: "qproperty-yBorderRight",
        value: decl.value
      });
    },
    "border-bottom-width": decl => {
      decl.cloneBefore({
        prop: "qproperty-yBorderBottom",
        value: decl.value
      });
    },
    "border-left-width": decl => {
      decl.cloneBefore({
        prop: "qproperty-yBorderLeft",
        value: decl.value
      });
    },
    "border-horizontal-width": decl => {
      decl.cloneBefore({
        prop: "qproperty-yBorderHorizontal",
        value: decl.value
      });
      decl.cloneBefore({ prop: "border-right" });
      decl.cloneBefore({ prop: "border-left" });
      decl.remove();
    },
    "border-vertical-width": decl => {
      decl.cloneBefore({
        prop: "qproperty-yBorderVertical",
        value: decl.value
      });
      decl.cloneBefore({ prop: "border-bottom" });
      decl.cloneBefore({ prop: "border-top" });
      decl.remove();
    },
    "border-width": decl => {
      decl.cloneBefore({
        prop: "qproperty-yBorder",
        value: decl.value
      });
    }
  };
  return rules[propName] || noop;
};

type Rules = {
  [key: string]: (decl: Declaration) => void;
};

export default autoprefixer;
