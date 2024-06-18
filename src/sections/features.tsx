import React from 'react';
import Marquee from 'react-fast-marquee';

interface FeatureProps {
  icon: string;
  title: string;
  text: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, text }) => (
  <div className="flex flex-col gap-3 rounded-base border-2 border-black bg-white p-5 shadow-base">
    <img
      className="h-12 w-12 rounded-base"
      src={`/neobrutalism-icons/${icon}.svg`}
      alt={icon}
    />
    <h4 className="mt-2 text-xl font-heading">
      {title}
    </h4>
    <p>{text}</p>
  </div>
);

const ScrollingMarquee: React.FC = () => {
  const words = ['Recruiter see your resume < 7 sec', 'Include Important Points', 'Add project links'];

  return (
    <Marquee className="border-y-2 border-y-black bg-white py-3 font-base sm:py-5" direction="left">
      {words.map((word, id) => (
        <div className="flex items-center" key={id}>
          <span className="mx-10 text-xl font-heading sm:text-2xl lg:text-4xl">
            {word}
          </span>
          <img
            className="w-[35px] sm:w-[45px]"
            src={'/neobrutalism-icons/star3.svg'}
            alt="star"
          />
        </div>
      ))}
    </Marquee>
  );
};

const Features: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: 'plus',
      title: 'Easily Customizable',
      text: 'Our resume template is easily customizable, using copilot write/ re-write content using AI in MS Edge Browser.',
    },
    {
      icon: 'pentagon',
      title: 'Standard Template',
      text: 'Standard resume template from our collection tailored to various industries and career levels.',
    },
    {
      icon: 'star',
      title: 'PDF Downloadable',
      text: 'Download in PDF format using button ready for printing or edit it more using MS Word.',
    },
  ];

  return (
    <div>
       <ScrollingMarquee />
      <section className="border-t-2  border-t-black bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Our Special Features
        </h2>
        <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>
      </section>
     
    </div>
  );
}

export default Features;
