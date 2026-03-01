export type OptionKey = "uppercase" | "lowercase" | "numbers" | "symbols";

export type Options = Record<OptionKey, boolean>;

export interface StrengthResult {
  label: string;
  color: string;
  width: string;
}

export interface OptionMeta {
  key: OptionKey;
  label: string;
}

export interface PasswordGeneratorState {
  length: number;
  options: Options;
  password: string;
  copied: boolean;
}
