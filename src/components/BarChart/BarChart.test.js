import React from "react";
import BarChart from "./index";
import { mount } from "enzyme";
import { checkSvg } from "../../utils/Helper";
import * as d3 from "d3";

describe("Bar Chart", () => {
  let data;
  beforeAll(async () => {
    const generateData = (value, length = 5) =>
      d3.range(length).map((item, index) => ({
        index: index,
        date: index,
        value:
          value === null || value === undefined ? Math.random() * 100 : value,
      }));
    data = generateData();
  });

  describe("Graph with Brush", () => {
    let horizontalBrush, $;
    beforeAll(async (done) => {
      horizontalBrush = mount(
        <BarChart
          data={data}
          width={300}
          height={200}
          top={20}
          bottom={30}
          left={30}
          right={0}
        ></BarChart>
      );
      /* Delayed added because the bar is rendered with 300ms animation */
      setTimeout(() => {
        horizontalBrush.update();
        done();
      }, 350);
    });

    it("SVG Dimensions", () => {
      const result = checkSvg(horizontalBrush);
      expect(result).toBeTruthy();
    });
  });
});
