const { execSync } = require("child_process");
const fs = require("fs");


if (!fs.existsSync("reports")) {
    fs.mkdirSync("reports");
}

const command =
"npx newman run collections/contactListCollection.json -e environments/qa.environment.json -r cli,htmlextra --reporter-htmlextra-export reports/api-test-report.html";

try {

    console.log("Starting API tests...");

    execSync(command, {
        stdio: "inherit"
    });


    console.log("API tests completed successfully");


} catch(error) {

    console.error(error.message);

    process.exit(1);
}
