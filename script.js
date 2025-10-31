// Data for the charts
const globalData = {
    labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
    datasets: [{
        label: 'Global Renewable Energy Capacity (GW)',
        data: [1223, 1444, 1701, 2006, 2378, 2799],
        borderColor: '#3498db',
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        fill: true
    }]
};

const solarData = {
    labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
    datasets: [{
        label: 'Solar Energy Capacity (GW)',
        data: [40, 100, 177, 303, 486, 714],
        borderColor: '#f1c40f',
        backgroundColor: 'rgba(241, 196, 15, 0.1)',
        fill: true
    }]
};

const windData = {
    labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
    datasets: [{
        label: 'Wind Power Capacity (GW)',
        data: [198, 283, 370, 487, 591, 743],
        borderColor: '#2ecc71',
        backgroundColor: 'rgba(46, 204, 113, 0.1)',
        fill: true
    }]
};

const hydroData = {
    labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
    datasets: [{
        label: 'Hydropower Capacity (GW)',
        data: [935, 979, 1036, 1096, 1132, 1170],
        borderColor: '#9b59b6',
        backgroundColor: 'rgba(155, 89, 182, 0.1)',
        fill: true
    }]
};

// Initialize charts
document.addEventListener('DOMContentLoaded', () => {
    // Create global trends chart
    const globalCtx = document.getElementById('globalTrendsChart').getContext('2d');
    new Chart(globalCtx, {
        type: 'line',
        data: globalData,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Global Renewable Energy Growth'
                }
            }
        }
    });

    // Create solar chart
    const solarCtx = document.getElementById('solarChart').getContext('2d');
    new Chart(solarCtx, {
        type: 'line',
        data: solarData,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Solar Energy Capacity Growth'
                }
            }
        }
    });

    // Create wind chart
    const windCtx = document.getElementById('windChart').getContext('2d');
    new Chart(windCtx, {
        type: 'line',
        data: windData,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Wind Power Capacity Growth'
                }
            }
        }
    });

    // Create hydro chart
    const hydroCtx = document.getElementById('hydroChart').getContext('2d');
    new Chart(hydroCtx, {
        type: 'line',
        data: hydroData,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Hydropower Capacity Growth'
                }
            }
        }
    });

    // Navigation functionality
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add active class to clicked button and corresponding section
            button.classList.add('active');
            const sectionId = button.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Year slider functionality for each section
    const sliders = {
        solar: {
            slider: document.getElementById('solarYearSlider'),
            display: document.getElementById('solarSelectedYear')
        },
        wind: {
            slider: document.getElementById('windYearSlider'),
            display: document.getElementById('windSelectedYear')
        },
        hydro: {
            slider: document.getElementById('hydroYearSlider'),
            display: document.getElementById('hydroSelectedYear')
        }
    };

    // Add event listeners for all sliders
    Object.entries(sliders).forEach(([type, elements]) => {
        elements.slider.addEventListener('input', (e) => {
            elements.display.textContent = e.target.value;
            updateChartData(type, e.target.value);
        });
    });
});

// Function to update chart data based on selected year and type
function updateChartData(type, year) {
    // This function would typically fetch and update data for the selected year and energy type
    // For now, it's a placeholder that could be connected to a real data source
    console.log(`Updating ${type} data for year: ${year}`);
    
    // Example of how we could update the data dynamically
    const yearIndex = globalData.labels.indexOf(year);
    if (yearIndex !== -1) {
        switch(type) {
            case 'solar':
                document.querySelector(`#solar .stat`).textContent = `${solarData.datasets[0].data[yearIndex]} GW`;
                break;
            case 'wind':
                document.querySelector(`#wind .stat`).textContent = `${windData.datasets[0].data[yearIndex]} GW`;
                break;
            case 'hydro':
                document.querySelector(`#hydro .stat`).textContent = `${hydroData.datasets[0].data[yearIndex]} GW`;
                break;
        }
    }
}

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});