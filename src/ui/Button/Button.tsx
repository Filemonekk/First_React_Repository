import { type MouseEventHandler, type ComponentProps } from "react";
import { cn } from '../../utils/cn';

type Props = {
    label: string;
    //onClick: MouseEventHandler <HTMLButtonElement>;
} & ComponentProps<'button'>;

export const Button = ({ label, className, ...rest }: Props) => {
    return (
        <button
            className={cn(
                'px-4 py-1 text-sm text-white bg-blue-600 rounded-full cursor-pointer hover:bg-blue-400 disabled: bg-slate-400', className,
            )}
            {...rest}
        >
            {label}
        </button> )
};