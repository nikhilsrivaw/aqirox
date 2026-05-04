import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ScrollText, Mail } from "lucide-react";
import { Link } from "../lib/router";

const EFFECTIVE_DATE = "3 May 2026";
const COMPANY = "Aqirox Technology Private Limited";
const EMAIL = "aqiroxtechnologies@gmail.com";
const JURISDICTION = "Gorakhpur, Uttar Pradesh";

type Section = {
  id: string;
  title: string;
  body: ReactNode;
};

const sections: Section[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: (
      <>
        <p>
          These Terms of Service (&quot;Terms&quot;) constitute a binding legal
          agreement between you (&quot;you&quot;, &quot;Customer&quot;) and{" "}
          {COMPANY} (&quot;AQIROX&quot;, &quot;we&quot;, &quot;us&quot;,
          &quot;our&quot;), governing your access to and use of the AQIROX
          website at www.aqirox.com and the AQIROX Software-as-a-Service
          platform (collectively, the &quot;Service&quot;).
        </p>
        <p>
          By accessing, registering for, or using the Service, you confirm that
          you have read, understood, and agreed to be bound by these Terms and
          our{" "}
          <Link
            to="/privacy-policy"
            className="text-primary font-semibold hover:underline"
          >
            Privacy Policy
          </Link>
          . If you do not agree, you must not use the Service.
        </p>
      </>
    ),
  },
  {
    id: "service",
    title: "2. Description of Service",
    body: (
      <>
        <p>
          AQIROX provides a SaaS platform that enables Indian businesses to
          send automated WhatsApp alerts to their end customers regarding
          subscription expiry, and to receive periodic reports about their
          customer base, message delivery, and renewal performance.
        </p>
        <p>
          We use the WhatsApp Business Platform provided by Meta Platforms,
          Inc. and WhatsApp LLC to deliver messages. Your use of WhatsApp
          messaging through the Service is subject to Meta&apos;s applicable
          policies, including the WhatsApp Business Messaging Policy and
          Commerce Policy.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "3. Eligibility & Account Registration",
    body: (
      <>
        <p>
          You must be at least 18 years old and capable of entering into a
          binding contract under Indian law to use the Service. By registering
          an account, you represent that you have authority to bind the
          business or entity on whose behalf you are signing up.
        </p>
        <p>
          You agree to provide accurate, current, and complete registration
          information and to keep it up to date. You are solely responsible
          for safeguarding your account credentials and for all activities
          that occur under your account.
        </p>
      </>
    ),
  },
  {
    id: "subscription",
    title: "4. Subscription, Fees & Payment",
    body: (
      <>
        <p>
          The Service is offered on a subscription basis. Specific plans,
          pricing, message limits, and features are described on our website
          or in your written order form. By subscribing, you authorise AQIROX
          (and our payment processors) to charge the applicable fees,
          including any applicable GST, in advance for each billing cycle.
        </p>
        <p>
          Subscriptions automatically renew at the end of each billing cycle
          unless cancelled before renewal. We reserve the right to change
          pricing for future billing cycles with at least 30 days&apos; prior
          notice. Failure to pay any invoice when due may result in suspension
          or termination of the Service.
        </p>
      </>
    ),
  },
  {
    id: "refunds",
    title: "5. Refund Policy",
    body: (
      <>
        <p>
          Except where required by applicable law, fees are non-refundable
          once paid. We may, at our sole discretion, offer pro-rata refunds in
          cases of material service failure that we are unable to remedy
          within a reasonable time. Refund requests must be submitted in
          writing to{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-primary font-semibold hover:underline break-all"
          >
            {EMAIL}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "6. Acceptable Use",
    body: (
      <>
        <p>You agree not to use the Service to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Send spam, unsolicited promotional messages, or any content
            prohibited by Meta&apos;s WhatsApp Business Messaging Policy or
            Commerce Policy;
          </li>
          <li>
            Send messages to recipients who have not provided valid opt-in
            consent under applicable law;
          </li>
          <li>
            Promote, facilitate, or engage in illegal, fraudulent, deceptive,
            harmful, or harassing activity;
          </li>
          <li>
            Distribute malware, phishing links, adult content, hate speech, or
            content that infringes third-party rights;
          </li>
          <li>
            Reverse-engineer, decompile, scrape, or attempt to access the
            Service&apos;s underlying source code or infrastructure;
          </li>
          <li>
            Resell, sublicense, or otherwise commercially exploit the Service
            without our prior written consent;
          </li>
          <li>
            Interfere with or disrupt the integrity, security, or performance
            of the Service.
          </li>
        </ul>
        <p>
          Violation of this section may result in immediate suspension or
          termination of your account, and may also result in suspension or
          termination by Meta of your access to the WhatsApp Business
          Platform.
        </p>
      </>
    ),
  },
  {
    id: "customer-data",
    title: "7. Customer Data & Compliance",
    body: (
      <>
        <p>
          You are responsible for the customer data you upload to the Service,
          including for ensuring you have obtained the consents required under
          applicable law (including the Digital Personal Data Protection Act,
          2023) before sharing such data with us and instructing us to send
          messages on your behalf.
        </p>
        <p>
          AQIROX processes customer data solely as a data processor on your
          instructions, in accordance with our{" "}
          <Link
            to="/privacy-policy"
            className="text-primary font-semibold hover:underline"
          >
            Privacy Policy
          </Link>
          . You agree to indemnify AQIROX against any claim arising from your
          failure to obtain such consents or otherwise comply with applicable
          data-protection law.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "8. Intellectual Property",
    body: (
      <>
        <p>
          The Service, including all software, design, content, trademarks,
          and documentation, is owned by AQIROX or its licensors and is
          protected by Indian and international intellectual property laws. We
          grant you a limited, non-exclusive, non-transferable, revocable
          licence to use the Service solely for your internal business
          purposes during the term of your subscription.
        </p>
        <p>
          You retain all rights to the customer data you upload. You grant
          AQIROX a limited licence to use such data solely to provide and
          improve the Service.
        </p>
      </>
    ),
  },
  {
    id: "service-availability",
    title: "9. Service Availability",
    body: (
      <>
        <p>
          We aim to provide the Service with high availability but we do not
          guarantee that the Service will be uninterrupted, error-free, or
          delivered within any specific timeframe. The Service may be
          unavailable due to scheduled maintenance, third-party outages
          (including outages of WhatsApp / Meta), force majeure events, or
          other circumstances beyond our reasonable control.
        </p>
      </>
    ),
  },
  {
    id: "warranty-disclaimer",
    title: "10. Disclaimer of Warranties",
    body: (
      <>
        <p>
          To the maximum extent permitted by law, the Service is provided
          &quot;as is&quot; and &quot;as available&quot;, without warranties of
          any kind, whether express, implied, or statutory, including the
          implied warranties of merchantability, fitness for a particular
          purpose, and non-infringement. We do not warrant that messages will
          always be delivered, opened, or read by your end customers.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "11. Limitation of Liability",
    body: (
      <>
        <p>
          To the maximum extent permitted by applicable law, AQIROX&apos;s
          aggregate liability for any and all claims arising out of or related
          to these Terms or the Service shall not exceed the total fees you
          paid to AQIROX in the three (3) months immediately preceding the
          event giving rise to the claim.
        </p>
        <p>
          In no event shall AQIROX be liable for any indirect, incidental,
          special, consequential, exemplary, or punitive damages, including
          loss of profits, revenue, data, goodwill, or business opportunity,
          even if advised of the possibility of such damages.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "12. Indemnification",
    body: (
      <>
        <p>
          You agree to indemnify, defend, and hold harmless AQIROX, its
          directors, employees, and affiliates from and against any claims,
          damages, liabilities, losses, costs, and expenses (including
          reasonable legal fees) arising out of or related to (a) your use of
          the Service, (b) your breach of these Terms, (c) your violation of
          any law or rights of a third party, or (d) the customer data you
          upload to the Service.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "13. Suspension & Termination",
    body: (
      <>
        <p>
          We may suspend or terminate your access to the Service at any time
          if you breach these Terms, fail to pay fees when due, or use the
          Service in a manner that violates applicable law or Meta&apos;s
          policies. You may cancel your subscription at any time from your
          account settings; cancellation takes effect at the end of the
          then-current billing cycle.
        </p>
        <p>
          Upon termination, your right to use the Service ceases immediately.
          Sections that by their nature survive termination — including
          payment obligations, indemnities, limitations of liability, and
          governing law — will continue to apply.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "14. Governing Law & Jurisdiction",
    body: (
      <>
        <p>
          These Terms are governed by and construed in accordance with the
          laws of India. Subject to applicable consumer-protection law, the
          courts at {JURISDICTION} shall have exclusive jurisdiction to hear
          and decide any dispute arising out of or in connection with these
          Terms or the Service.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "15. Changes to these Terms",
    body: (
      <>
        <p>
          We may update these Terms from time to time. The updated version
          will be posted on this page with a new &quot;Effective Date&quot;.
          Material changes will be communicated to you by email or through
          the Service. Your continued use of the Service after the changes
          take effect constitutes acceptance of the updated Terms.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "16. Contact",
    body: (
      <>
        <p>
          For any questions about these Terms, please write to us at{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-primary font-semibold hover:underline break-all"
          >
            {EMAIL}
          </a>{" "}
          or reach out via our{" "}
          <Link
            to="/contact"
            className="text-primary font-semibold hover:underline"
          >
            Contact page
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default function Terms() {
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
            <ScrollText className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            <span className="text-[11px] sm:text-sm font-bold tracking-tight uppercase">
              Terms of Service
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-zapier-black leading-[0.95] mb-6 md:mb-8"
          >
            The rules of the{" "}
            <span className="text-primary font-editorial italic font-light">
              road.
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
            Need clarification?
          </h2>
          <p className="text-base md:text-lg text-sand/70 leading-relaxed mb-8 max-w-xl mx-auto">
            If anything in these Terms is unclear, write to us before
            subscribing. We are happy to walk through the specifics.
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
