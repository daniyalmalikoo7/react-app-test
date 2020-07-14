import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import BarChart from "../../components/BarChart";
import './Charts.css';

function Charts() {
    const generateData = (value, length = 5) =>
        d3.range(length).map((item, index) => ({
            index: index,
            date: index,
            value: value === null || value === undefined ? Math.random() * 100 : value
        }));

    const [data, setData] = useState(generateData());
    const changeData = () => {
        // setData(generateData(null, Math.floor(Math.random() * 10 + 1)));
        setData(generateData());
    };

    return (
        <div className="Charts">
            <div>
                <span className="label">Bar SVG</span>
                <BarChart
                    data={data}
                    width={300}
                    height={200}
                    top={20}
                    bottom={30}
                    left={30}
                    right={0}
                />
            </div>
        </div>
    );
}

export default Charts;