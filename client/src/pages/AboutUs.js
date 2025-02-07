


import React, { useEffect } from 'react';
import '../styles/AboutUs.css';  // Ensure this path is correct

const CropSalesAnalytics = () => {
    useEffect(() => {
        // Load the Google Charts library
        const loadGoogleCharts = () => {
            window.google.charts.load('current', { packages: ['corechart'] });
            window.google.charts.setOnLoadCallback(drawCharts);
        };

        // Check if google is already available
        if (window.google && window.google.charts) {
            loadGoogleCharts();
        } else {
            const script = document.createElement('script');
            script.src = 'https://www.gstatic.com/charts/loader.js';
            script.onload = loadGoogleCharts;
            document.body.appendChild(script);
        }

        // Cleanup function to remove script
        return () => {
            const script = document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');
            if (script) document.body.removeChild(script);
        };
    }, []);

    const drawCharts = () => {
        drawPieChart();
        drawBarChart();
        drawLineChart();
        drawBubbleChart();
        drawScatterChart();
    };

    const drawPieChart = () => {
        const data = window.google.visualization.arrayToDataTable([
            ['Crop', 'Sales'],
            ['Paddy', 11],
            ['Wheat', 2],
            ['Flour', 2],
            ['Sugar Cane', 2],
            ['Pineapple', 7]
        ]);

        const options = {
            title: 'Market Analytics'
        };

        const chart = new window.google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    };

    const drawBarChart = () => {
        const data = window.google.visualization.arrayToDataTable([
            ['Crop', 'Sales'],
            ['Paddy', 11],
            ['Wheat', 2],
            ['Flour', 2],
            ['Sugar Cane', 2],
            ['Pineapple', 7]
        ]);

        const options = {
            title: 'Sales Comparison (Bar Chart)',
            hAxis: { title: 'Crops' },
            vAxis: { title: 'Sales' },
            bars: 'vertical'
        };

        const chart = new window.google.visualization.BarChart(document.getElementById('barchart'));
        chart.draw(data, options);
    };
    const drawLineChart = () => {
        const data = window.google.visualization.arrayToDataTable([
            ['Month', 'Paddy', 'Wheat', 'Flour', 'Sugar Cane', 'Pineapple'],
            ['Jan', 3, 1, 1, 1, 2],
            ['Feb', 4, 2, 1, 1, 2],
            ['Mar', 5, 3, 2, 1, 3],
            ['Apr', 6, 3, 2, 2, 4],
            ['May', 7, 4, 2, 2, 5],
            ['Jun', 8, 4, 3, 3, 5],
            ['Jul', 9, 5, 3, 3, 6],
            ['Aug', 10, 5, 4, 4, 6],
            ['Sep', 11, 6, 4, 4, 7],
            ['Oct', 12, 6, 5, 5, 8],
            ['Nov', 13, 7, 5, 5, 8],
            ['Dec', 14, 7, 6, 6, 9]
        ]);

        const options = {
            title: 'Monthly Sales Trends',
            hAxis: { title: 'Month' },
            vAxis: { title: 'Sales' },
            series: { 0: { curveType: 'function' } }
        };

        const chart = new window.google.visualization.LineChart(document.getElementById('linechart'));
        chart.draw(data, options);
    };

    const drawBubbleChart = () => {
        const data = window.google.visualization.arrayToDataTable([
            ['ID', 'Month', 'Sales', 'Volume'],
            ['A', 1, 12, 10],
            ['B', 2, 5.5, 5],
            ['C', 3, 14, 14],
            ['D', 4, 8, 7],
            ['E', 5, 7, 5],
            ['F', 6, 18, 10]
        ]);

        const options = {
            title: 'Sales Volume Analysis',
            hAxis: { title: 'Month' },
            vAxis: { title: 'Sales' },
            bubble: { textStyle: { fontSize: 11 } }
        };

        const chart = new window.google.visualization.BubbleChart(document.getElementById('bubblechart'));
        chart.draw(data, options);
    };

    const drawScatterChart = () => {
        const data = window.google.visualization.arrayToDataTable([
            ['Month', 'Sales'],
            [1, 7],
            [2, 8],
            [3, 8.5],
            [4, 7],
            [5, 6],
            [6, 8],
            [7, 9],
            [8, 7.5],
            [9, 8],
            [10, 9],
            [11, 7],
            [12, 8]
        ]);

        const options = {
            title: 'Monthly Sales Distribution',
            hAxis: { title: 'Month' },
            vAxis: { title: 'Sales' },
            legend: 'none'
        };

        const chart = new window.google.visualization.ScatterChart(document.getElementById('scatterchart'));
        chart.draw(data, options);
    };

    return (
        <div>
            <header>
                <h1>Crop Sales Analytics</h1>
            </header>
            <main>
                <section className="chart-wrapper">
                    <div id="piechart" className="chart"></div>
                    <div id="barchart" className="chart"></div>
                </section>
                <section className="chart-wrapper">
                    <div id="linechart" className="chart"></div>
                    <div id="bubblechart" className="chart"></div>
                </section>
                <section className="chart-wrapper">
                    <div id="scatterchart" className="chart"></div>
                </section>
            </main>
        </div>
    );
};
export default CropSalesAnalytics;
