import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portraitAboutMe.jpeg'
import { HtmlTags } from '@/components/HtmlTags'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <HtmlTags className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <HtmlTags.TitleH1>
            I’m Nikolay Hadzhiyski. I strive for Engineering Excellence in code
            and 3D design.
          </HtmlTags.TitleH1>
          <div className="mt-6 space-y-7">
            <HtmlTags.Description>
              I am a mechanical engineer, I graduated from Sofia Technical
              University. I have worked in the specialty both in Bulgaria and in
              Germany.
            </HtmlTags.Description>
            <HtmlTags.Description>
              I started doing 3D out of curiosity, but as it happens I liked it
              and I have quite a few projects done which I will also share with
              you on my app.
            </HtmlTags.Description>
            <HtmlTags.Description>
              In order to be able to use engineering and my love for 3D design,
              I decided that I needed to take the next step forward and started
              a course at{' '}
              <Link
                className="text-teal-500"
                href="https://www.telerikacademy.com/"
              >
                Telerik Academy Sofia
              </Link>{' '}
              specializing in JavaScript programming.
            </HtmlTags.Description>
            <HtmlTags.Description>
              In this app I will describe the projects and the technologies I
              used to make them, as well as parts of the code that I think I
              will share with each of you. I want to show the knowledge I have.
            </HtmlTags.Description>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */}
            <SocialLink
              href="https://github.com/dkgrayh"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/nikolay-hadzhiyski/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://mail.google.com/mail/nikolay.hadzhiyski/"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              nikolay.hadzhiyski@gmail.com
            </SocialLink>
          </ul>
        </div>
      </HtmlTags>
    </Container>
  )
}
