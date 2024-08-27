import clsx from 'clsx'
import Link from 'next/link'

export function HtmlTags<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
  as?: T
  className?: string
}) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      {children}
    </Component>
  )
}

HtmlTags.Link = function HtmlTagsLink({
  children,
  ...props
}: React.ComponentPropsWithRef<typeof Link>) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

HtmlTags.TitleLink = function HtmlTagsTitleLink<
  T extends React.ElementType = 'h2',
>({
  as,
  href,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'href'> & {
  as?: T
  href?: string
}) {
  let Component = as ?? 'h2'

  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <HtmlTags.Link href={href}>{children}</HtmlTags.Link> : children}
    </Component>
  )
}

HtmlTags.TitleH1 = function HtmlTagsTitleH1<
  T extends React.ElementType = 'h1',
>({ as, children }: Omit<React.ComponentPropsWithRef<T>, 'as'> & { as?: T }) {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
      {children}
    </h1>
  )
}

HtmlTags.Description = function HtmlTagsDescription({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <p className="relative z-10 mt-2 text-base text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  )
}
