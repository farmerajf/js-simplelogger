class Logger {
    SetMinimumSeverity(severity) {
        minimumSeverity = severity;
    }

    Log(severity, message) {
        if (severity >= minimumSeverity) {
            console.log(message);
        }
    }
}

let minimumSeverity = 3;
const JSLogger = new Logger();
Object.freeze(JSLogger);
export default JSLogger;