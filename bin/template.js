import { camelCase, paramCase } from "change-case";
import { titleCase } from "title-case";

export default function getTemplate(moduleName){
    const logicExtension = 'ts';
    const moduleNameParamCase = paramCase(moduleName);
    const moduleNameTitleCase = titleCase(moduleName);
    const moduleNameCamelCase = camelCase(moduleName);
    const repoFile = `${moduleNameParamCase}.repository`

    return [
        {
            folder: 'domains',
            files: [
                {
                    name: `${moduleNameParamCase}.entity.${logicExtension}`,
                    content: `export interface ${moduleNameTitleCase}Entity {}`
                },
                {
                    name: `${repoFile}.${logicExtension}`,
                    content: `export interface ${moduleNameTitleCase}Repository {}`
                },
                {
                    name: `${moduleNameParamCase}.model.${logicExtension}`,
                    content: `import { ${moduleNameTitleCase}Repository } from './${repoFile}';\nclass ${moduleNameTitleCase}Service implements ${moduleNameTitleCase}Repository {}\nconst ${moduleNameCamelCase}Service = new ${moduleNameTitleCase}Service();\nexport default ${moduleNameCamelCase}Service;`
                }

            ]
        },
        {
            folder: 'use-cases',
            files: [
                {
                    name: `index.${logicExtension}`,
                    content: `export {}`
                },
            ]
        },
        {
            folder: 'adapters',
            files: [
                {
                    name: `index.${logicExtension}`,
                    content: `export {}`
                }
            ]
        },
        {
            folder: 'presentations',
            files: [
                {
                    name: `index.${logicExtension}`,
                    content: `export {}`
                }
            ]
        }
    ]
}