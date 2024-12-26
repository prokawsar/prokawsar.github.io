import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  title: string;
  company: string;
  description: readonly string[];
  dates: string;
  location: string;
  image?: string;
  linkedin?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function WorkCard({
  title,
  company,
  description,
  dates,
  location,
  linkedin,
  image,
  links,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Link href={linkedin || ""} target="_blank">
          <Avatar className="border size-12 m-auto">
            <AvatarImage src={image} alt={title} className="object-contain" />
            <AvatarFallback>{title[0]}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        <h2 className="font-bold leading-none">{company}</h2>
        <h2 className="font-semibold leading-none">{title}</h2>
        {dates && (
          <time className="text-sm text-muted-foreground">{dates}</time>
        )}
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        {description && (
          <ul className="prose dark:prose-invert text-sm list-disc">
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
