var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Dell',
                data: [3, 5, 4, 6, 7, 8, 5, 4, 6, 7, 8, 9], // Replace with actual warranty details for Dell
                backgroundColor: 'rgba(85, 85, 85, 0.5)',
                borderColor: 'rgb(41, 155, 99)',
                borderWidth: 1
            },
            {
                label: 'Lenovo',
                data: [4, 6, 5, 7, 8, 9, 6, 5, 7, 8, 9, 10], // Replace with actual warranty details for Lenovo
                backgroundColor: 'rgba(85, 85, 85, 0.5)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1
            },
            {
                label: 'ASUS',
                data: [5, 7, 6, 8, 9, 10, 7, 6, 8, 9, 10, 11], // Replace with actual warranty details for ASUS
                backgroundColor: 'rgba(85, 85, 85, 0.5)',
                borderColor: 'rgb(255, 205, 86)',
                borderWidth: 1
            },
            {
                label: 'HP',
                data: [6, 8, 7, 9, 10, 11, 8, 7, 9, 10, 11, 12], // Replace with actual warranty details for HP
                backgroundColor: 'rgba(85, 85, 85, 0.5)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true
    }
});
