// Sample index.js code to display project version history

// Define projectVersionHistory object with version numbers and descriptions
const projectVersionHistory = [
    { version: "1.0.0", description: "Initial release" },
    { version: "1.1.0", description: "Added feature X" },
    { version: "1.1.1", description: "Fixed bug Y" },
    { version: "1.2.0", description: "Implemented feature Z" },
    // Add more versions and descriptions as needed
];

// Function to display project version history
function displayVersionHistory() {
    console.log("Project Version History:");
    projectVersionHistory.forEach(entry => {
        console.log(`${entry.version}: ${entry.description}`);
    });
}

// Call function to display version history
displayVersionHistory();