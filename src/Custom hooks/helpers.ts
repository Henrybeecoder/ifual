import { states } from "../utils/state";

export const limitText = (text: string, limit: number) =>
  text.length > limit ? text.slice(0, limit) + "..." : text;

export const statesOptions = states.map((state) => ({
  value: state.name.toLowerCase(),
  label: state.name,
}));
