type TFormatterProps = {
	value: number;
	locale?: string;
	options?: Intl.NumberFormatOptions;
};

type TCurrencyTemplate = Record<string, Omit<TFormatterProps, 'value'>>;

/**
 * Currency templates to be used with `currencyFormat` function
 */
export const currencyTemplates = {
	USD: {
		locale: 'en-US',
		options: {
			style: 'currency',
			currency: 'USD'
		}
	},
	EUR: {
		locale: 'fr-FR',
		options: {
			style: 'currency',
			currency: 'EUR'
		}
	},
	BRL: {
		locale: 'pt-BR',
		options: {
			style: 'currency',
			currency: 'BRL'
		}
	},
	JPY: {
		locale: 'ja-JP',
		options: {
			style: 'currency',
			currency: 'JPY'
		}
	}
} satisfies TCurrencyTemplate;

type TCurrencyFormatterProps = {
	value: TFormatterProps['value'];
	preset?: keyof typeof currencyTemplates;
};

/**
 * Generic currency formatter
 */
const formatter = ({ value, locale = 'en-US', options }: TFormatterProps) =>
	new Intl.NumberFormat(locale, options).format(value);

/**
 * Format a currency using the `Intl.NumberFormat API`
 */
export const currencyFormat = ({ value, preset }: TCurrencyFormatterProps) =>
	formatter({ value, ...(preset && currencyTemplates[preset]) });
