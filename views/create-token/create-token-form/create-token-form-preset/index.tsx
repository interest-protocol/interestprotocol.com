import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { FormFieldBox } from '@/components/form-field-box';

import { ICreateTokenForm } from '../../create-token.types';
import CreateTokenFormButton from '../create-token-form-button';
import CreateTokenFormImage from '../create-token-form-upload-image';
import InputImagePreview from './preview-image';

const CreateTokenFormPreset: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ICreateTokenForm>();

  return (
    <>
      <P
        mb="1rem"
        color="#E5E7EB"
        fontSize="1rem"
        fontWeight="600"
        fontFamily="Inter"
        lineHeight="1.75rem"
      >
        Choose a preset
      </P>
      <Div display="flex" flexDirection="column" gap="1.5rem">
        <Div
          gap="1.5rem"
          display="grid"
          gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
        >
          <FormFieldBox
            label="Coin name"
            placeholder="Name"
            {...register('name')}
            supportingText={errors.name?.message}
            status={errors.name?.message ? 'error' : 'none'}
          />
          <FormFieldBox
            label="Coin symbol"
            placeholder="symbol"
            {...register('symbol')}
            supportingText={errors.symbol?.message}
            status={errors.symbol?.message ? 'error' : 'none'}
          />
        </Div>

        <Div gap="1.5rem" display="grid" gridTemplateColumns="1fr">
          <FormFieldBox
            label="Project URL"
            {...register('projectUrl')}
            placeholder="Eg. www.project.com"
            supportingText={errors.projectUrl?.message}
            status={errors.projectUrl?.message ? 'error' : 'none'}
          />
        </Div>

        <Div
          gap="1.5rem"
          display="grid"
          gridTemplateColumns={['1fr', '1fr', '1fr auto 1fr']}
        >
          <FormFieldBox
            label="Image URL"
            placeholder="www.project.com/image"
            {...register('imageUrl')}
            supportingText={errors.imageUrl?.message}
            status={errors.imageUrl?.message ? 'error' : 'none'}
            Suffix={<InputImagePreview />}
          />
          <Span
            my="auto"
            color="#ACB5BB"
            fontSize="0.75rem"
            lineHeight="1rem"
            fontWeight="500"
            textAlign="center"
            pb={errors.imageUrl?.message ? '20px' : 'unset'}
            fontFamily="Inter"
          >
            OR
          </Span>
          <CreateTokenFormImage />
        </Div>

        <Div gap="1.5rem" display="grid" gridTemplateColumns="1fr">
          <FormFieldBox
            label="Pool Description (optional)"
            {...register('description')}
            placeholder="Enter pool description here..."
            supportingText={errors.description?.message}
            status={errors.description?.message ? 'error' : 'none'}
            isTextArea
          />
        </Div>
        <CreateTokenFormButton />
      </Div>
    </>
  );
};

export default CreateTokenFormPreset;
