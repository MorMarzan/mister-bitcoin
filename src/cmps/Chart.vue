<template>
    <Bar :options="chartOptions" :data="chartData" />
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    props: ['labels', 'data', 'name'],
    data() {
        return {
            chartData: {
                labels: this.labels,
                datasets: [{
                    label: this.name,
                    color: "#FFFFFF",
                    backgroundColor: '#f87979',
                    data: this.data
                }]
            },
            chartOptions: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: '#FFFFFF'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: "#FFFFFF"
                        }
                    },
                    y: {
                        ticks: {
                            color: "#FFFFFF"
                        }
                    }
                }
            }
        }
    }
}
</script>