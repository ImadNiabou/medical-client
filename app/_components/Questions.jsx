import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Questions = () => {
  return (
    <div className="my-20 animationA text-slate-800 ">
      <div className="text-center">
        <h2 className="font-bold text-4xl tracking-wide bg-gradient-to-r from-primary to-secondary  inline-block text-transparent bg-clip-text mb-[30px]">
          ¡What our clients ask the most!
        </h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg hover:no-underline text-slate-600">
            What is your medical care?
          </AccordionTrigger>
          <AccordionContent className="text-md text-slate-500">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg hover:no-underline text-slate-600">
            What happens if i need to go a hospital?
          </AccordionTrigger>
          <AccordionContent className="text-md text-slate-500">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg hover:no-underline text-slate-600">
            Can i visit your medical office?
          </AccordionTrigger>
          <AccordionContent className="text-md text-slate-500">
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Questions;
