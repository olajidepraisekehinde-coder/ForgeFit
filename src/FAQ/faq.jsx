import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
export default function Faq() {

    const items = [
        {
            value: "item-1",
            trigger: "Can I cancel my membership at any time?",
            content: "Yes, memberships are month-to-month unless you opt for our annual plan. You can cancel through your member dashboard or by contacting our support team at least 7 days before your next billing cycle"
        },

        {
            value: "item-2",
            trigger: "What is included in the PT sessions?",
            content: "Our personal training sessions include a full biomechanical assessment, personalized programming, nutritional guidance, and 60 minutes of 1-on-1 coaching with a certified elite trainer."
        },
        {
            value: "item-3",
            trigger: "Is there a joining fee?",
            content: "Yes there is a joining fee for our members."
        },
        {
            value: "item-4",
            trigger: "Do you offer corporate rates?",
            content: "Absolutely. We partner with several local and national organizations to provide wellness benefits. Contact our corporate team for group rates starting from 5+ members."
        }
    ]


    return (
        <Accordion defaultValue={["item-1"]} className="max-w-lg m-auto mt-16 flex flex-col gap-3">
            {items.map((item) => (
                <AccordionItem key={item.value} value={item.value} className="border-2 border-[#1C1B1B] bg-[#1C1B1B] rounded-lg px-5 shadwo-xl">
                    <AccordionTrigger >{item.trigger}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}


