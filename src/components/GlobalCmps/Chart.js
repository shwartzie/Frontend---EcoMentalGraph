import React, { useRef } from 'react';
import 'chartjs-plugin-datalabels';

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const Chart = ({ reports }) => {
    // ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    // const labels = reports.map(r => r?.date)

    console.log(reports)
    const demo = reports.slice(0, 100)
    const labels = demo.map(r => {
        if (!r.date) return null;
        const date = new Date(r?.date)
        if (date.getFullYear() < 2018) return 2018
        return date.getFullYear()
    })
    const data = {
        labels,
        datasets: [
            {
                label: "First dataset",
                data: demo.map(r => r?.report),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },

        ]
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Patients',
            },
        },
    };

    return <Line data={data} options={options} />;


}

