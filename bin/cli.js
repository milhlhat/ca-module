#!/usr/bin/env node

import { paramCase } from "change-case";
import fs from 'fs';
import inquirer from 'inquirer';
import path from "path";
import questions from "./question.js";
import getTemplate from "./template.js";

const getDirName = path.dirname
const CURR_DIR = process.cwd();

function createFileTemplate(moduleName, layers) {
    

    const moduleNameParamCase = paramCase(moduleName);


   const template = getTemplate(moduleName)

    const selectedLayers = template.filter(({ folder }) => layers.includes(folder))

    selectedLayers.forEach(({ files, folder }) => {
        files.forEach(({ name, content }) => {
            const filePath =  `${CURR_DIR}/${moduleNameParamCase}/${folder}/${name}`
            writeFile(filePath, content)
        })
    })
}

function writeFile(filePath, content) {
    fs.mkdir(getDirName(filePath), { recursive: true }, (err) => {
        fs.writeFileSync(filePath, content, (err) => {
            if (err) throw err;
        }
        );
        if (err) throw err;
        console.log('\x1b[32m%s\x1b[0m',`${filePath} has been created! ⚡️`);
    });
}



inquirer.prompt(questions).then(({moduleName, layers}) => {
    createFileTemplate(moduleName,  layers);
});