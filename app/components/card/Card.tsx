import React from "react";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
type CardProps = {
  _id: string;
  _createdAt: string;
  views: number;
  author: { _id: string; name: string };
  description: string;
  image: string;
  category: string;
  title: string;
};

const StartupCard: React.FC<CardProps> = (props: CardProps) => {
  const {
    _id,
    category,
    _createdAt,
    author: { _id: authorId, name: authorName },
    description,
    image,
    title,
    views,
  } = props;
  return (
    <div className="p-4 rounded-[15] border-dashed hover:shadow-lg hover:border-4 hover:border-red-700 hover:bg-pink-100 border-4 border-red-400 cursor-pointer inset-10 group-hover:border-blue-500 group-hover:animate-border-slide transition-all duration-300 ease-in-out">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-18-medium line-clamp-1">{authorName}</p>
          </Link>
          <Link href={`/user/${authorId}`}>
            <p className="text-26-semibold line-clamp-1">{title}</p>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src={image}
            alt="user-profile"
            width={48}
            height={48}
            unoptimized
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <Image
          src={image}
          unoptimized
          alt="card-img"
          width={"100"}
          height={"100"}
          className="startup-card_img w-full h-full"
        />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link
          className="bg-black rounded-full"
          href={`/?query/=${category.toLowerCase()}`}
        >
          <p className="text-white text-sm p-1.5">{category}</p>
        </Link>
        <Button className="rounded-full bg-[#e31e25]">
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </div>
  );
};

export default StartupCard;
