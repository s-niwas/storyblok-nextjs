import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

import { NODE_CODEBLOCK, render } from "storyblok-rich-text-react-renderer";

const RichText = ({ richText }) => {
  return (
    <div {...storyblokEditable(richText)} className="prose-md flex justify-center m-12 flex-col prose-headings:font-heading text-3xl prose-lg relative text-justify  dark:prose-invert lg:prose-xl prose-headings:font-bold  prose-a:text-primary prose-li:list-disc prose-img:rounded-md prose-img:shadow-lg dark:prose-a:text-blue-400 sm:text-base md:m-6 md:mt-0 lg:m-12">
      {render(richText, {
        nodeResolvers: {
          [NODE_CODEBLOCK]: (children) => {
            return (
              <pre className='flex bg-gray-200  text-xs text-black rounded-lg  overflow-x-auto p-4"'>
                {children}
              </pre>
            );
          },
        },
        defaultBlokResolver: (name, props) => {
          const blok = { ...props, component: name };
          return <StoryblokComponent blok={blok} key={blok._uid} />;
        },
      })}
    </div>
  );
};

export default RichText;
