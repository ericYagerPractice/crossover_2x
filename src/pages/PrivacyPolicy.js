import React from 'react';
import {
  MDBContainer,
  MDBTypography,
  MDBBox,  
} from 'mdbreact';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <>
      <MDBContainer className="mw-100 text-center" style={{paddingTop:"50px"}}>
        <MDBTypography tag='h1'>Crossover2X Privacy Notice </MDBTypography>
        <hr />
        <MDBTypography tag='h3'><strong>Privacy Policy - </strong><small className="text-muted">Last updated November 19, 2020</small></MDBTypography>
        <hr /> 
      </MDBContainer> 
      <MDBContainer className="mw-100 text-left" style={{paddingTop:"50px"}}>
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>Introduction</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p">We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at eric@crossover2x.net.</MDBBox>
            <MDBBox tag="p" mb={0}>When you visit our website, https://crossover2x.net, and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our Sites and our services.</MDBBox>
            <MDBBox tag="p" mb={0}>This privacy policy applies to all information collected through our website (such as https://crossover2x.net/), and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the “Services“).</MDBBox>
            <MDBBox tag="p" mb={0}><strong>Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us</strong></MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>What information do we collect?</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag='p' mb={0} className='bq-title'>Personal Information you disclose to us</MDBBox>
            <MDBBox tag="p"> We collect personal information that you voluntarily provide to us when registering with the site and expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services or otherwise contacting us.</MDBBox>
            <MDBBox tag="p" mb={0}>
              The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect can include the following:
              <MDBContainer style={{width:"75%"}}>
                <li className="p-2"><strong>Publicly Available Personal Information.</strong> We collect first name, maiden name, last name, nickname; email addresses; business email; business entity filings, corporate affiliations, business associates; business phone number; phone numbers; current and former address; social media; and other similar data. </li>
                <li className="p-2"><strong>Personal Information Provided by You.</strong> We collect data collected from surveys; financial information (credit card number, purchase history, invoices); and other similar data. </li>
                <li className="p-2"><strong>Payment Data.</strong> We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Stripe . You may find their privacy policy link(s) here: https://stripe.com/privacy. </li>
                <li className="p-2"><strong>Social Media Login Data.</strong> We may provide you with the option to register using social media account details, like your Facebook, Twitter or other social media account. If you choose to register in this way, we will collect the Information described in the section called “HOW DO WE HANDLE YOUR SOCIAL LOGINS” below.</li>
              </MDBContainer>
            </MDBBox>
          </MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag='p' mb={0} className='bq-title'>Information Automatically Collected</MDBBox>
            <MDBBox tag="p"> We collect personal information that you voluntarily provide to us when registering with the site and expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services or otherwise contacting us.</MDBBox>
            <MDBBox tag="p" mb={0}>
            We automatically collect certain information when you visit, use or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
            </MDBBox>
            <MDBBox tag="p" mb={0}>
            We do not use Cookies to track your internet usage.
            </MDBBox>
            <MDBBox tag="p" mb={0}>
            We collect devices; tools and protocols, such as IP (Internet Protocol) addresses; cookie identifiers, or others such as the ones used for analytics and marketing; device’s geolocation; and other similar data.
            </MDBBox>
          </MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag='p' mb={0} className='bq-title'>Information Collected from Other Sources</MDBBox>
            <MDBBox tag="p" mb={0}>
            We may obtain information about your from other sources, such as public databases, joint marketing partners, social media platforms (such as Facebook), as well as from other third parties. Examples of the information we receive from other sources include: social media profile information (your name, gender, birthday, email, current city, state and country, user identification numbers for your contacts, profile picture URL, and any other information that you choose to make public); marketing leads and search results and links, including paid listings (such as sponsored links). We will inform you about the source of information and the type of information and the type of information we have collected about you within a reasonable period after obtaining the personal data, but at the latest within one month.
            </MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>How Do We Use Your Information?</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p">We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below. </MDBBox>
            <MDBBox tag="p" mb={0}>
              We use the information we collect or receive:
              <MDBContainer style={{width:"75%"}}>
                <li className="p-2"><strong>To facilitate account creation and logon process</strong> If you choose to link your account with us to a third party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract. See the section below headed “HOW DO WE HANDLE YOUR SOCIAL LOGINS” for further information. </li>
                <li className="p-2"><strong>To send administrative information to you.</strong> We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies. </li>
                <li className="p-2"><strong>To request feedback.</strong> We may use your information to request feedback and to contact you about your use of our Services.</li>
                <li className="p-2"><strong>To protect our services.</strong> We may use your information as part of our efforts to keep our Services safe and secure (for example, for fraud monitoring and prevention).</li>
                <li className="p-2"><strong>To enable user-to-user communication.</strong> We may use your information in order to enable user-to-user communications with each user’s consent.</li>
                <li className="p-2"><strong>To enforce our terms, conditions, and policies for Business Purposes, Legal Reasons, and Contractual Reasons.</strong> </li>
                <li className="p-2"><strong>To respond to legal requests and prevent harm</strong> If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.</li>
                <li className="p-2"><strong>To manage user accounts</strong> We may use your information for the purposes of managing our account and keeping it in working order.</li>
                <li className="p-2"><strong>To deliver services to the user.</strong> We may use your information to provide you with the requested service.</li>
                <li className="p-2"><strong>To respond to user inquiries/offer support to users.</strong> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.</li>
                <li className="p-2"><strong>For other business purposes.</strong> We may use your information for other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Services, products, marketing and your experience. We may use and store this information in aggregated and anonymized form so that it is not associated with individual end users and does not include personal information. We will not use identifiable personal information without your consent.</li>
              </MDBContainer>
            </MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>Will your information be shared with anyone?</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p" mb={0}>
              We may process or share data based on the following legal basis:
              <MDBContainer style={{width:"75%"}}>
                <li className="p-2"><strong>Consent: </strong> We may process your data if you have given us specific consent to use your personal information in a specific purpose.</li>
                <li className="p-2"><strong>Performance of a Contract: </strong> We may process your data if you have given us specific consent to use your personal information in a specific purpose.</li>
                <li className="p-2"><strong>Legal Obligations: </strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
                <li className="p-2"><strong>Vital Interests: </strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
              </MDBContainer>
            </MDBBox>
            <MDBBox tag="p" mb={0}>
              More specifically, we may need to process your data or share your personal information in the following situations:
              <MDBContainer style={{width:"75%"}}>
                <li className="p-2"><strong>Vendors, Consultants and other third-party service providers: </strong> We may share your data with third party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the Services, which will enable them to collect data about how you interact with the Services over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content and better understand online activity. Unless described in this Policy, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes. We have contracts in place with our data processors. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will not share your personal information with any organization apart from us. They will hold it securely and retain it for the period we instruct.</li>
                <li className="p-2"><strong>Business Transfers: </strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                <li className="p-2"><strong>Business partners: </strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
                <li className="p-2"><strong>Vital Interests: </strong> We may share your information with our business partners to offer you certain products, services or promotions.</li>
              </MDBContainer>
            </MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>Who will your information be shared with?</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p">We only share and disclose your information with the following third parties. We have categorized each party so that you may be easily understand the purpose of our data collection and processing practices. If we have processed your data based on your consent and you wish to revoke your consent, please contact us.</MDBBox>
            <MDBBox tag="p" mb={0}>
              Services we may share your information with:
              <MDBContainer style={{width:"75%"}}>
                <li className="p-2"><strong>Third party authentication to connect our services with your third-party account.</strong> Facebook, Amazon, Google.</li>
                <li className="p-2"><strong>Cloud Computing Services.</strong> Amazon Web Services.</li>
                <li className="p-2"><strong>Invoice and Billing.</strong> Stripe.</li>
                <li className="p-2"><strong>Social Media sharing and advertising.</strong> Including Facebook Social plugins, Twitter social plugins, LinkedIn social plugins.</li>
                <li className="p-2"><strong>User account registration and authentication.</strong> Facebook login, Goole login, Amazon login</li>
              </MDBContainer>
            </MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>Do we use cookies and other tracking technologies?</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p">No.  We have no interest in using cookies or other tracking technologies.  We'd rather you enjoy the internet without Crossover2X looking over your shoulder.</MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>How do we handle your social logins?</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p">Our Services offer you the ability to register and login using your third party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile Information we receive may vary depending on the social media provider concerned, but will often include your name, e-mail address, friends list, profile picture as well as other information you choose to make public.</MDBBox>
            <MDBBox tag="p">We will use the information we receive only for the purposes that are described in this privacy policy or that are otherwise made clear to you on the Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third party social media provider. We recommend that you review their privacy policy to understand how they collect, use and share your personal information, and how you can set your privacy preferences on their sites and apps.</MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>Is your information transferred internationally?</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p">Our servers are located in United States. If you are accessing our Services from outside United States, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see “WILL YOUR INFORMATION BE SHARED WITH ANYONE?” above), in United Kingdom, United States, Taiwan, and other countries.</MDBBox>
            <MDBBox tag="p">If you are a resident in the European Economic Area, then these countries may not have data protection or other laws as comprehensive as those in your country. We will however take all necessary measures to protect your personal information in accordance with this privacy policy and applicable law.</MDBBox>
            <MDBBox tag="p">European Commission's standard contractual clauses:</MDBBox>
            <MDBBox tag="p">Such measures implementing the European Commission’s Standard Contractual Clauses for transfers of personal information between our group companies and between us and our third-party providers, which require all such recipients to protect personal information that they process from the EEA in accordance with European data protection laws. Our Standard Contractual Clauses can be provided upon request. We have implemented similar appropriate safeguards with our third party service providers and partners and further details can be provided upon request.</MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>How long do we keep your information?</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p">We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this policy will require us keeping your personal information for longer than 90 days past the start of idle period on the user’s account.</MDBBox>
            <MDBBox tag="p">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>How do we keep your information safe?</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p">We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the services within a secure environment.  Your data is encrypted using Encryption At Rest (EAR) using industry standard encryption methods.</MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>Do we collect information from minors?</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p">We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at eric@crossover2x.net.</MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>What are your privacy rights?</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p">In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.</MDBBox>
            <MDBBox tag="p">If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the processing before its withdrawal.</MDBBox>
            <MDBBox tag="p">If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://edpb.europa.eu/about-edpb/board/members_en. </MDBBox>
            <MDBBox tag="p">If you have questions or comments about your privacy rights, you may email us at eric@crossover2x.net.</MDBBox>
            <MDBBox tag="p"><strong>Account Information.</strong> If you would at any time like to review or change the information in your account or terminate your account, you can:
              <li className="p-2">Log into your account settings and update your user account.</li>
              <li className="p-2">Contact us using the contact information provided.</li>
            </MDBBox>
            <MDBBox tag="p">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.</MDBBox>
            <MDBBox tag="p"><strong>Opting out of email marketing.</strong> You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list – however, we will still need to send you service-related emails that are necessary for the administration and use of your account. To otherwise opt-out, you may:
              <li className="p-2">Note your preferences when you register an account with the site.</li>
              <li className="p-2">Access your account settings and update preferences.</li>
              <li className="p-2">Contact us using the contact information provided.</li>
            </MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>Data Breach</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p">A privacy breach occurs when there is unauthorized access to or collection, use, disclosure or disposal of personal information. You will be notified about data breaches when Termly Inc believes you are likely to be at risk or serious harm. For example, a data breach may be likely to result in serious financial harm or harm to your mental or physical well-being. In the event that Termly Inc becomes aware of a security breach which has resulted or may result in unauthorized access, use or disclosure of personal information Termly Inc will promptly investigate the matter and notify the applicable Supervisory Authority not later than 72 hours after having become aware of it, unless the personal data breach is unlikely to result in a risk to the rights and freedoms of natural persons.</MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>Controls for do-not-track-features</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy policy.</MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>Do California residents have specific privacy rights?</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p">California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</MDBBox>
            <MDBBox tag="p">If you are under 18 years of age, reside in California, and have a registered account with the Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from our systems.</MDBBox>
            
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>Do we make updates to this policy?</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p">We may update this privacy policy from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}}>
          <MDBTypography tag='h2'><strong>How can you contact us about this policy?</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p">If you have questions or comments about this policy, you may contact our Data Protection Officer (DPO), Eric Yager, by email at eric@crossover2x.net.</MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
        <MDBContainer className="mw-100" style={{width:"75%"}} id="deletion">
          <MDBTypography tag='h2'><strong>How do I delete my data stored by Crossover2X?</strong></MDBTypography>
          <MDBTypography blockquote>
            <MDBBox tag="p">There are two ways to have your personal data deleted.  The first method is to go to your account page (https://crossover2x.net/Account) and click "Delete Account."  Clicking this button will delete all personal information, social media information, credit card information, and any other information personally attributable to you.  Alternatively, you can email eric@crossover2x.net and simply request your data be deleted and your data will be deleted within 24 hours of email receipt.</MDBBox>
          </MDBTypography>
        </MDBContainer>
        <hr />
      </MDBContainer>
      
    </>
  );
}
