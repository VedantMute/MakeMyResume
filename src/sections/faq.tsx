import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'


export default function Faq() {
  return (
    <div>
      <section className=" bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mx-auto grid w-[700px] max-w-full px-5">
          <Accordion className="text-base sm:text-lg" type="single" collapsible>
            <AccordionItem className="mb-2" value="item-1">
              <AccordionTrigger>Is progress saved</AccordionTrigger>
              <AccordionContent>
              No, When you close a tab, it will reset or lose progress made within that session.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="mb-2" value="item-2">
              <AccordionTrigger>Can we edit the PDF Further</AccordionTrigger>
              <AccordionContent>
              Yes, you can edit the PDF further .
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="mb-2" value="item-3">
              <AccordionTrigger>Is the platform free</AccordionTrigger>
              <AccordionContent>
                Yes, The platorm is free even downloading the resume.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <div>
        
      </div>
    </div>
  )
}
