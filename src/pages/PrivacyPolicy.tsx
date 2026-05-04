import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Shield, Mail } from "lucide-react";
import { Link } from "../lib/router";

const EFFECTIVE_DATE = "3 May 2026";
const COMPANY = "Aqirox Technology Private Limited";
const EMAIL = "aqiroxtechnologies@gmail.com";
const ADDRESS =
  "Shivje Nagar, Muhisudharpur, Shivpurinewcolony, Gorakhpur Sadar, Gorakhpur - 273016, Uttar Pradesh, India";

type Section = {
  id: string;
  title: string;
  body: ReactNode;
};

const sections: Section[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    body: (
      <>
        <p>
          {COMPANY} (&quot;AQIROX&quot;, &quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;) operates the website www.aqirox.com and provides a
          Software-as-a-Service platform that delivers automated WhatsApp alerts
          to end customers regarding subscription expiry, along with reports for
          business owners (the &quot;Service&quot;).
        </p>
        <p>
          This Privacy Policy explains how we collect, use, share, and protect
          information when you visit our website, sign up for our Service, or
          interact with us. By using AQIROX, you agree to the practices
          described in this Policy. This Policy is published in accordance with
          the Information Technology Act, 2000, the Information Technology
          (Reasonable Security Practices and Procedures and Sensitive Personal
          Data or Information) Rules, 2011, and the Digital Personal Data
          Protection Act, 2023 (&quot;DPDP Act&quot;).
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    body: (
      <>
        <p>We collect the following categories of information:</p>
        <p>
          <strong className="text-zapier-black">
            (a) Information you provide to us
          </strong>
          <br />
          Name, business name, email address, phone number, billing details,
          office address, GSTIN (where applicable), and any information you
          submit through forms, support requests, or onboarding.
        </p>
        <p>
          <strong className="text-zapier-black">
            (b) Customer data uploaded by you
          </strong>
          <br />
          As part of the Service, you upload information about your end
          customers — typically name, mobile number, subscription start and end
          dates, and plan details — so that we can send WhatsApp alerts on your
          behalf. You are the data controller of this customer data; AQIROX is
          a data processor that handles it solely to provide the Service.
        </p>
        <p>
          <strong className="text-zapier-black">
            (c) Automatically collected information
          </strong>
          <br />
          Device type, browser, IP address, pages visited, time spent, referring
          URL, and similar usage data collected through cookies and analytics.
        </p>
        <p>
          <strong className="text-zapier-black">
            (d) Communication metadata
          </strong>
          <br />
          Delivery status, read receipts, and timestamps for WhatsApp messages
          sent through the Service. We do not retain the content of replies
          longer than required to operate the Service.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "3. How We Use Information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide, operate, and maintain the Service;</li>
          <li>
            Send subscription-expiry WhatsApp alerts to your end customers on
            your behalf;
          </li>
          <li>
            Generate reports and analytics for business owners about message
            delivery, customer engagement, and subscription status;
          </li>
          <li>Process payments and manage your subscription with us;</li>
          <li>
            Communicate with you about updates, billing, security notices, and
            support;
          </li>
          <li>Detect, prevent, and address fraud, abuse, and security issues;</li>
          <li>Comply with legal obligations under Indian law.</li>
        </ul>
      </>
    ),
  },
  {
    id: "whatsapp-meta",
    title: "4. WhatsApp, Meta, and Third-Party Processors",
    body: (
      <>
        <p>
          AQIROX uses the WhatsApp Business Platform provided by WhatsApp LLC
          and Meta Platforms, Inc. (&quot;Meta&quot;) to deliver messages to
          your end customers. When you use the Service:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Customer mobile numbers and message templates are transmitted to
            Meta&apos;s WhatsApp Business APIs for delivery;
          </li>
          <li>
            Message delivery is governed by Meta&apos;s WhatsApp Business
            Messaging Policy and Commerce Policy, which you agree to comply
            with when using the Service;
          </li>
          <li>
            Meta processes message metadata (delivery, read receipts) according
            to its own privacy policy, available at
            <span className="break-all"> https://www.whatsapp.com/legal/privacy-policy</span>.
          </li>
        </ul>
        <p>We also rely on other carefully selected third-party processors for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cloud hosting and storage (e.g. AWS, Google Cloud);</li>
          <li>Payment processing (e.g. Razorpay, Stripe);</li>
          <li>Email delivery and transactional messaging;</li>
          <li>Analytics and product telemetry.</li>
        </ul>
        <p>
          Each processor is bound by contractual data-protection obligations
          and is permitted to use information only to deliver services to us.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "5. Data Sharing and Disclosure",
    body: (
      <>
        <p>
          We do not sell personal data. We share information only in the
          following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            With third-party processors strictly to provide the Service (see
            Section 4);
          </li>
          <li>
            With law enforcement or regulatory authorities when required by
            applicable Indian law or a valid legal order;
          </li>
          <li>
            In connection with a merger, acquisition, or sale of assets, with
            notice to affected users;
          </li>
          <li>With your explicit consent for any other purpose.</li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "6. Data Retention",
    body: (
      <>
        <p>
          We retain personal data only for as long as required to provide the
          Service, comply with our legal obligations, resolve disputes, and
          enforce our agreements. When you cancel your subscription, customer
          data uploaded by you will be deleted from our active systems within
          90 days, except where retention is required by law (for example, tax
          and accounting records under Indian law are retained for up to 8
          years).
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    body: (
      <>
        <p>
          Under the DPDP Act, 2023 and other applicable Indian law, you have
          the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access the personal data we hold about you;</li>
          <li>Correct inaccurate or incomplete personal data;</li>
          <li>
            Request erasure of personal data, subject to legal retention
            requirements;
          </li>
          <li>Withdraw consent for processing at any time;</li>
          <li>
            Nominate a person to exercise these rights in the event of your
            death or incapacity;
          </li>
          <li>Lodge a grievance with our Grievance Officer (see Section 11).</li>
        </ul>
        <p>
          To exercise any of these rights, write to us at{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-primary font-semibold hover:underline"
          >
            {EMAIL}
          </a>
          . We will respond within the timelines required by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "8. Security",
    body: (
      <>
        <p>
          We implement reasonable technical and organisational security measures
          to protect personal data, including encryption in transit (TLS),
          encryption at rest, role-based access controls, regular backups, and
          audit logging. No method of transmission or storage is 100% secure,
          and we cannot guarantee absolute security; however, we work
          continuously to improve our safeguards.
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    title: "9. Children's Privacy",
    body: (
      <>
        <p>
          The Service is intended for use by businesses and individuals aged 18
          or older. We do not knowingly collect personal data from children
          under 18. If we become aware that we have inadvertently collected
          such data, we will delete it promptly.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "10. Changes to this Policy",
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices, technology, or legal requirements. The
          updated Policy will be posted on this page with a new
          &quot;Effective Date&quot;. Material changes will be communicated to
          you by email or through the Service.
        </p>
      </>
    ),
  },
  {
    id: "grievance-officer",
    title: "11. Grievance Officer & Contact",
    body: (
      <>
        <p>
          In accordance with the Information Technology Act, 2000 and rules
          made thereunder, the contact details of our Grievance Officer are
          provided below. You may also reach out to us with any questions or
          concerns about this Privacy Policy.
        </p>
        <div className="rounded-2xl border border-sand bg-light-sand p-6 md:p-8 not-italic">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-warm-gray mb-3">
            Grievance Officer
          </p>
          <p className="text-zapier-black font-semibold mb-1">{COMPANY}</p>
          <p className="text-charcoal mb-1">{ADDRESS}</p>
          <p className="text-charcoal">
            Email:{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-primary font-semibold hover:underline break-all"
            >
              {EMAIL}
            </a>
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-16 lg:pt-52 lg:pb-20 border-b border-sand overflow-hidden bg-background">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-light-sand border border-sand mb-6 md:mb-8"
          >
            <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            <span className="text-[11px] sm:text-sm font-bold tracking-tight uppercase">
              Privacy Policy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-zapier-black leading-[0.95] mb-6 md:mb-8"
          >
            How we handle your{" "}
            <span className="text-primary font-editorial italic font-light">
              data.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-charcoal/70"
          >
            <span>
              <strong className="text-zapier-black">Effective:</strong>{" "}
              {EFFECTIVE_DATE}
            </span>
            <span>
              <strong className="text-zapier-black">Last updated:</strong>{" "}
              {EFFECTIVE_DATE}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-off-white border-b border-sand">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* TOC */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-warm-gray mb-4">
                  On this page
                </p>
                <ul className="space-y-2 text-sm">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-charcoal hover:text-primary transition-colors"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Body */}
            <div className="lg:col-span-8 space-y-10 md:space-y-14">
              {sections.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter text-zapier-black leading-tight mb-4 md:mb-5">
                    {s.title}
                  </h2>
                  <div className="space-y-4 text-base text-charcoal leading-relaxed">
                    {s.body}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-zapier-black text-cream border-b border-sand">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4 md:mb-6">
            Questions about your data?
          </h2>
          <p className="text-base md:text-lg text-sand/70 leading-relaxed mb-8 max-w-xl mx-auto">
            Write to us. We read every message and respond personally.
          </p>
          <Link to="/contact">
            <span className="inline-flex items-center gap-2 px-6 sm:px-8 py-4 sm:py-5 rounded-sm bg-primary hover:bg-primary/90 text-white text-sm sm:text-base font-semibold transition-colors">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              Contact AQIROX
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
