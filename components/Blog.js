import { storyblokEditable} from "@storyblok/react";
import RichText from "./RichText";

const Blog = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl px-8 text-center">
        {blok.headline}
      </h1>
      <RichText richText={blok.text} />
    </div>
  );
};

export default Blog;
