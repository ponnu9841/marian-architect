import SectionTitle from "@/components/section-title";
import ContactCard from "./contact-card";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";

export default function Contact(props: { contact: Contact | null }) {
  const { contact } = props;
  const contactData = [
    {
      icon: "/icons/map.svg",
      title: "Our Location",
      line1: contact?.location,
    },
    {
      icon: "/icons/message.svg",
      title: "Our Location",
      line1: `(+91) ${contact?.contactno_one}`,
      line2: contact?.contactno_two ? `(+91) ${contact?.contactno_two}` : "",
    },
    {
      icon: "/icons/help.svg",
      title: "Help Desk",
      line1: contact?.email_one,
      line2: contact?.email_two,
    },
  ];

  return (
    <section id="contact">
      <div className="container mb-6 pt-10 md:pt-24 relative">
        <SectionTitle title="Contact" />
        <div className="py-6 md:py-12">
          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {contactData.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)]"
              >
                <Card className="shadow-2xl p-2 pt-10 pb-6 border-none h-full">
                  <ContactCard {...item} />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
