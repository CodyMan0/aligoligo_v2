import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { cx } from 'class-variance-authority';

import { Typography } from '..';

export type CheckboxProps<T extends FieldValues> = {
  type?: CheckboxType;
  control: Control<T>;
  name: Path<T>;
  label?: string;
  isDisabled?: boolean;
};

export enum CheckboxType {
  CROSS = 'cross',
  CHECK = 'check',
}

export const Checkbox = <T extends FieldValues>({
  name,
  label = '',
  control,
  isDisabled = false,
  type = CheckboxType.CHECK,
}: CheckboxProps<T>) => {
  return (
    <Controller
      control={control}
      render={({ field }) => {
        return (
          <label className={cx('flex items-center', { 'opacity-50': isDisabled })}>
            <div className="relative ring-main-secondary ring" style={{ width: '0.8em', height: '0.8em' }}>
              <div
                className={cx('w-full h-full transition-all', {
                  'hover:bg-main-secondaryHover': !field.value && !isDisabled,
                  'hover:bg-main-secondary': field.value && !isDisabled,
                  'bg-main-secondary': field.value,
                  'focus-within:ring-4 focus-within:ring-main-secondaryHover': !isDisabled,
                })}
              >
                {field.value && getCheckboxType(type)}
                <input
                  ref={field.ref}
                  name={field.name}
                  checked={field.value}
                  onChange={(...args) => {
                    if (isDisabled) return;
                    field.onChange(...args);
                  }}
                  className="opacity-0"
                  type="checkbox"
                />
              </div>
            </div>
            <span className="sr-only">{label}</span>
            <span
              className={cx('w-full h-full transition-all', {
                'text-gray-40 line-through': field.value,
                'focus-within:ring-4 focus-within:ring-main-secondaryHover': !isDisabled,
              })}
            >
              <Typography type={'title2'} className="ml-2.5">
                {label}
              </Typography>
            </span>
          </label>
        );
      }}
      name={name}
    />
  );
};

Checkbox.displayName = 'Checkbox';

const getCheckboxType = (type: CheckboxType) => {
  switch (type) {
    case CheckboxType.CROSS:
      return (
        <>
          <div
            className="absolute rounded-md bg-white"
            style={{
              width: '100%',
              height: '25%',
              top: '40%',
              transform: 'rotate(45deg)',
            }}
          ></div>
          <div
            className="absolute rounded-md bg-white"
            style={{
              width: '100%',
              height: '25%',
              top: '40%',
              transform: 'rotate(135deg)',
            }}
          ></div>
        </>
      );
    case CheckboxType.CHECK:
      return (
        <>
          <div
            className="absolute bg-white rounded-md"
            style={{
              width: '50%',
              height: '25%',
              transform: 'rotate(35deg)',
              left: '6%',
              bottom: '15%',
            }}
          ></div>
          <div
            className="absolute bg-white rounded-md"
            style={{
              width: '90%',
              height: '25%',
              transform: 'rotate(125deg)',
              left: '18%',
              bottom: '35%',
            }}
          ></div>
        </>
      );
  }
};
