"use client"
import Button from "./Button";

export default function PricingPlan({
  planName,
  buttonText,
  websiteUrl,
}: {
  planName: string;
  buttonText: string;
  websiteUrl: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded-base border-2 border-black bg-white p-5">
      <div>
        <h3 className="text-lg font-heading">{planName}</h3>
      </div>
      <Button className = " w-32 bg-blue-600 text-center text-white text-lg mt-4"
                onClick={() => {
                }}
              >
                <a href={websiteUrl} >
        {buttonText}
      </a>
              </Button>
      
    </div>
  );
}
