import fs from "fs";

const csv = fs.readFileSync("./data/master.csv", "utf8");

const rows = csv.trim().split("\n").slice(1);

const validStatuses = new Set(["vf", "vo", "ev", "et", "vr"]);

for (const [index, row] of rows.entries()) {
const [passport, destination, status, days] = row.split(",");

if (!passport || passport.length !== 2) {
throw new Error(`Invalid passport code at row ${index + 2}`);
}

if (!destination || destination.length !== 2) {
throw new Error(`Invalid destination code at row ${index + 2}`);
}

if (!validStatuses.has(status)) {
throw new Error(`Invalid status at row ${index + 2}`);
}

if (days && Number.isNaN(Number(days))) {
throw new Error(`Invalid days value at row ${index + 2}`);
}
}

console.log("✓ Validation passed");
