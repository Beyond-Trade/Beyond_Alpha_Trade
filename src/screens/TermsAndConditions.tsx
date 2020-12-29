import React, { useEffect } from "react";
import TermsAndConditionsBanner from "../components/atomic/termsAndConditions/TermsAndConditionsBanner";
function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <TermsAndConditionsBanner />
      <div className=" px-8 md:px-16 xl:px-24 lg:px-24 mt-8 xl:text-xs xxl:text-lg">
        <h1 className="xl:text-2xl xxl:text-3xlflex  p-8 items-center text-center justify-cente text-customBlack-500">
          INTRODUCTION
        </h1>
        <p className="items-center text-center justify-center">
          These Website Standard Terms and Conditions written on this webpage
          shall manage your use of our website, Beyond Exchange accessible at
          www.beyondexchange.com.
        </p>
        <p className="items-center text-center justify-center my-3">
          These Terms will be applied fully and affect to your use of this
          Website. By using this Website, you agreed to accept all terms and
          conditions written in here. You must not use this Website if you
          disagree with any of these Website Standard Terms and Conditions.
          These Terms and Conditions have been generated with the help of the
          Terms And Conditiions Sample and the Privacy Policy Generator.Minors
          or people below 18 years old are not allowed to use this Website.
        </p>
        <a
          href="https://beyond.learn786.com/"
          className="flex text-blue-500 items-center text-center justify-center my-3"
        >
          https://beyond.learn786.com/
        </a>
        <h1 className="xl:text-2xl xxl:text-3xlflex  p-8 items-center text-center justify-cente text-customBlack-500">
          INTELLECTUAL PROPERTY RIGHTS
        </h1>
        <p className="items-center text-center justify-center">
          Other than the content you own, under these Terms, Beyond Exchange
          and/or its licensors own all the intellectual property rights and
          materials contained in this Website. You are granted limited license
          only for purposes of viewing the material contained on this Website.
        </p>

        <h1 className="xl:text-2xl xxl:text-3xlflex  p-8 items-center text-center justify-cente text-customBlack-500">
          RESTRICTIONS
        </h1>
        <p className="items-center justify-center my-3">
          You are specifically restricted from all of the following:
        </p>
        <ol>
          <li className="flex items-center my-2 flex">
            <img
              src="/assets/Icons/check.svg"
              alt="img"
              className="xl:h-3 xxl:h-5 xl:mr-2 xxl:mr-3"
            />
            publishing any Website material in any other media.
          </li>
          <li className="items-center my-2 flex">
            <img
              src="/assets/Icons/check.svg"
              alt="img"
              className="xl:h-3 xxl:h-5 xl:mr-2 xxl:mr-3"
            />
            selling, sublicensing and/or otherwise commercializing any Website
            material.
          </li>
          <li className="items-center my-2 flex">
            <img
              src="/assets/Icons/check.svg"
              alt="img"
              className="xl:h-3 xxl:h-5 xl:mr-2 xxl:mr-3"
            />
            publicly performing and/or showing any Website material.
          </li>
          <li className="items-center my-2 flex">
            <img
              src="/assets/Icons/check.svg"
              alt="img"
              className="xl:h-3 xxl:h-5 xl:mr-2 xxl:mr-3"
            />
            using this Website in any way that is or may be damaging to this
            Website;
          </li>
          <li className="items-center my-2 flex">
            <img
              src="/assets/Icons/check.svg"
              alt="img"
              className="xl:h-3 xxl:h-5 xl:mr-2 xxl:mr-3"
            />
            using this Website in any way that impacts user access to this
            Website;
          </li>
          <li className="items-center my-2 flex">
            <img
              src="/assets/Icons/check.svg"
              alt="img"
              className="xl:h-3 xxl:h-5 xl:mr-2 xxl:mr-3"
            />
            using this Website contrary to applicable laws and regulations, or
            in any way may cause harm to the Website, or to any person or
            business entity;
          </li>
          <li className="items-center my-2 flex">
            <img
              src="/assets/Icons/check.svg"
              alt="img"
              className="xl:h-3 xxl:h-5 xl:mr-2 xxl:mr-3"
            />
            engaging in any data mining, data harvesting, data extracting or any
            other similar activity in relation to this Website;
          </li>
          <li className="items-center my-2 flex">
            <img
              src="/assets/Icons/check.svg"
              alt="img"
              className="xl:h-3 xxl:h-5 xl:mr-2 xxl:mr-3"
            />
            using this Website to engage in any advertising or marketing.
          </li>
        </ol>
        <p className="items-center text-center justify-center">
          Certain areas of this Website are restricted from being access by you
          and Beyond Exchange may further restrict access by you to any areas of
          this Website, at any time, in absolute discretion. Any user ID and
          password you may have for this Website are confidential and you must
          maintain confidentiality as well.
        </p>
        <h1 className="xl:text-2xl xxl:text-3xlflex  p-8 items-center text-center justify-cente text-customBlack-500">
          YOUR CONTENT
        </h1>
        <p className="items-center text-center justify-center">
          In these Website Standard Terms and Conditions, "Your Content" shall
          mean any audio, video text, images or other material you choose to
          display on this Website. By displaying Your Content, you grant Beyond
          Exchange a non-exclusive, worldwide irrevocable, sub licensable
          license to use, reproduce, adapt, publish, translate and distribute it
          in any and all media. Your Content must be your own and must not be
          invading any third-party’s rights. Beyond Exchange reserves the right
          to remove any of Your Content from this Website at any time without
          notice.
        </p>
        {/*  */}
        <h1 className="xl:text-2xl xxl:text-3xlflex  p-8 items-center text-center justify-cente text-customBlack-500">
          NO WARRANTIES
        </h1>
        <p className="items-center text-center justify-center">
          This Website is provided "as is," with all faults, and Beyond Exchange
          express no representations or warranties, of any kind related to this
          Website or the materials contained on this Website. Also, nothing
          contained on this Website shall be interpreted as advising you.
        </p>

        {/*  */}
        <h1 className="xl:text-2xl xxl:text-3xlflex  p-8 items-center text-center justify-cente text-customBlack-500">
          LIMITATION OF LIABILITY
        </h1>
        <p className="items-center text-center justify-center">
          In no event shall Beyond Exchange, nor any of its officers, directors
          and employees, shall be held liable for anything arising out of or in
          any way connected with your use of this Website whether such liability
          is under contract. Beyond Exchange, including its officers, directors
          and employees shall not be held liable for any indirect, consequential
          or special liability arising out of or in any way related to your use
          of this Website.
        </p>

        {/*  */}
        <h1 className="xl:text-2xl xxl:text-3xlflex  p-8 items-center text-center justify-cente text-customBlack-500">
          INDEMNIFICATION
        </h1>
        <p className="items-center text-center justify-center">
          You hereby indemnify to the fullest extent Beyond Exchange from and
          against any and/or all liabilities, costs, demands, causes of action,
          damages and expenses arising in any way related to your breach of any
          of the provisions of these Terms.
        </p>

        {/*  */}
        <h1 className="xl:text-2xl xxl:text-3xlflex  p-8 items-center text-center justify-cente text-customBlack-500">
          SEVERABILITY
        </h1>
        <p className="items-center text-center justify-center">
          If any provision of these Terms is found to be invalid under any
          applicable law, such provisions shall be deleted without affecting the
          remaining provisions herein.
        </p>

        {/*  */}
        <h1 className="xl:text-2xl xxl:text-3xlflex  p-8 items-center text-center justify-cente text-customBlack-500">
          VARIATION OF TERMS
        </h1>
        <p className="items-center text-center justify-center">
          Beyond Exchange is permitted to revise these Terms at any time as it
          sees fit, and by using this Website you are expected to review these
          Terms on a regular basis.
        </p>
        {/*  */}
        <h1 className="xl:text-2xl xxl:text-3xlflex  p-8 items-center text-center justify-cente text-customBlack-500">
          ASSIGNMENT
        </h1>
        <p className="items-center text-center justify-center">
          The Beyond Exchange is allowed to assign, transfer, and subcontract
          its rights and/or obligations under these Terms without any
          notification. However, you are not allowed to assign, transfer, or
          subcontract any of your rights and/or obligations under these Terms.
        </p>
        {/*  */}
        <h1 className="xl:text-2xl xxl:text-3xlflex  p-8 items-center text-center justify-cente text-customBlack-500">
          ENTIRE AGREEMENT
        </h1>
        <p className="items-center text-center justify-center">
          These Terms constitute the entire agreement between Beyond Exchange
          and you in relation to your use of this Website, and supersede all
          prior agreements and understandings.
        </p>
        {/*  */}
        <h1 className="xl:text-2xl xxl:text-3xlflex  p-8 items-center text-center justify-cente text-customBlack-500">
          GOVERNING LAW & JURISDICTION
        </h1>
        <p className="items-center text-center justify-center">
          These Terms will be governed by and interpreted in accordance with the
          laws of the State of um, and you submit to the non-exclusive
          jurisdiction of the state and federal courts located in um for the
          resolution of any disputes.
        </p>
      </div>
    </div>
  );
}
export default TermsAndConditions;
