import { Icon } from "@iconify/react";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full text-center content-center">
        <h1 className="flex items-center justify-center text-left text-wrap p-4 text-2xl">a research institution that starts startups</h1>
      </div>
      <div className="p-4 text-sm flex flex-col gap-24">
        <Section>
          <h2>PROBLEM</h2>
          <p>
            Professors expressed to us that they spend a lot of time applying for federal and private grants to fund their research and, once secured, pursue targeted results by these companies and governments to renew their funding sources. Some researchers expressed an apathy towards the applicability of their work and felt it was out of their control.
            <br /><br />
            Software Engineers at <LinkPreview url="https://news.ycombinator.com/item?id=32415934">Google</LinkPreview>, <LinkPreview url="https://alvinwan.com/why-and-why-not-work-at-meta/">Meta</LinkPreview>, and other big tech companies expressed dissatisfaction with the impact of the work and scope of their responsibility. Many people we talked to were starting side projects to spin off into startups. 
            <br /><br />
            Our anecdotal experience was that with startup-related projects we&apos;ve worked on in the past, the pressure of immediate hyperbolic growth led us to sacrifice the pursuit of superior technology for humanity to tend to other bars to try to impress investors or achieve short-term growth. 
          </p>
          <p>
            We have seen startups, such as OpenAI, make significant exploratory research and development efforts to pursue human knowledge. They haphazardly released a research demo of a fine-tuned version of their GPT-3 for chat. This demo was ChatGPT. Sam Altman, the previous YC president, led the company that accidentally launched the fastest-growing internet product, naming it Chat-Generative-Pretrained-Transformer.
            <br /><br />
            We used GPT-3 in an education platform before ChatGPT was released, and although it was evident in hindsight, we never would have considered its growth once it reached consumers.
            <br /><br />
            This story proved that hacking growth is not a great use of our time, and it will come with care of the technology and the people using it. <LinkPreview
              imageSrc="/site-thumbnails/sam-altman-iit-interview.png"
              isStatic={true}
              url="https://www.youtube.com/live/Pig9WbMN1lQ?si=5hLkSjLqZyMNu4vm&t=1220"
            >
              Traditional startup advice is useful but not the rule
            </LinkPreview>. Pursuing knowledge in academia still puts someone else in control of our capital and the general direction of our endeavors.
          </p>
        </Section>
        <Section>
          <h2>PHILOSOPHY</h2>
          <p>
            <i>Focus on the user, and all else will follow.</i> A business interaction is fundamentally a value exchange between two or more humans. We put emerging technologies to use, providing value to people.
            <br /><br />
            <i>Embrace risk to compound success.</i> CSX Labs stands for Computer Science Exploration Laboratories. Exploration is adventuring into areas we are uncomfortable with, where there is a high perceived risk. In our original Business Plan, we discussed how our failures yield lessons that compound in value over time. This principle has held through the past iterations of this company and many failed launches: Solus Regera, Nullref, Candle, Blue-ESPARK, DChat, and many more gave invaluable lessons that strengthened these values.
            <br /><br />
            <i>Integrity and transparency build longevity.</i> Integrity means doing right by our principles and telling the truth. Transparency is congruent with confidentiality in that we guarantee privacy to our customers and post failures for everyone to learn from, regardless of the short-term consequences. The foundation of business is trust; operating in good faith and posting short-term failures builds long-term trust.
          </p>
          <p>
            <i>Health is wealth.</i> There is an epedemic of burnout amoung software engineers at a variety of comapnies, big and small. The personal health and alignment of values amoung our members with the group is prioritized over business metrics, financial and otherwise.
            <br /><br />
            Our health as a business is our creation of core, resistant businesses that are financially healthy regardless of market volatility. We regard financial health as a profitable business that can operate free of market conditions and stick to core principles when making decisions. Advertising makes free products cash flow positive but can drive companies to stay in a narrow chamber on social issues and align with the status quo. We aim to build financially stable businesses with “fortress balance sheets” (a term from Jamie Dimon, CEO of JP Morgan Chase) to operate best to our mission, not our image.
            <br /><br />
            On March 10th, 2024, our core team members solemnly swore to solidarity in advancing technology for humanity by our principles and the characteristics outlined in an{" "}
            <LinkPreview
              imageSrc="/site-thumbnails/google-docs.avif"
              isStatic={true}
              url="https://drive.google.com/file/d/1dr74v3FQz4xgiCksmLZyTspa973SigOc/view?usp=sharing">
              Oath of Solidarity
            </LinkPreview>{". "}
            This Oath goes beyond the company but rather an alignment of our life purpose and professional principles we abide by. The company and every other company we share as individuals are vehicles for carrying out that purpose and environments to re-enforce those principles.
          </p>
        </Section>
        <Section>
          <h2>MODEL</h2>
          <p>
            <LinkPreview 
              imageSrc="/site-thumbnails/google-docs.avif"
              isStatic={true}
              url="https://docs.google.com/document/d/1bPdp7qnl5W4JDvfUu2DJ5r8kizlN-MF9UsgO-y49qzQ/edit?usp=sharing"
            >
              Amelia
            </LinkPreview>{" "}
            is our system for incubating robust, profitable businesses through the execution of academic research in startup technology products. We are currently working on solving tariff and customs management, starting with construction companies in a product called Riff.
          </p>
          <p>
            Our team will post the progress for our projects under the Amelia system. We sell our products by speaking to people at events. If we fill their need for the right price, they buy it. Simple.
          </p>
        </Section>
        <Section>
          <h2 className="mb-3 md:mb-0 text-center md:text-left">CORE TEAM</h2>
          <div className="col-span-2 flex flex-wrap gap-12 md:gap-24">
            <TeamMember
              name="Adam Blumenfeld"
              profilePicturePath="/team/adam.jpeg"
              title="CEO at CSX Labs"
              twitter="https://x.com/nullref0"
              linkedin="https://linkedin.com/in/nullstream"
              github="https://github.com/ecsbeats"
              keybase="https://keybase.io/nullref"
            />
            <TeamMember
              name="Satvik Eltepu"
              profilePicturePath="/team/satvik.jpeg"
              title="CFO at CSX Labs"
              twitter="https://x.com/nullref0"
              linkedin="https://www.linkedin.com/in/satvik-eltepu/"
              github="https://github.com/satvikel4"
            />
            <TeamMember
              name="Srujan Murthy"
              profilePicturePath="/team/srujan.jpeg"
              title="COO at CSX Labs"
              linkedin="https://www.linkedin.com/in/srinidhi-murthy-800604261/"
              github="https://github.com/coder-sys/"
            />
          </div>
        </Section>
      </div>
    </>
  );
}

