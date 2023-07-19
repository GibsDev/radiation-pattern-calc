import {useEffect, useRef} from "react";
import Chart from "chart.js/auto";

const CartesianGraph = ({points}) => {

    const canvasRef = useRef();

    useEffect(() => {
        if (!canvasRef) return;

        const ctx = canvasRef.current.getContext('2d');
        const chart = new Chart(ctx, {
            type: 'scatter',
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: { y: 0 },
                        min: -10,
                        max: 10
                    },
                    y: {
                        type: 'linear',
                        position: { x: 0 },
                        min: -10,
                        max: 10
                    }
                }
            },
            data: {
                datasets: [{
                    label: 'Scatter Dataset',
                    data: points,
                    backgroundColor: 'rgb(255, 99, 132)'
                }]
            }
        });

        return () => {
            chart.destroy();
        };
    }, [canvasRef]);

    return <canvas ref={canvasRef} width={10} height={10}></canvas>;
};

export default CartesianGraph;
