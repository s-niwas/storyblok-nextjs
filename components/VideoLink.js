import { storyblokEditable } from "@storyblok/react";

const VideoLink = ({ blok }) => {
  console.log(blok.videoId);
  return (
    <div {...storyblokEditable(blok)} class="flex justify-center">
      <iframe
        src={blok.videoId.url}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowfullscreen
        class="aspect-video w-full"
      ></iframe>
    </div>
  );
};

export default VideoLink;
