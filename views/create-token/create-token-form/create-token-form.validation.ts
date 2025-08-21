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
    .url('You must provide an URL')
    .notOneOf(
      [yup.ref('name'), yup.ref('symbol')],
      'The description must be different than the name and symbol'
    ),
  imageUrl: yup
    .mixed()
    .test('fileType', 'You must provide a valid image URL', (value) => {
      const files = value as FileList;
      if (!files || files.length === 0 || !files[0]) return true;

      const supportedFormats = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/webp',
      ];
      return supportedFormats.includes(files[0].type);
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
