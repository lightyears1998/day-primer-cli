import path from "path";
import os from "os";


export function getProgramDataDir(): Record<string, string> {
    return {
        "win32": path.join(os.homedir(), "AppData/Roaming/DayPrimer"),
        "linux": path.join(os.homedir(), ".DayPrimer")
    };
}
