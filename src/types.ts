export type InputConfig = {
	message?: string;
	name?: string;
	validate?: (input: string) => true | string;
  default?: string;
  transformer?: (value: string, { isFinal }: { isFinal: boolean }) => string;
};