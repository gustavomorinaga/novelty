type TDateFormatProps = {
  value: string | number | Date;
  locale?: string;
  options?: Intl.DateTimeFormatOptions;
};

type TDateTemplate = Record<string, Omit<TDateFormatProps, 'value'>>;

export const dateFormat = ({ value, locale = 'en-US', options }: TDateFormatProps) =>
  new Intl.DateTimeFormat(locale, options).format(new Date(value));

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
