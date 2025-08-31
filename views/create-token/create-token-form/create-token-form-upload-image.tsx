import { Div, Label, Span } from '@stylin.js/elements';
import { propOr } from 'ramda';
import { ChangeEventHandler, DragEventHandler, FC, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { FolderSVG, ImageCardSVG } from '@/components/svg';
import { toasting } from '@/components/toast';

import { ICreateTokenForm } from '../create-token.types';
import { getBase64 } from '../create-token.utils';

const CreateTokenFormImage: FC = () => {
  const { setValue, control } = useFormContext<ICreateTokenForm>();
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState('');

  const dropImageUrl = useWatch({
    control,
    name: 'dropImageUrl',
  });

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return toastError('Something went wrong');

    if (!file.type.includes('image/'))
      return toastError('Make sure that you are sending an image');

    try {
      const imageBase64 = await getBase64(file);
      setValue('dropImageUrl', imageBase64);
      setValue('imageUrl', '');
    } catch (e) {
      toastError(propOr('Something went wrong', 'message', e));
      setValue('imageUrl', '');
    }
    setFileName(file.name);
  };

  const toastError = (message: string) => {
    toasting.error({
      action: 'Image upload',
      message: message,
    });
  };

  const handleDropFile: DragEventHandler<HTMLDivElement> = async (e) => {
    e.preventDefault();

    if (e.dataTransfer.items) {
      const item = e.dataTransfer.items[0];

      if (item.kind !== 'file' || !item.type.includes('image/'))
        return toastError('Make sure that you are sending an image');

      const file = item.getAsFile();

      if (!file) return toastError('Something went wrong');

      try {
        const imageBase64 = await getBase64(file);
        setValue('dropImageUrl', imageBase64);
        setValue('imageUrl', '');
      } catch (e) {
        toastError(propOr('Something went wrong', 'message', e));
        setValue('imageUrl', '');
      }

      setFileName(file.name);
      return;
    }

    const file = e.dataTransfer.files[0];

    if (!file) return toastError('Something went wrong');

    if (!file.type.includes('image/'))
      return toastError('Make sure that you are sending an image');

    try {
      const imageBase64 = await getBase64(file);
      setValue('dropImageUrl', imageBase64);
      setValue('imageUrl', '');
    } catch (e) {
      toastError(propOr('Something went wrong', 'message', e));
      setValue('imageUrl', '');
    }
    setFileName(file.name);
  };

  return (
    <Div
      p="1.25rem"
      gap="0.75rem"
      display="flex"
      bg="#9CA3AF1A"
      borderRadius="0.75rem"
      alignItems="center"
      justifyContent="center"
      height="4.59375rem"
      onDrop={handleDropFile}
      outline="2px dashed #BBB9FD99"
      onDragEnter={() => setDragging(true)}
      onDragLeave={() => setDragging(false)}
      onDragOver={(e) => e.preventDefault()}
      outlineStyle={dragging ? 'solid' : 'dashed'}
      outlineColor={dragging ? '#B4C5FF' : 'outlineVariant'}
    >
      {dropImageUrl ? (
        <Div
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          px="0.75rem"
        >
          <Div display="flex" alignItems="center" gap="0.5rem">
            <ImageCardSVG maxWidth="1.4rem" maxHeight="1.4rem" width="100%" />
            <Label
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              htmlFor="file"
              color="#BBB9FD"
              cursor="pointer"
              fontFamily="Inter"
              textDecoration="underline"
              fontSize="0.875rem"
              fontWeight="400"
            >
              {fileName}
            </Label>
          </Div>
          <Div
            width="2.75rem"
            height="2.75rem"
            mixBlendMode="screen"
            backgroundSize="contain"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundImage={`url(${dropImageUrl})`}
          />
        </Div>
      ) : (
        <>
          <FolderSVG maxWidth="1.4rem" maxHeight="1.4rem" width="100%" />

          <Div>
            <Span color="#FFFFFF" fontFamily="Inter" fontSize="0.875rem">
              Drop your file here or{' '}
            </Span>
            <Label
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              htmlFor="file"
              color="#B4C5FF"
              cursor="pointer"
              fontFamily="Inter"
              textDecoration="underline"
              fontSize="0.875rem"
            >
              upload
            </Label>
          </Div>
        </>
      )}
      <Div display="none">
        <input
          id="file"
          type="file"
          accept="image/*"
          onChange={handleChangeFile}
        />
      </Div>
    </Div>
  );
};

export default CreateTokenFormImage;
