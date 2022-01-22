const APP_NAME: string = "Academy";
const WEBSOCKET_URL: string =
    process.env.NODE_ENV === "production"
        ? "https://enigmatic-hamlet-75905.herokuapp.com"
        : "http://localhost:5000";

export {APP_NAME, WEBSOCKET_URL};
