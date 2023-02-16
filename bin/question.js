const questions = [
    {
        type: 'input',
        name: 'moduleName',
        message: 'Module name:',
        default: 'MyModule',
        validate: function (input) {
            if (input.match(/^[a-zA-Z0-9]+$/)) return true;
            else return 'String and number only';
        },
    },
    {
        type: 'checkbox',
        name: 'layers',
        choices: ["domains", "use-cases", "adapters", "presentations"],
        message: 'What layers do you want to create?',
        default: ["domains", "use-cases", "adapters", "presentations"]
    },
];

export default questions;