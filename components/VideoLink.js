import { storyblokEditable } from "@storyblok/react";

const VideoLink = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="flex justify-center">
      <iframe
        src={blok.videoUrl.url}
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowFullScreen
        className="aspect-video w-full"
      ></iframe>
    </div>
  );
};

export default VideoLink;
