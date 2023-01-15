import React, { useRef, useState } from 'react';
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

export const Chart = ({ reports, users }) => {
    // ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    // const labels = reports.map(r => r?.date)
    const [amountOfReportsToShow, setReportsToShow] = useState(reports.slice(reports.length - 100,reports.length - 1));
    const [length, setLength] = useState(reports.length - 1)

    
    const labels = amountOfReportsToShow.map(r => {
        if (!r.date) return null;
        const date = new Date(r?.date);
        if (date.getFullYear() < 2018) return 2018;
        return date.getFullYear();
    });

    const handlePagination = () => {

        setLength(length - 100)
        setReportsToShow([...reports].slice(length - 100,length));
    };

    const data = {
        labels,
        datasets: [
            {
                label: "First dataset",
                data: amountOfReportsToShow.map(r => r?.report),
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
                text: ` ${users.length} Patients`,
            },
        },
    };


    return <>
        //TODO style button
        <button onClick={() => handlePagination()}> Back </button>
        <Line data={data} options={options} />
    </>;


}

