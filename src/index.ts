import { input } from "@inquirer/prompts";
import { inputQuestions } from "./questions/input.js";

const name = await input(inputQuestions[0]);

console.log(`Hello, ${name}!`)

process.exit();