// Application Configuration
const config = {
    // MSAL Authentication Configuration
    auth: {
        clientId: "fc6fb1bd-08c2-4d81-9db5-2259deaa2170",
        authority: "https://maplecommercialafexid.ciamlogin.com/maplecommercialafexid.onmicrosoft.com",
        knownAuthorities: ["maplecommercialafexid.ciamlogin.com"],
        redirectUri: window.location.origin,
        scopes: ["api://3c9abe44-1b48-453c-868a-d87b72ff5702/MapelUATScope"],
    },
    
    // API Configuration
    api: {
        baseUrl: "https://localhost:5004", // Change to production URL when deploying
        endpoints: {
            userInvite: "/api/Notification/user-invite"
        }
    },
    
    // Application Settings
    app: {
        name: "Mapel App",
        version: "1.0.0",
        environment: "development" // Change to "production" when deploying
    }
};

// Make config available globally
window.appConfig = config;
