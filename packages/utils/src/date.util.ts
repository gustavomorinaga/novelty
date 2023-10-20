type TFormatterProps = {
	value: string | number | Date;
	locale?: string;
	options?: Intl.DateTimeFormatOptions;
};

type TDateTemplate = Record<string, Omit<TFormatterProps, 'value'>>;

/**
 * Date templates to be used with `dateFormat` function
 */
export const dateTemplates = {
	'YYYY-MM-DD': {
		locale: 'fr-CA',
		options: {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		}
	}
} satisfies TDateTemplate;

type TDateFormatterProps = {
	value: TFormatterProps['value'];
	preset?: keyof typeof dateTemplates;
};

/**
 * Generic currency formatter
 */
const formatter = ({ value, locale = 'en-US', options }: TFormatterProps) =>
	new Intl.DateTimeFormat(locale, options).format(new Date(value));

/**
 * Format a date using the `Intl.DateTimeFormat API`
 */
export const dateFormat = ({ value, preset }: TDateFormatterProps) =>
	formatter({ value, ...(preset && dateTemplates[preset]) });
