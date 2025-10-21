import * as yup from 'yup';

import { FixedPointMath } from '@/lib';

export const validationSchema = yup.object({
  name: yup.string(),
  step: yup.number(),
  symbol: yup
    .string()
    .matches(
      /^[a-zA-Z][\x21-\x7E]*$/,
      'This symbol is not following ASCII pattern'
    ),
  projectUrl: yup
    .string()
    .transform((value) => {
      if (!value) return value;
      if (!/^https?:\/\//i.test(value)) {
        return `https://${value}`;
      }
      return value;
    })
    .url('You must provide an URL')
    .notOneOf(
      [yup.ref('name'), yup.ref('symbol')],
      'The description must be different than the name and symbol'
    ),
  imageUrl: yup.mixed().test({
    name: 'imageUrl',
    message: 'You must provide a valid image URL',
    test: async (value, ctx) => {
      if (value == null || value === '') return true;

      if (typeof value !== 'string') {
        return ctx.createError({
          message: 'The value must be a string (URL).',
        });
      }

      const v = value.trim();
      if (!v) return true;

      const SUPPORTED_MIME = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/webp',
      ];

      const EXT_RE = /\.(?:jpe?g|png|gif|webp)(?:\?.*)?$/i;
      const HINT_RE =
        /(?:[?&](?:format|fm|mime)[:=]?(?:webp|jpeg|jpg|png|gif))|(?:\/format:(?:webp|jpeg|jpg|png|gif)\/?)/i;
      const DATA_URL_RE =
        /^data:image\/(jpeg|jpg|png|gif|webp);base64,[A-Za-z0-9+/=]+$/i;

      if (v.startsWith('data:')) {
        return DATA_URL_RE.test(v)
          ? true
          : ctx.createError({ message: 'Invalid URL data for image.' });
      }

      let url: URL;
      try {
        url = new URL(v);
      } catch {
        return ctx.createError({
          message: 'You must provide a valid image URL',
        });
      }
      if (!/^https?:$/.test(url.protocol)) {
        return ctx.createError({
          message: 'Only URL http/https or data: are allowed.',
        });
      }

      const looksLikeImage =
        EXT_RE.test(url.pathname) || HINT_RE.test(url.href);

      if (typeof fetch === 'function') {
        try {
          const res = await fetch(v, { method: 'HEAD' });
          const ct = (res.headers.get('content-type') || '').toLowerCase();
          if (ct) {
            if (SUPPORTED_MIME.some((m) => ct.startsWith(m))) return true;
            return ctx.createError({
              message: `The URL does not point to a supported image (Content-Type:  ${ct}).`,
            });
          }
        } catch {
          /* empty */
        }
      }

      return looksLikeImage
        ? true
        : ctx.createError({
            message: "We couldn't confirm that the URL is an image.",
          });
    },
  }),
  supply: yup
    .number()
    .required('Supply is a required field')
    .min(1, 'You cannot add numbers less than 0')
    .required('Total Supply is a required field'),
  decimals: yup
    .number()
    .required('Decimals is a required field')
    .min(0, 'You cannot add numbers less than 0')
    .max(11, 'You cannot add numbers greater than 11'),
  fixedSupply: yup.boolean().required('Fixed Supply is an required field'),
  isImageDropped: yup.boolean(),
  pool: yup.object({
    active: yup.boolean().required(),
    quoteValue: yup
      .string()
      .test(
        'quoteValue',
        'You cannot add numbers less than 0',
        function (value) {
          const { active, quoteValueBN } = this.parent;
          if (active) {
            return FixedPointMath.toNumber(quoteValueBN) == 0
              ? true
              : value == undefined
                ? true
                : +value > 0;
          }
          return true;
        }
      ),
    tokenValue: yup
      .string()
      .test(
        'tokenValue',
        'You cannot add numbers less than 0',
        function (value) {
          const { active } = this.parent;
          if (active) {
            return value == undefined ? true : +value > 0;
          }
          return true;
        }
      ),
    quote: yup.object(),
  }),
});
