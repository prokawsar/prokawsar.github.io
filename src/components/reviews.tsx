import Marquee from "@/components/ui/marquee";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const reviews = [
  {
    name: "Kyrylo Kovalenko",
    username: "@jack",
    body: "I would like to recommend a professional front-end developer with whom we have collaborated on several projects. One of the key qualities of Kawsar is his excellent communication skills and ability to work effectively in a team. Not only does he excel in fulfilling his responsibilities, but he also actively engages with other team members, fostering an atmosphere of mutual understanding and collaboration. Kawsar swiftly addresses any issues that arise, and quickly learns and integrates new technologies when involved in new projects. He has demonstrated outstanding results in his work and is not hesitant to contribute his ideas for the successful implementation of various tasks.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Hongbeom Park",
    username: "@jill",
    body: "Kawsar can do many stuff well but he is particularly good with Svelte. He shipped an entire redesign of tweetbase app so quick that we called him Svelte ninja. If your project is written in Svelte, you will not regret hiring Kawsar.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Mohammad Saiful Islam",
    username: "@john",
    body: "Kawsar is a highly skilled software engineer with extensive experience in web development using svelte and react. He has a track record of delivering high-quality work and is known for his strong debugging skills and ability to work well in a team. Kawsar is a reliable and responsible professional who would be an asset to any software engineering team. I highly recommend him for any software engineering role.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Sharif Ahmed",
    username: "@jane",
    body: "I highly recommend Kawsar Ahmed for any development project. I had the pleasure of working with Kawsar at Kws3.media for over three years (2018-2021), where we collaborated on a number of bespoke applications for companies such as Social Energy, Zanussi Boilers, and Switch Energy network. Kawsar is an incredibly talented and knowledgeable developer. He has a deep understanding of modern web development technologies such as Svelte, Bulma, PHP, React, and Bootstrap, and is able to use these tools to build high-quality, scalable applications. He also has experience with API integration, CLI tasks, and database design, and is familiar with frameworks such as Laravel. Kawsar is able to quickly and efficiently solve complex problems and is always willing to learn and adapt to new technologies.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Nate Fleimisch Bezlaj",
    username: "@jenny",
    body: "As a Full Stack Developer, Kawsar has demonstrated exceptional skills in driving multiple high-profile projects to success. His expertise in developing comprehensive solutions and adapting to diverse business needs is remarkable. With a commitment to leveraging the latest technologies and continuous learning, he has consistently delivered outstanding results.",
    img: "https://avatar.vercel.sh/jenny",
  },
];

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-72 h-52 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            className="text-xs font-medium dark:text-white/40 hover:underline"
          >
            View on LinkedIn
          </Link>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Recommendations() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-lg">
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
