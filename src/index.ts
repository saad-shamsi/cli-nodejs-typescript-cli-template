#!/usr/bin/env node

import { input } from "@inquirer/prompts";
import { beautifyName } from "./utils/beautifyName.js";

const name = await input({
	message: "What's your name?",
	default: "User",
	validate: (input: string) => {
		if (input.trim() === "") {
			return "Name cannot be empty. Please enter your name.";
		}
		return true;
	},
	transformer: (input: string) => {
		return beautifyName(input);
	},
});

console.log(`Hello, ${name}!`);

process.exit();

