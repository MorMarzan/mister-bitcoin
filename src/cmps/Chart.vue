<template>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
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
                    backgroundColor: '#f87979',
                    data: this.data
                }]
            },
            chartOptions: {
                responsive: true
            }
        }
    }
}
</script>