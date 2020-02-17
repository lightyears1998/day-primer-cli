import path from "path";
import os from "os";
import fs from "fs-extra";
import yaml from "js-yaml";
import { getProgramDataDir } from "./util";
import { Goal } from "./entity";

const programDataDir = getProgramDataDir()[os.platform()];

if (!programDataDir) {
    console.error(`Platform ${os.platform()} is not supported yet.`);
    process.exit(1);
}

const dataFilePath = path.join(programDataDir, "./data.yml");
console.log(dataFilePath);

fs.ensureDirSync(programDataDir);

let data = [];

try {
    data = yaml.safeLoad(fs.readFileSync(dataFilePath, { encoding: "utf8" }));
    for (let i = 0; i < data.length; ++i) {
        data[i] = new Goal(data[i].name, data[i].description, data[i].comulativeDuring)
    }
} catch (err) {
    if (err.code === "ENOENT") {
        fs.createFileSync(dataFilePath)
    } else {
        console.error(err);
    }
}

console.table(data);

data.push(new Goal(Math.random().toString(), Math.random().toString(), Math.random()))
fs.writeFileSync(dataFilePath, yaml.safeDump(data), { encoding: "utf8" });
