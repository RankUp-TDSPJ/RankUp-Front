import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

export type ButtonVariant = 'primary' | 'ghost' | 'small'

type ButtonBaseProps = {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    to?: undefined
  }

type ButtonAsLinkProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> & {
    to: string
  }

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-bold transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-2 border-verde-escuro bg-verde-escuro px-6 py-3 text-white hover:border-verde-medio hover:bg-verde-medio',
  ghost:
    'border-2 border-verde-escuro bg-transparent px-6 py-3 text-verde-escuro hover:bg-verde-escuro hover:text-white',
  small:
    'border-2 border-verde-escuro bg-verde-escuro px-[18px] py-2 text-[13px] text-white hover:border-verde-medio hover:bg-verde-medio',
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? 'primary'
  const classes = [baseClasses, variantClasses[variant], props.className].filter(Boolean).join(' ')

  if (props.to !== undefined) {
    const { to, variant: _variant, className, children, ...rest } = props
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  const { to, variant: _variant, className, children, ...rest } = props
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
