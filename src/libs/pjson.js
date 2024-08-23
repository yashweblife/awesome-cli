import fs from "fs";

export function generatePackageJson(projectName){
    
    const output = JSON.stringify({
        name: projectName,
        version: "1.0.0",
        description: "",
        main: "index.js",
        type: "module",
        scripts: {
            dev: "node src/index.js",
            test: "echo \"Error: no test specified\" && exit 1",
        }
    })

    return {
        output
    }
}

export function writePackageJson(output){
    fs.writeFileSync("package.json", output);
}