'use client'
import React, { Fragment, useEffect } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface ProgressBarProps {
    data: any;
    title: string;
    titleClass: string;
    barColor: string;
    labelEnabled?: boolean;
    heightgr?: number;
}
const ProgressBar = ({ data, title, titleClass, barColor, labelEnabled, heightgr }: ProgressBarProps) => {

    const options = {
        chart: {
            type: 'column',
            // width: largura,
            height: heightgr,
        },
        title: {
            text: null
        },
        yAxis: {
            softMax: 100,
            title: {
                text: null
            },
            labels: {
                format: '{text}%',
                enabled: labelEnabled
            },
        },
        tooltip: {
            pointFormat: "{point.y:.2f}%"
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.2f}%'
                },
            }
        },
        series: [
            {
                showInLegend: false,
                name: "",
                data: [data],
                color: barColor,
            }
        ],
        exporting: {
            enabled: false
        },

    };

    return (
        <Fragment>
            <div className="bg-transparent p-1">
                <div className={`text-center uppercase font-semibold text-blue-500 ${titleClass}`}>{title}</div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </Fragment>
    )
}

export default ProgressBar
