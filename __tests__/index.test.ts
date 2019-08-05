import postcss from "postcss";

import plugin from "../index";

const run = async (input: string, output: string, opts: any) => {
  const result = await postcss([plugin(opts)]).process(input);
  expect(output).toEqual(result.css);
  expect(result.warnings()).toHaveLength(0);
};

it("autoprefix nodegui css", function() {
  return run(
    `
    #resultText {
      flex: 1;
      qproperty-alignment: 'AlignRight|AlignVCenter';
      padding-right: 5px;
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
      padding-right: 5px;
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
      padding-right: 5px;
      font-size: 40px;
  `,
    `
      qproperty-flex: 1;
      qproperty-alignment: 'AlignRight|AlignVCenter';
      padding-right: 5px;
      font-size: 40px;
  `,
    {}
  );
});
