import postcss from "postcss";

import plugin from "../index";

const run = async (input: string, output: string, opts: any) => {
  const result = await postcss([plugin(opts)]).process(input, {
    from: undefined
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
};

it("autoprefix nodegui css", function() {
  return run(
    `
    #resultText {
      flex: 1;
      qproperty-yAlignment: 'AlignRight|AlignVCenter';
      font-size: 40px;
    }
    #row0 {
      flex: 1;
      align-items: stretch;
      justify-content: space-between;
      flex-direction: row;
    }
  `,
    `
    #resultText {
      qproperty-yFlex: 1;
      qproperty-yAlignment: 'AlignRight|AlignVCenter';
      font-size: 40px;
    }
    #row0 {
      qproperty-yFlex: 1;
      qproperty-yAlignItems: stretch;
      qproperty-yJustifyContent: space-between;
      qproperty-yFlexDirection: row;
    }
  `,
    {}
  );
});

it("autoprefix inline nodegui css", function() {
  return run(
    `
      flex: 1;
      qproperty-yAlignment: 'AlignRight|AlignVCenter';
      font-size: 40px;
  `,
    `
      qproperty-yFlex: 1;
      qproperty-yAlignment: 'AlignRight|AlignVCenter';
      font-size: 40px;
  `,
    {}
  );
});

it("height, width, max-height, max-width, min-height, min-width", function() {
  return run(
    `
      height: 12px;
      width: 12px;
      max-height:13px;
      max-width: 13px;
      min-height: 14px;
      min-width: 14px;
    `,
    `
      qproperty-yHeight: 12px;
      height: 12px;
      qproperty-yWidth: 12px;
      width: 12px;
      qproperty-yMaxHeight:13px;
      max-height:13px;
      qproperty-yMaxWidth: 13px;
      max-width: 13px;
      qproperty-yMinHeight: 14px;
      min-height: 14px;
      qproperty-yMinWidth: 14px;
      min-width: 14px;
    `,
    {}
  );
});

it("left,top,bottom,right", function() {
  return run(
    `
      top: 12px;
      left: 12px;
      bottom: 12px;
      right: 12px;
    `,
    `
      qproperty-yTop: 12px;
      top: 12px;
      qproperty-yLeft: 12px;
      left: 12px;
      qproperty-yBottom: 12px;
      bottom: 12px;
      qproperty-yRight: 12px;
      right: 12px;
    `,
    {}
  );
});

it("borders", function() {
  return run(
    `
      border-top: 10px;
      border-right: 11px;
      border-bottom: 12px;
      border-left: 13px;
      border-horizontal: 14px;
      border-vertical: 15px;
      border-width: 10px;
      border-top-width: 11px;
      border-right-width: 12px;
      border-bottom-width: 13px;
      border-right-width: 14px;
      border-horizontal-width: 15px;
      border-vertical-width: 16px;
    `,
    `
      qproperty-yBorderTop: 10;
      border-top: 10px;
      qproperty-yBorderRight: 11;
      border-right: 11px;
      qproperty-yBorderBottom: 12;
      border-bottom: 12px;
      qproperty-yBorderLeft: 13;
      border-left: 13px;
      qproperty-yBorderHorizontal: 14;
      border-right: 14px;
      border-left: 14px;
      qproperty-yBorderVertical: 15;
      border-bottom: 15px;
      border-top: 15px;
      qproperty-yBorder: 10;
      border-width: 10px;
      qproperty-yBorderTop: 11;
      border-top-width: 11px;
      qproperty-yBorderRight: 12;
      border-right-width: 12px;
      qproperty-yBorderBottom: 13;
      border-bottom-width: 13px;
      qproperty-yBorderRight: 14;
      border-right-width: 14px;
      qproperty-yBorderHorizontal: 15;
      border-right: 15px;
      border-left: 15px;
      qproperty-yBorderVertical: 16;
      border-bottom: 16px;
      border-top: 16px;
    `,
    {}
  );
});

it("margins", function() {
  return run(
    `
      margin-top: 10px;
      margin-right: 11px;
      margin-bottom: 12px;
      margin-left: 13px;
      margin-horizontal: 14px;
      margin-vertical: 15px;
    `,
    `
      qproperty-yMarginTop: 10px;
      margin-top: 10px;
      qproperty-yMarginRight: 11px;
      margin-right: 11px;
      qproperty-yMarginBottom: 12px;
      margin-bottom: 12px;
      qproperty-yMarginLeft: 13px;
      margin-left: 13px;
      qproperty-yMarginHorizontal: 14px;
      margin-right: 14px;
      margin-left: 14px;
      qproperty-yMarginVertical: 15px;
      margin-bottom: 15px;
      margin-top: 15px;
    `,
    {}
  );
});

it("padding", function() {
  return run(
    `
      padding-top: 10px;
      padding-right: 11px;
      padding-bottom: 12px;
      padding-left: 13px;
      padding-horizontal: 14px;
      padding-vertical: 15px;
    `,
    `
      qproperty-yPaddingTop: 10px;
      padding-top: 10px;
      qproperty-yPaddingRight: 11px;
      padding-right: 11px;
      qproperty-yPaddingBottom: 12px;
      padding-bottom: 12px;
      qproperty-yPaddingLeft: 13px;
      padding-left: 13px;
      qproperty-yPaddingHorizontal: 14px;
      padding-right: 14px;
      padding-left: 14px;
      qproperty-yPaddingVertical: 15px;
      padding-bottom: 15px;
      padding-top: 15px;
    `,
    {}
  );
});

it("position", function() {
  return run(
    `
      position: 'absolute';
      position: 'relative';
    `,
    `
      qproperty-yPosition: 'absolute';
      position: 'absolute';
      qproperty-yPosition: 'relative';
      position: 'relative';
    `,
    {}
  );
});
