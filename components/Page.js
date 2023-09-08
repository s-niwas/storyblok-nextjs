import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => {
  return (
    <main
      className="flex flex-col justify-center p-10 mt-4"
      {...storyblokEditable(blok)}
    >
      <div className=" max-w-5xl justify-center mx-auto">
        {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </main>
  );
};

export default Page;
