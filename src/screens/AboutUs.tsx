import AboutUsBanner from "../components/atomic/aboutUs/AboutUsBanner";
import DisclaimerBanner from "../components/atomic/disclaimer/DisclaimerBanner";
import PrivacyPolicyBanner from "../components/atomic/privacyPolicy/PrivacyPolicyBanner";
import React from "react";
function AboutUs() {
  return (
    <div>
      <AboutUsBanner />
      <div className=" px-8 md:px-16 xl:px-24 lg:px-24 mt-8">
        <p className="text-xs items-center text-center justify-center">
          All the information on this website - www.beyondexchange.com - is
          published in good faith and for general information purpose only.
          Beyond Exchange does not make any warranties about the completeness,
          reliability and accuracy of this information. Any action you take upon
          the information you find on this website (Beyond Exchange), is
          strictly at your own risk. Beyond Exchange will not be liable for any
          losses and/or damages in connection with the use of our website.
        </p>
        <p className="text-xs items-center text-center justify-center my-3">
          From our website, you can visit other websites by following hyperlinks
          to such external sites. While we strive to provide only quality links
          to useful and ethical websites, we have no control over the content
          and nature of these sites. These links to other websites do not imply
          a recommendation for all the content found on these sites. Site owners
          and content may change without notice and may occur before we have the
          opportunity to remove a link which may have gone 'bad'.
        </p>
        <p className="text-xs items-center text-center justify-center">
          Please be also aware that when you leave our website, other sites may
          have different privacy policies and terms which are beyond our
          control. Please be sure to check the Privacy Policies of these sites
          as well as their "Terms of Service" before engaging in any business or
          uploading any information.
        </p>
        <h1 className="text-2xl flex  p-8 items-center text-center justify-center">
          CONSENT
        </h1>
        <p className="text-xs items-center text-center justify-center">
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </p>
        <h1 className="text-2xl flex  p-8 items-center text-center justify-center">
          UPDATE
        </h1>
        <p className="text-xs items-center text-center justify-center">
          Should we update, amend or make any changes to this document, those
          changes will be prominently posted here.
        </p>
      </div>
    </div>
  );
}
export default AboutUs;
