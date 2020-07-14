import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import BarChart from "../../components/BarChart";
import "./Charts.css";

function Charts() {
    useEffect(() => {
        document.title = "React Bar Chart";
    }, []);

    const generateData = (value, length = 5) =>
        d3.range(length).map((item, index) => ({
            index: index,
            date: index,
            value:
                value === null || value === undefined ? Math.random() * 100 : value,
        }));

    const [data, setData] = useState(generateData());

    const changeData = () => {
        setData(generateData());
    };

    return (
        <div className="Charts">
            <span className="label">Bar Chart</span>
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
    );
}

export default Charts;