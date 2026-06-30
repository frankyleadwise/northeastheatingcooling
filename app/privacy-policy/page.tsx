import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for North East Heating And Cooling. Learn how we collect, use, and protect your personal information.',
  robots: { index: false, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-[#0f1620] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-4 text-[#F0A06A]">Legal</p>
          <h1 className="font-display text-4xl font-extrabold tracking-[-0.03em]">Privacy Policy</h1>
          <p className="mt-3 text-slate-300 text-sm">Last updated: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto prose prose-gray prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-[#C8330A] prose-a:no-underline hover:prose-a:underline leading-relaxed text-gray-700">

          <p>
            North East Heating And Cooling (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the website{' '}
            <a href="https://northeastheatingcooling.com">northeastheatingcooling.com</a>. This Privacy Policy
            explains what information we collect, how we use it, and your rights regarding your data.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly when you:</p>
          <ul>
            <li>Fill out our contact or service request form (name, email, phone number, service address, and message)</li>
            <li>Call us at <a href="tel:8132916146">(813) 291-6146</a></li>
            <li>Email us directly</li>
          </ul>
          <p>
            We do not use tracking cookies, third-party analytics platforms, or behavioral advertising on this
            website.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information you provide solely to:</p>
          <ul>
            <li>Respond to your service request or inquiry</li>
            <li>Schedule and confirm HVAC appointments</li>
            <li>Send service-related follow-up communications</li>
          </ul>
          <p>
            We will never sell, rent, or share your personal information with third parties for marketing
            purposes.
          </p>

          <h2>3. SMS / Text Messaging</h2>
          <p>
            If you provide your mobile number and check the SMS consent box on one of our forms, or
            if you call or text us, you agree to receive text messages from North East Heating And
            Cooling related to your service. These may include appointment confirmations and
            reminders, service follow-ups, replies to missed calls, and occasional requests to leave
            a review. Consent to receive text messages is not a condition of any purchase.
          </p>
          <ul>
            <li>Message frequency varies.</li>
            <li>Message and data rates may apply.</li>
            <li>Reply STOP to any message to opt out at any time. Reply HELP for help.</li>
          </ul>
          <p>
            <strong>
              Mobile information and SMS consent are never sold or shared with third parties or
              affiliates for marketing or promotional purposes.
            </strong>{' '}
            Text messaging originator opt-in data and consent will not be shared with any third
            parties.
          </p>

          <h2>4. Data Storage and Security</h2>
          <p>
            Contact form submissions are transmitted to us via email and stored only as long as necessary to
            fulfill your service request. We take reasonable precautions to protect your information from
            unauthorized access, but no method of electronic transmission is 100% secure.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            Our website may link to third-party platforms such as Google Maps or Google Business Profile. These
            services have their own privacy policies and we encourage you to review them. We are not responsible
            for the privacy practices of external sites.
          </p>

          <h2>6. Children&rsquo;s Privacy</h2>
          <p>
            Our website is not directed at children under 13. We do not knowingly collect personal information
            from anyone under 13 years of age.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You may request to access, correct, or delete any personal information we hold about you at any time
            by contacting us. We will respond within a reasonable timeframe.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an
            updated date. Continued use of our website after changes are posted constitutes your acceptance of
            the updated policy.
          </p>

          <h2>9. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us:</p>
          <ul>
            <li>Phone: <a href="tel:8132916146">(813) 291-6146</a></li>
            <li>Online: <Link href="/contact">northeastheatingcooling.com/contact</Link></li>
          </ul>
        </div>
      </section>
    </main>
  )
}
