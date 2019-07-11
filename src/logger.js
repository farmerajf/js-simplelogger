class JSLogger {
    constructor() {
        if (!this.minimumSeverity) {
            this.minimumSeverity = 3;
        }
    }

    SetMinimumSeverity(severity) {
        console.log("Minimum severity set to " + severity);
        this.minimumSeverity = severity;
    }

    Log(severity, message) {
        console.log("Minimum severity is " + this.minimumSeverity + " and severity is " + severity);
        if (severity >= this.minimumSeverity) {
            console.log("So logging");
            console.log(message);
        } else {
            console.log("So not logging");
        }
    }
}

const Logger = new JSLogger();
export default Logger;
