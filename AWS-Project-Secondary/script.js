function checkStatus() {

    const primaryStatus = document.getElementById("primaryStatus");
    const healthStatus = document.getElementById("healthStatus");

    primaryStatus.textContent = "Healthy";
    healthStatus.textContent = "Healthy";

    alert("Primary server is healthy. Traffic is currently routed to the Primary Server.");
}


function simulateFailover() {

    // Primary
    document.getElementById("primaryStatus").textContent =
        "Unavailable";

    document.getElementById("primaryBadge").textContent =
        "● OFFLINE";

    // Secondary
    document.getElementById("secondaryStatus").textContent =
        "Active";

    document.getElementById("secondaryBadge").textContent =
        "● ACTIVE";

    // Routing
    document.getElementById("routingStatus").textContent =
        "SECONDARY SERVER";

    document.getElementById("routingDescription").textContent =
        "Primary server is unavailable. Traffic has been redirected to the secondary server.";

    // Health check
    document.getElementById("healthStatus").textContent =
        "Primary Unhealthy";

    alert("Failover simulated! Traffic is now routed to the Secondary Server.");
}


function resetSystem() {

    // Primary
    document.getElementById("primaryStatus").textContent =
        "Healthy";

    document.getElementById("primaryBadge").textContent =
        "● ONLINE";

    // Secondary
    document.getElementById("secondaryStatus").textContent =
        "Standby";

    document.getElementById("secondaryBadge").textContent =
        "● STANDBY";

    // Routing
    document.getElementById("routingStatus").textContent =
        "PRIMARY SERVER";

    document.getElementById("routingDescription").textContent =
        "All user traffic is currently being served by the primary server.";

    // Health check
    document.getElementById("healthStatus").textContent =
        "Healthy";

    alert("Primary server restored. Normal routing has resumed.");
}


function scrollToArchitecture() {

    document.getElementById("architecture").scrollIntoView({
        behavior: "smooth"
    });
}