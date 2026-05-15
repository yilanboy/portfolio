import { Theme } from '$lib/enums';

class ThemeState {
	current = $state<Theme>(Theme.Light);
}

export const theme = new ThemeState();
