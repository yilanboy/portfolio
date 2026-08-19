import { Theme } from "#lib/enums.js";

class ThemeState {
  current = $state<Theme>(Theme.Light);
}

export const theme = new ThemeState();
