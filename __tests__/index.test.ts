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
      qproperty-alignment: 'AlignRight|AlignVCenter';
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
      qproperty-flex: 1;
      qproperty-alignment: 'AlignRight|AlignVCenter';
      font-size: 40px;
    }
    #row0 {
      qproperty-flex: 1;
      qproperty-alignItems: stretch;
      qproperty-justifyContent: space-between;
      qproperty-flexDirection: row;
    }
  `,
    {}
  );
});

it("autoprefix inline nodegui css", function() {
  return run(
    `
      flex: 1;
      qproperty-alignment: 'AlignRight|AlignVCenter';
      font-size: 40px;
  `,
    `
      qproperty-flex: 1;
      qproperty-alignment: 'AlignRight|AlignVCenter';
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
      qproperty-qHeight: 12px;
      height: 12px;
      qproperty-qWidth: 12px;
      width: 12px;
      qproperty-maxHeight:13px;
      max-height:13px;
      qproperty-maxWidth: 13px;
      max-width: 13px;
      qproperty-minHeight: 14px;
      min-height: 14px;
      qproperty-minWidth: 14px;
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
      qproperty-top: 12px;
      top: 12px;
      qproperty-left: 12px;
      left: 12px;
      qproperty-bottom: 12px;
      bottom: 12px;
      qproperty-right: 12px;
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
      qproperty-borderTop: 10px;
      border-top: 10px;
      qproperty-borderRight: 11px;
      border-right: 11px;
      qproperty-borderBottom: 12px;
      border-bottom: 12px;
      qproperty-borderLeft: 13px;
      border-left: 13px;
      qproperty-borderHorizontal: 14px;
      border-right: 14px;
      border-left: 14px;
      qproperty-borderVertical: 15px;
      border-bottom: 15px;
      border-top: 15px;
      qproperty-border: 10px;
      border-width: 10px;
      qproperty-borderTop: 11px;
      border-top-width: 11px;
      qproperty-borderRight: 12px;
      border-right-width: 12px;
      qproperty-borderBottom: 13px;
      border-bottom-width: 13px;
      qproperty-borderRight: 14px;
      border-right-width: 14px;
      qproperty-borderHorizontal: 15px;
      border-right: 15px;
      border-left: 15px;
      qproperty-borderVertical: 16px;
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
      qproperty-marginTop: 10px;
      margin-top: 10px;
      qproperty-marginRight: 11px;
      margin-right: 11px;
      qproperty-marginBottom: 12px;
      margin-bottom: 12px;
      qproperty-marginLeft: 13px;
      margin-left: 13px;
      qproperty-marginHorizontal: 14px;
      margin-right: 14px;
      margin-left: 14px;
      qproperty-marginVertical: 15px;
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
      qproperty-paddingTop: 10px;
      padding-top: 10px;
      qproperty-paddingRight: 11px;
      padding-right: 11px;
      qproperty-paddingBottom: 12px;
      padding-bottom: 12px;
      qproperty-paddingLeft: 13px;
      padding-left: 13px;
      qproperty-paddingHorizontal: 14px;
      padding-right: 14px;
      padding-left: 14px;
      qproperty-paddingVertical: 15px;
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
      qproperty-position: 'absolute';
      position: 'absolute';
      qproperty-position: 'relative';
      position: 'relative';
    `,
    {}
  );
});
