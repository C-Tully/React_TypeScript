import { useRef } from "react";
import Button from "../Button/Button.tsx";

//todo:: Import available sessions
//display.
//form processing
type SessionCardProps = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};

export default function SessionCard({
  id,
  title,
  summary,
  description,
  duration,
  date,
  image,
}: SessionCardProps) {
  //Get collection of courses?
  return;
  <div>
    <h3>{title}</h3>
    <p>{summary}</p>
    <p>{duration}</p>
    <p>{date}</p>

    {image}
    <p>{description}</p>
  </div>;
}
