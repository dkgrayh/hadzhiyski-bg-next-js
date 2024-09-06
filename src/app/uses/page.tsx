import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
};

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="13” MacBook Air, M1 Max, 16GB RAM">
            The 13” MacBook Air with the powerful M1 Max chip and 16GB RAM
            delivers exceptional performance and efficiency, offering
            lightning-fast processing, seamless multitasking, and impressive
            battery life in a sleek, lightweight design.
            <a
              href="https://www.apple.com/"
              target="_blank"
              className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
            >
              <LinkIcon className="h-6 w-6 flex-none" />
              Apple
            </a>
          </Tool>
          <Tool title="Windows System Intel Core i7-6800K CPU 32GB RAM">
            The Intel Core i7-6800K CPU with 32GB RAM delivers powerful
            multi-core performance, making it ideal for coding, software
            development, and professional design tasks, ensuring smooth
            multitasking and efficient workflow management."
            <a
              href="https://www.intel.com/content/www/us/en/homepage.html"
              target="_blank"
              className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
            >
              <LinkIcon className="h-6 w-6 flex-none" />
              Intel
            </a>
          </Tool>
          <Tool title="Acer PREDATOR XB271HU">
            The Acer PREDATOR XB271HU is a 27-inch WQHD monitor with a 144Hz
            refresh rate (overclockable to 165Hz), NVIDIA G-SYNC technology, and
            an IPS panel, providing sharp, accurate colors and smooth visuals,
            ideal for high-resolution design work and detailed data analysis.
            <a
              href="https://www.acer.com/us-en"
              target="_blank"
              className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
            >
              <LinkIcon className="h-6 w-6 flex-none" />
              Acer
            </a>
          </Tool>
          <Tool title="Mechanical Keyboard Razer BLACKWIDOW X CHROMA">
            The Razer BlackWidow X Chroma mechanical keyboard features
            customizable RGB backlighting, tactile Razer Green switches, and
            durable construction, offering a responsive typing experience and
            vibrant illumination for both professional and creative work
            environments.
            <a
              href="https://www.razer.com/eu-en"
              target="_blank"
              className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
            >
              <LinkIcon className="h-6 w-6 flex-none" />
              Razer
            </a>
          </Tool>
          <Tool title="Wireless Mouse LOGITECH MX Master 3">
            The Logitech MX Master 3 wireless mouse provides exceptional
            precision and comfort with its advanced sensor, customizable
            buttons, and ergonomic design, ideal for productivity and design
            work, offering seamless connectivity and extended battery life.
            <a
              href="https://www.logitech.com/en-eu"
              target="_blank"
              className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
            >
              <LinkIcon className="h-6 w-6 flex-none" />
              Logitech
            </a>
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            Visual Studio Code is a lightweight, open-source code editor with
            powerful features, including IntelliSense code completion, debugging
            tools, and an extensive extension marketplace, making it an ideal
            choice for developers and designers seeking a versatile and
            efficient development environment.
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
            >
              <LinkIcon className="h-6 w-6 flex-none" />
              Visual Studio Code
            </a>
          </Tool>
          <Tool title="iTerm2">
            iTerm2 is a feature-rich terminal emulator for macOS, offering
            advanced capabilities such as split panes, customizable profiles,
            and extensive keyboard shortcuts, providing a powerful and efficient
            command-line experience for developers and power users.
            <a
              href="https://iterm2.com/"
              target="_blank"
              className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
            >
              <LinkIcon className="h-6 w-6 flex-none" />
              iTerm2
            </a>
          </Tool>
          <Tool title="Cinema 4D">
            Cinema 4D is a comprehensive 3D modeling, animation, and rendering
            software renowned for its intuitive interface and powerful features,
            enabling designers and artists to create stunning visuals and
            complex animations with ease and efficiency.
            <a
              href="https://www.maxon.net/en"
              target="_blank"
              className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
            >
              <LinkIcon className="h-6 w-6 flex-none" />
              Cinema 4D
            </a>
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Adobe">
            Adobe offers a suite of creative software tools, including
            Photoshop, AfterEffects, and Premiere Pro, designed for graphic
            design, photo editing, video production, and digital content
            creation, providing industry-leading capabilities and seamless
            integration across platforms.
            <a
              href="https://www.adobe.com/"
              target="_blank"
              className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
            >
              <LinkIcon className="h-6 w-6 flex-none" />
              Adobe
            </a>
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}
