import Image from "next/image";

// This component is not implemented in the current version of the app.
// The component was intended to be used as a reocurring headline component in the app, used in all pages as a page block similar to a hero.

interface HeadlineProps {
  title: string;
  imgSource?: string;
  imgAlt?: string;
}

export default function Headline({ title, imgSource, imgAlt }: HeadlineProps) {
  return (
    <section>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        {imgSource && imgAlt && (
          <Image src={imgSource} alt={imgAlt} width={100} height={100} />
        )}
      </div>
    </section>
  );
}
