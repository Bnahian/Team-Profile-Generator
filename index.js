//Initialise required packages/modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const dir = './dist';
const filepath = './dist/index.html';