const Section: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col gap-6 md:mr-24 md:grid md:grid-cols-3 md:gap-24">
      {children}
    </div>
  )
}

const TeamMember: React.FC<{
  name: string, 
  profilePicturePath: string,
  title: string,
  twitter?: string,
  linkedin?: string,
  github?: string,
  keybase?: string
}> = ({ name, profilePicturePath, title, twitter, linkedin, github, keybase }) => {
  return (
    <div className="flex gap-10">
      <Image
        src={profilePicturePath}
        width={100}
        height={100}
        className="rounded-full"
        alt={"Portrait of " + name}
      />
      <div className="flex-col space-y-3">
        <div>
          <h1 className="text-lg">{name}</h1>
          <h2>{title}</h2>
        </div>
        <div className="flex gap-2 text-lg">
          {twitter &&
            <Link
              href={twitter}
              target="_blank"
              >
              <Icon icon="prime:twitter" />
            </Link>
          }
          {linkedin &&
            <Link
              href="https://linkedin.com/nullstream"
              target="_blank"
              >
                <Icon icon="mdi:linkedin" />
            </Link>
          }
          {github &&
            <Link
              href="https://github.com/ecsbeats"
              target="_blank"
              >
              <Icon icon="mdi:github" />
            </Link>
          }
          {keybase &&
            <Link
              href={keybase}
              target="_blank"
              >
              <Icon icon="material-symbols:key" />
            </Link>
          }
        </div>
      </div>
    </div>
  )
}