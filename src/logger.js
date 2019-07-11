class JSLogger {
    constructor() {
        if (!global.minimumSeverity) {
            global.minimumSeverity = 3;
        }
    }

    SetMinimumSeverity(severity) {
        global.minimumSeverity = severity;
    }

    Log(severity, message) {
        if (severity >= global.minimumSeverity) {
            console.log(message);
        }
    }
}

const Logger = new JSLogger();
export default Logger;
