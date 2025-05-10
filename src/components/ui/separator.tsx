'use client';

import { cn } from '@/lib/utils';
import { Root } from '@radix-ui/react-separator';
import { cva } from 'class-variance-authority';

const separator = cva('shrink-0 bg-[#39393980]', {
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export function Separator(props: React.ComponentProps<typeof Root>) {
  return (
    <Root
      {...props}
      className={cn(
        separator({
          orientation: props.orientation,
          className: props.className,
        })
      )}
    />
  );
}
