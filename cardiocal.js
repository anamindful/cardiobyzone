function calculateTHR() {
    const age = document.getElementById('age').value;
    const maxHeartRate = 220 - age;
    const resultsDiv = document.getElementById('results');
    
    if (!age) {
        resultsDiv.innerHTML = '<p>Please enter a valid age.</p>';
        return;
    }

    const zones = [
        { name: "Very Light (Warm Up Zone)", min: 0.50, max: 0.60 },
        { name: "Light (Fat Burn Zone)", min: 0.60, max: 0.70 },
        { name: "Moderate (Aerobic Zone)", min: 0.70, max: 0.80 },
        { name: "Hard (Anaerobic Zone)", min: 0.80, max: 0.90 },
        { name: "Maximum (VO2 Max Zone)", min: 0.90, max: 1.00 }
    ];

    let html = `<p>Max Heart Rate (MHR): ${maxHeartRate} bpm</p>`;
    html += '<h2>Target Heart Rate (THR) Zones:</h2>';

    zones.forEach(zone => {
        const minTHR = Math.round(maxHeartRate * zone.min);
        const maxTHR = Math.round(maxHeartRate * zone.max);
        html += `<div class="zone"><strong>${zone.name}:</strong> ${minTHR} - ${maxTHR} bpm</div>`;
    });

    resultsDiv.innerHTML = html;
}
