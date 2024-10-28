// Example progress data for each topic
const progressData = {
    AI: 5, // 5 notes written
    softwareDevelopment: 7, // 7 notes written
    cybersecurity: 3 // 3 notes written
};

// Maximum number of pixels per topic (total possible notes)
const maxPixels = 10;

// Function to create pixel tracker
function createPixelTracker() {
    const grid = document.getElementById('grid');

    for (const topic in progressData) {
        const pixelRow = document.createElement('div');
        pixelRow.className = 'pixel-row';
        
        const notesWritten = progressData[topic];
        
        // Generate pixels for the current topic
        for (let i = 0; i < maxPixels; i++) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            if (i < notesWritten) {
                pixel.classList.add('filled'); // Add filled class for written notes
            }
            pixelRow.appendChild(pixel);
        }
        
        // Create heading for the topic
        const topicHeading = document.createElement('h3');
        topicHeading.textContent = topic.charAt(0).toUpperCase() + topic.slice(1).replace(/([A-Z])/g, ' $1');
        
        grid.appendChild(topicHeading);
        grid.appendChild(pixelRow);
    }
}

// Initialize the pixel tracker on page load
createPixelTracker();
