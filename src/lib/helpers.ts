export function formatDate(iso: string) {
	try {
		const d = new Date(iso);

		return new Intl.DateTimeFormat(navigator.language || 'en-US', {
			year: 'numeric',
			month: 'short',
			day: '2-digit'
		}).format(d);
	} catch {
		return iso;
	}
}
