import { InputConfig } from "../types.js";
import { toTitleCase } from "../utils/toTitleCase.js";

export const inputQuestions: InputConfig[] = [
	{
		message: "What's your name?",
		default: "User",
		validate: (input: string) => {
			if (input.trim() === "") {
				return "Name cannot be empty. Please enter your name.";
			}
			return true;
		},
		transformer: (input: string) => {
			return toTitleCase(input);
		},
	}
];