import { storyblokEditable } from "@storyblok/react";

const Image = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} class="flex justify-center">
      <img src={blok.image.filename} alt="image" class="w-96" />
    </div>
  );
};

export default Image;
