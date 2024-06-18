import PricingPlan from '@/components/pricing-plan'

import Button from '@/components/Button'
export default function Pricing() {
  return (
    <section className="inset-0 flex w-full flex-col items-center justify-center border-b-2 border-b-black bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base ">
      <div className="mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Resources
        </h2>
        <div className="w900:grid-cols-1 w900:w-2/3 w900:mx-auto w500:w-full grid grid-cols-3 gap-8">
        <PricingPlan
  planName="Cambridge Guide "
  buttonText="View"
  websiteUrl="https://www.careers.cam.ac.uk/files/cambridgecvsandapplications.pdf"
/>
        <PricingPlan
  planName="Sample 1"
  buttonText="View"
  websiteUrl="https://drive.google.com/file/d/1QZA_U5fJu0eQWFdG4ZCd-dmo6Q1wzgXX/view?usp=drive_link"
/>
        <PricingPlan
  planName="Sample 2"
  buttonText="View"
  websiteUrl="https://drive.google.com/file/d/1QZMwKps8IZYVuoSoPb1_FyZvfIU-_rbY/view?usp=drive_link"
/>
        <PricingPlan
  planName="Sample 3"
  buttonText="View"
  websiteUrl="https://drive.google.com/file/d/1Qg7oGKxQb2btTlPtQf5mlUKMu2uXMEZJ/view?usp=sharing"
/>

        </div>
      </div>
    </section>
  )
}
