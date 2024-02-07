import React, {useEffect, useState} from 'react';
import Footer from '../../Components/FooterWeb';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);


  return (
    <>
      <div className='privacy-policy-container'>
        <h1>Privacy Policy</h1>
        <h2>1. INTRODUCTION</h2>
        <p>
          Dashverse Corp is an entity registered in the United States of
          America. We are engaged in the business of providing, managing,
          operating and hosting a digital platform, under the brand Dashtoon
          that allows users to create, read and share digital comics. We are
          committed to ensuring that privacy of our clients, visitors, and other
          users of the website at https://www.dashtoon.com or any other website,
          mobile version of the Website or mobile application of Dashverse Corp
          or any of its affiliates or licensees (collectively, the “Website”) is
          always respected. In this Policy, “Dashtoon”, “we”, or “us” refers to
          Dashverse Corp and its affiliates, successors and assigns, and “you”
          refers to a user who has provided any information including Personal
          Information (as defined below) and using any features therein.
          <br></br>
          <br></br>
          The protection and security of your Personal Information and Usage
          Information (as defined below) is one of our top priorities. This
          Privacy Policy discloses and explains how we collect, use, share and
          protect Personal Information, Usage Information or any other
          information about you. We also provide information regarding how you
          can access and update your Personal Information and make certain
          choices about how your Personal Information is used by us. This
          Privacy Policy does not apply to information we collect by other means
          (including offline) or from other sources.<br></br>
          <br></br>
          This Privacy Policy explains what information of yours will be
          collected by Dashtoon when you access the Website, how the information
          will be used, and how you can control the collection, correction
          and/or deletion of information. We will not use or share your
          information with anyone except as described in this Privacy Policy.
          The use of information collected through our Website shall be limited
          to the purposes under this Privacy Policy.<br></br>
          <br></br>
        </p>
        <h2>2. INFORMATION COLLECTION BY DASHTOON</h2>
        <h3>2.1 Data Controller and Data Processor:</h3>
        <p>
          Dashtoon controls, collects, owns and directs the use of the Personal
          Information and Usage Information on its Website and Dashtoon is the
          data controller and data processor as regards the Personal Information
          and Usage Information collected on its Website. For any queries
          regarding this Privacy Policy and the collection and use of data
          collected or processed under this Privacy Policy, you may write to us
          at the e-mail address mentioned under Section 14 (Grievance Redressal)
        </p>
        <h3>
          2.2 Legal basis for collection and processing of Personal/Usage
          Information:
        </h3>
        <p>
          The legal basis for the collection and processing of any information
          collected and processed by Dashtoon including the Personal Information
          is (i) your consent at the time of providing the Personal Information;
          (ii) where it is in our legitimate interests to do so and not
          overridden by your rights (for example, in some cases for direct
          marketing, fraud prevention, network and information systems security,
          responding to your communications, the operation of networks of groups
          by the network administrators, and improving our Website). In some
          cases, we may also have a legal obligation to collect information
          about you, or may otherwise need the information to protect your vital
          interests or those of another person. We may also process information
          to comply with a legal requirement or to perform a contract.
        </p>
        <h3>2.3 Basic Information</h3>
        <p>
          Dashtoon may ask you to provide certain categories of information such
          as personal information, which is information that could reasonably be
          used to identify you personally, such as your name, company address,
          e-mail address, date of birth and mobile number (“Personal
          Information”), when you access the Website, in order to provide you
          with the relevant information requested. Additionally, we may collect
          this information through various forms and in various places through
          the Website, including when you first register with us, when you
          create a transaction, when you contact us, when you update your
          information or from time to time or when you otherwise interact with
          us. Dashtoon may include registration, surveys, and other online forms
          where users will need to provide Personal Information.
        </p>
        <h3>2.4 Additional Information</h3>
        <h4>2.4.1 Cookies:</h4>
        <p>
          Dashtoon may use a standard “cookie” browser application feature to
          collect and understand website usability trends. Cookies are text
          files that we may place in your computer browser to store your
          preferences. Cookies are used to record various aspects of your visit
          and assist us in providing you with uninterrupted products or
          services. One of the primary purposes of cookies is to store your
          preferences and other information on your computer in order to save
          you time by eliminating the need to repeatedly enter the same
          information and display your personalized content. However, no
          personal information identifying the user is collected nor any data
          capture mechanism is employed. The user may change browser settings to
          accept or reject cookies on personal preference. You have the ability
          to accept or decline cookies. Most Web browsers automatically accept
          cookies, but you can usually modify the browser setting to decline
          cookies if you so prefer. If you choose to decline cookies, you may
          not be able to sign in or use other interactive features of the
          Website that may depend on cookies. If you choose to accept cookies,
          you also have the ability to later delete cookies that you have
          accepted. If you choose to delete cookies, any settings and
          preferences controlled by those cookies, including advertising
          preferences, will be deleted and may need to be recreated. We process
          and keep all data for our own use and, if you wish to opt out from
          tracking by Dashtoon you can do so by mailing us at the E-mail ID
          mentioned in Section 18.2 (Customer Services).
        </p>
        <h4>2.4.2 Information Collected Automatically:</h4>
        <p>
          In addition to any Personal Information or other information that you
          choose to submit to us, we may use a variety of technologies that
          automatically (or passively) collect certain information whenever you
          access the Website (“Usage Information”). This Usage Information may
          include the browser that you are using and the URL that referred you
          to our Website, among other information. Usage Information may be
          non-identifying or may be associated with you. Whenever we associate
          Usage Information with your Personal Information, we will treat it as
          Personal Information and the conditions relating to Personal
          Information under this Privacy Policy will be followed. Traffic data,
          while anonymous, is gathered and analysed for business needs.
        </p>
        <h4>2.4.3 Information Third Parties Provide About You:</h4>
        <p>
          We may, from time to time, supplement the information we collect about
          you through our Website with outside records from third parties
          obtained rightfully in order to enhance our ability to serve you,
          tailor our content to you and offer you opportunities to use such of
          our products or services that we believe may be of interest to you. We
          may combine the information we receive from such third-party sources
          with information we collect through the Website or through independent
          research conducted by Dashtoon, with your consent. In these cases, we
          will apply this Privacy Policy to any Personal Information received,
          unless otherwise provided. We may process such information received
          from third parties for legitimate commercial purposes or to enter into
          contractual obligations with you or to fulfil certain contractual
          obligations or where you have requested third parties to provide
          information about yourself to us
        </p>
        <h3>2.5 Processing of Data:</h3>
        <p>
          Dashtoon may also process any Personal Information or Usage
          Information collected from you for legitimate commercial purposes
          including to provide you with the requisite information requested. A
          list of uses of the Personal Information and Usage Information
          collected is provided in Section 3 of this Policy (Use of Information
          Collected). Dashtoon implements appropriate technical and
          organisational measures to ensure a level of security appropriate to
          the risk of our processing of information about individuals such as
          (i) only sharing and providing access to your information to the
          minimum extent necessary, subject to confidentiality restrictions
          where appropriate, and on an anonymised basis wherever possible; (ii)
          using secure servers to store your information; (iii) verifying the
          identity of any individual who requests access to information prior to
          granting them access to information; and (iv) using Secure Sockets
          Layer (SSL) software or other similar encryption technologies to
          encrypt any payment transactions you make on or via our website.
        </p>
        <h3>2.6 Right of a user in relation to data submitted:</h3>
        <p>
          Any user who has submitted Personal Information on the Website has the
          right to (i) access, correct, or delete such Personal Information
          subject to us successfully verifying your identity; (ii) object to us
          processing your Personal Information on legitimate grounds; (iii) to
          withdraw your consent to our use of your information at any time where
          we rely on your consent to use or process that information; (iv)
          opting out of receiving any promotional or marketing material by
          clicking on the “Unsubscribe” button or by contacting us at the E-mail
          ID mentioned in Section 18.2 (Customer Services). Please note that if
          you withdraw your consent, this will not affect the lawfulness of our
          use and processing of your information on the basis of your consent
          before the point in time when you withdraw your consent; (v) right to
          have the Personal Information transferred to another data controller;
          and (vi) lodge a complaint with a supervisory authority, of an alleged
          infringement of applicable data protection laws. Any request received
          by us by the user in relation to the aforesaid shall be acknowledged
          by us within 72 (seventy-two) business hours.
        </p>
        <h2>3. USE OF INFORMATION COLLECTED</h2>
        <h3>3.1 Business Purposes:</h3>
        <p>
          Dashtoon does not share any Personal Information with any third party
          without your consent, except when directed by the law. Dashtoon can
          use this data to verify user identity in line with engagement
          initiated by the user. We will communicate with you using the contact
          information provided by you in order to respond to any queries that
          you may have and to provide any information that you may request
          regarding the Products or services. We may communicate with you either
          by written, physical communication, email, telephone, SMS or via
          notifications on your mobile device. We may also send strictly product
          or service-related announcements to you periodically and when it is
          necessary to do so. For instance, if our products or services are
          temporarily suspended for maintenance, we might send you an email,
          text message, flash notification or telephone call. If you do not wish
          to receive such alerts, you have the option to unsubscribe from such
          emails by writing to us at the E-mail ID mentioned in Section
          18.2(Customer Services).
          <br></br>
          <br></br>
          We may use Personal Information or Usage Information collected through
          the Website in the following ways:
          <ul>
            <li>
              To operate and improve our Website and the tools associated with
              the Website;
            </li>
            <li>
              To create aggregated and anonymized information to determine which
              Website features are most popular and useful to users, and for
              other statistical analyses;
            </li>
            <li>
              To prevent, discover and investigate violations of this Privacy
              Policy or the Terms and Conditions, and to investigate fraud or
              other matters;
            </li>
            <li>
              To customize the content or the products or services on the
              Website for you, or the communications sent to you through the
              Website.
            </li>
            <li>
              To help provide you with the products or services on the Website;
            </li>
            <li>
              To observe, improve and administer the quality of products or
              services on the Website;
            </li>
            <li>
              To analyze how the Website is used, diagnose technical problems;
            </li>
            <li>
              Remember the basic information provided by you for effective
              access;
            </li>
            <li>
              To confirm your identity in order to determine your eligibility to
              use the Website and avail of the products or services;
            </li>
            <li>To notify you about any changes to the Website;</li>
            <li>
              To enable Dashtoon to comply with its legal and regulatory
              obligations;
            </li>
            <li>
              For the purpose of sending administrative notices, products or
              service-related alerts and other similar communication with a view
              to optimizing the efficiency of the Website;
            </li>
            <li>
              Doing market research, troubleshooting, protection against error,
              project planning, fraud and other criminal activity; and
            </li>
            <li>
              To reinforce Dashtoon’s Terms of Use available at -{' '}
              <a href='https://www.dashtoon.com/terms-and-conditions'>
                https://www.dashtoon.com/terms-and-conditions
              </a>
            </li>
          </ul>
        </p>
        <h3>3.2 Anonymous:</h3>
        <p>
          We may share non-Personal Information, such as aggregated user
          statistics and log data, with our business partners for industry
          analysis, demographic profiling, to deliver targeted advertising about
          other products or products or services, or for other business
          purposes. This information is solely used to analyze the company
          website and understand usage statistics, as mentioned above, is
          anonymous. The company may share this data with its business partners
          on an anonymous basis. We do not sell, share, rent or trade the
          information we have collected about you, including Personal
          Information, other than as disclosed within this Privacy Policy or at
          the time you provide your information. We do not share your Personal
          Information with third parties for those third parties’ direct
          marketing purposes unless you consent to such sharing at the time you
          provide your Personal Information.
        </p>
        <h3>3.3 Administrative and Legal Reasons:</h3>
        <p>
          We cooperate with government and law enforcement officials and private
          parties to enforce and comply with the law. Thus, we may access, use,
          store, transfer and disclose your information (including Personal
          Information), including disclosure to third parties such as government
          or law enforcement officials or private parties as we reasonably
          determine is necessary and appropriate: (i) to satisfy any applicable
          law, regulation, governmental requests or legal process; (ii) to
          protect the safety, rights, property or security of Dashtoon, our
          products or services, the Website or any third party; (iii) to protect
          the safety of the public for any reason; (iv) to detect, prevent or
          otherwise address fraud, security or technical issues; and /or (v) to
          prevent or stop any activity we consider to be, or to pose a risk of
          being, an illegal, unethical, or legally actionable activity. Such
          disclosures may be carried out without notice to you.
        </p>
        <h3>3.4 Business Transfer:</h3>
        <p>
          We may share your information, including your Personal Information and
          Usage Information with our parent, subsidiaries and affiliates for
          internal reasons. We also reserve the right to disclose and transfer
          all such information: (i) to a subsequent owner, co-owner or operator
          of the Website or applicable database; or (ii) in connection with a
          corporate merger, consolidation, restructuring, the sale of
          substantially all of our membership interests and/or assets or other
          corporate change, including, during the course of any due diligence
          process. You will be notified via email and/or a prominent notice on
          our Website of any change in ownership or uses of your personal
          information, as well as any choices you may have regarding your
          personal information. We will endeavour that the transferee who is the
          recipient of Personal Information and Usage Information commits to
          privacy measures which are substantially similar to the measures under
          this privacy policy.
        </p>
        <h2>
          4. THIRD-PARTY CONTENT AND LINKS TO THIRD-PARTY PRODUCTS OR SERVICES
        </h2>
        <p>
          We do not include or offer third-party products or services on our
          website.
        </p>
        <h2>5. DATA TRANSFER</h2>
        <p>
          Your information may be stored and processed in the United States of
          America or any other country in which Dashtoon or its subsidiaries,
          affiliates or products or service providers maintain facilities.
          Dashtoon may transfer information that we collect about you, including
          Personal Information, to affiliated entities, or to other third
          parties across borders and from your country or jurisdiction to other
          countries or jurisdictions around the world. These countries may have
          data protection laws that are different to the laws of your country
          and, in some cases, may not be as protective. We have taken
          appropriate safeguards to require that your information will remain
          protected in accordance with this Privacy Policy.
        </p>
        <h2>6. DATA RETENTION</h2>
        <p>
          Your information will be retained with Dashtoon as long as it is
          needed by Dashtoon to provide Products or services to you. If you wish
          to cancel your account or request that Dashtoon no longer uses your
          information to provide products or services, you may contact us at the
          E-mail ID mentioned in Section 18.2 (Customer Services.). Dashtoon
          will promptly delete the information as requested. Dashtoon will
          retain and use your information as necessary to comply with its legal
          obligations, resolve disputes, and enforce its agreements or for other
          business purposes. When Dashtoon has no ongoing legitimate business
          need to process your information, we will either delete or anonymize
          it.
        </p>
        <h2>7. CHILDREN</h2>
        <p>
          Dashtoon’s Terms of Use available at
          https://www.dashtoon.com/terms-and-conditions contain restrictions on
          how minors can access and use the Website. You are required to
          carefully read and comply with the same.<br></br>
          <br></br>
          Any collection of Personal Information of children is intended to
          comply with applicable law in each relevant jurisdiction, including
          the Children’s Online Privacy Protection Act applicable in the United
          States of America. Dashtoon requires parental consent before Personal
          Information belonging to children is submitted or collected unless the
          information concerned falls within an exception recognized under
          applicable law. Dashtoon does not make Personal Information collected
          from children publicly available nor do we enable children to do so on
          the Website. A child’s participation in any activity or service
          contained on the Website is not conditional upon disclosure of more
          Personal Information than reasonably necessary to participate in such
          activity or service.<br></br>
          <br></br>
          Parents may contact us at the E-mail ID mentioned in Section 18.2
          (Customer Services) to review, update or delete any of their
          children’s Personal Information and to elect for us not to collect any
          additional Personal Information from their children. We will not
          change how we handle previously collected information without
          providing notice and obtaining parental consent wherever necessary.
          <br></br>
          <br></br>
        </p>
        <h2>8. SECURITY</h2>
        <p>
          This website, in compliance with applicable norms, has a number of
          security measures to ensure there is no loss, misuse or illegal
          alteration of information collected from its users. Personal
          Information and Usage Information we collect is securely stored within
          our databases, and we use standard, industry-wide, commercially
          reasonable security practices for protecting your information.
          However, as effective as encryption technology is, no security system
          is impenetrable. We cannot guarantee the security of our databases,
          nor can we guarantee that information you supply won't be intercepted
          while being transmitted to us over the Internet or wireless
          communication and any information you transmit to Dashtoon you do at
          your own risk. If, despite our best efforts, an unauthorised breach of
          our security measures occurs, resulting in the unauthorised access,
          duplication, removal or alteration of any Personal Information, Third
          Party Information, or Usage Information, Dashtoon, its directors,
          officers, employees, promoters, or affiliates will not be held
          responsible for any loss resulting from such breach
        </p>
        <h2>9. COMPROMISE OF PERSONAL INFORMATION</h2>
        <p>
          In the event that Personal Information is compromised as a breach of
          security, Dashtoon will notify the supervisory authority in compliance
          with applicable law, within 72 (seventy two) hours of the breach
          coming to its notice.
        </p>
        <h2>10. CONTACT & POLICY UPDATES</h2>
        <p>
          In case on any queries on this privacy policy, please contact us
          at the E-mail ID mentioned in Section 18.1 (Legal and Notices).
          Dashtoon reserves the right to update or modify any part of this
          policy or make any changes without prior notice to the user. The user
          is advised to check this page periodically to stay abreast of any
          policy changes by us.
        </p>
        <h2>11. CHANGE OF INFORMATION AND CANCELLATION OF ACCOUNT</h2>
        <p>
          You are responsible for maintaining the accuracy of the information
          you submit to us, such as your contact information provided as part of
          account registration. If your Personal Information changes, or if you
          no longer desire to access the Website, you may correct, delete
          inaccuracies, or amend information by contacting us through at the
          E-mail ID mentioned in Section 18.2 (Customer Services) and we shall
          endeavor to respond within 72 (seventy two) hours of receipt of
          communication.<br></br>
          <br></br>
          You have the right to request that we rectify or delete the personal
          data or restrict the processing of your personal data, if you think
          they are inaccurate. Furthermore, you have the right to object against
          the processing based on our legitimate interests as a legal basis. We
          are required to assess and act on your request. Additionally, you also
          have the right to data portability if it should become relevant. You
          have a right to lodge a complaint with your local supervisory
          authority.
          <br></br>
          <br></br>
          You may also cancel or modify your communications that you have
          elected to receive from the Website by logging into your user account
          and changing your communication preferences.<br></br>
          <br></br>
          If you wish to cancel your account or request that we no longer use
          your information to provide you details with respect to our products
          or services and the Website, please write to us at the E-mail ID
          mentioned in Section 18.2 (Customer Services).<br></br>
          <br></br>
        </p>
        <h2>12. OPT IN</h2>
        <p>
          If you wish to opt for receiving non-essential communications such as
          promotional and marketing-related information regarding the Website
          and the products or services, please send Dashtoon an email at the
          E-mail ID mentioned in Section 18.2 (Customer Services).
        </p>
        <h2>13. CHANGES TO THE PRIVACY POLICY</h2>
        <p>
          From time to time, we may update this Privacy Policy to reflect
          changes to our information practices. Any changes will be effective
          immediately upon the posting of the revised Privacy Policy on the
          Website. If we make any material changes, we will notify you by email
          (sent to the e-mail address specified in your account) or by means of
          a notice on the Website prior to the change becoming effective. We
          encourage you to periodically review this page for the latest
          information on our privacy practices.
        </p>
        <h2>14. GRIEVANCE REDRESSAL</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy usage
          and processing of your personal information and content which violates
          the Privacy Policy and/or our Terms and Conditions please write to us
          at the E-mail address mentioned in Section 18.3 (Grievance Redressal)
          or using the details provided on our ‘Contact Us’ page. We will use
          reasonable efforts to respond promptly to requests, questions or
          concerns you may have regarding our use of personal information about
          you. Except where required by law, Dashtoon cannot ensure a response
          to questions or comments regarding topics unrelated to this policy or
          Company’s privacy practices.
        </p>
        <h2>15. CONSENT</h2>
        <p>
          By consenting to the terms under this Privacy Policy, you are
          expressly granting Dashtoon the right to collect, share, transfer,
          store, retain, disseminate or use the Personal Information/Usage
          Information collected by Dashtoon from your usage of the Website in
          accordance with the terms of the Privacy Policy. You may, at any time,
          withdraw consent for the collection or processing of Personal
          Information/Usage Information by sending an email at the E-mail ID
          mentioned in Section 18.2 (Customer Services). Dashtoon shall endeavor
          to reply, shall within 72 (seventy two) hours delete or anonymize the
          data collected from you.
        </p>
        <h2>16. GOVERNING LAW</h2>
        <p>
          This Policy is published and shall be governed by and construed in
          accordance with the applicable laws of the United States of America as
          amended from time to time, without reference to conflict of laws
          principles. The courts in Delaware shall have the exclusive
          jurisdiction to determine any disputes arising in relation to, or
          under, this Privacy Policy.
        </p>
        <h2>17. AMENDMENT</h2>
        <p>
          From time to time, we may update this Privacy Policy to reflect
          changes to our information practices. Any changes will be effective
          immediately upon the posting of the revised Privacy Policy on the
          Website. If we make any material changes, we will notify You by email
          (sent to the e-mail address specified in Your account) or by means of
          a notice on the Website prior to the change becoming effective. We
          encourage You to periodically review this page for the latest
          information on our privacy practices.
        </p>
        <h2>18. DASHTOON COMMUNICATIONS</h2>
        <h3>18.1 LEGAL AND NOTICES</h3>
        <p>
          To send us any notice or for any legal concerns or in case your
          intellectual property rights have been infringed you may write to us
          at legal@dashtoon.com.
        </p>
        <h3>18.2 CUSTOMER SERVICES</h3>
        <p>
          For any queries /concerns regarding your account and/or its
          termination, payments, coins, business purpose or partnerships etc.
          you may write to us at care@dashtoon.com.
        </p>
        <h3>18.3 GRIEVANCE OFFICER</h3>
        <p>
          In case you have any concerns in relation to the usage and processing
          of your personal information, content which violates our Privacy
          Policy/Terms and Conditions then you may contact our Grievance Officer
          at below:<br></br>
          <br></br>
          Name: Sanidhya Narain<br></br>
          <br></br>
          Address: 6 Braconhyrst, Roxborough Park, Harrow, Greater London -
          HA13BD
          <br></br>
          <br></br>
          Hours: 10:00 A.M. to 1:00 P.M. GMT<br></br>
          <br></br>
          Email: sanidhya@dashtoon.com<br></br>
          <br></br>
        </p>
        <h2>California Consumer Privacy Act (CCPA) Addendum</h2>
        <p>
          If You are a User in California, this Addendum applies to you. Except
          as otherwise modified by this CCPA Addendum, all provisions of the
          above Privacy Policy shall remain in full force and effect.
        </p>
        <h3>1. Your rights under the CCPA:</h3>
        <p>
          Under the CCPA, you have the right to:<br></br>
          <br></br>
          <b>1.1 Access</b> the categories and specific pieces of personal data
          Dashtoon has collected, the categories of sources from which the
          personal data is collected, the business purpose(s) for collecting the
          personal data, and the categories of third parties with whom Dashtoon
          has shared personal data;<br></br>
          <br></br>
          <b>1.2 Delete</b> personal data under certain circumstances; and
          <br></br>
          <br></br>
          <b>1.3 Opt out of the “sale</b> of personal data. We do not sell your
          personal data in the conventional sense. However, like many companies,
          we use advertising services that try to tailor online ads to your
          interests based on information collected via cookies and similar
          technologies about your online activity. This is called interest-based
          advertising. The CCPA’s statutory definition of the term “sale” is
          broad and may include interest-based advertising<br></br>
          <br></br>
          <b>1.4</b> Dashtoon will not discriminate against you and/or charge
          you for exercising any of these rights, which is further in line with
          your rights under the CCPA. Dashtoon is not obliged to respond to more
          than two requests within a 12-month period.<br></br>
          <br></br>
          <b>1.5</b> To exercise your rights, contact us by emailing at the
          E-mail ID mentioned in Section 18.2 (Customer Services). To opt out of
          the use of cookies on our sites for interest-based advertising
          purposes, follow the instructions in this Privacy Policy.<br></br>
          <br></br>
          <b>1.6</b> We will acknowledge receipt of your request within 3
          (three) business days, and provide a substantive response within 45
          (forty five) business days, or inform you of the reason and extension
          period (up to 90 (ninety) days) in writing.<br></br>
          <br></br>
          <b>1.7</b> Under the CCPA, only you or an authorized agent may make a
          request related to your personal data. Note that to respond to your
          requests to access or delete personal data under the CCPA, we must
          verify your identity. We may do so by requiring you to log into your
          Dashtoon account (if applicable), provide information relating to your
          account (which will be compared to information we have, such as
          profile information), give a declaration as to your identity under
          penalty of perjury, and/or provide additional information. You may
          designate an authorized agent to submit your verified consumer request
          by providing written permission and verifying your identity, or
          through proof of power of attorney.<br></br>
          <br></br>
        </p>
        <h2>2. California’s Shine the Light Law</h2>
        <p>
          If You are a User in Virginia, this Addendum applies to you. Except as
          otherwise modified by this VCDPA Addendum, all provisions of the above
          Privacy Policy shall remain in full force and effect.
        </p>
        <h3>1. Your rights under the VCDPA:</h3>
        <p>
          Under the VCDPA, you have the right to:<br></br>
          <br></br>
          <b>1.1 Access</b> personal data that a business processes about you;
          <br></br>
          <br></br>
          <b>1.2 Correct inaccuracies</b> in that data, taking into account the
          nature of the data and the purpose of the processing;<br></br>
          <br></br>
          <b>1.3 Delete</b> personal data provided or obtained about you,
          subject to certain exceptions laid out in the VCDPA;<br></br>
          <br></br>
          <b>1.4 Obtain a copy</b> of your personal data that they previously
          provided to Dashtoon in a portable and, to the extent technically
          feasible, readily usable format;<br></br>
          <br></br>
          <b>1.5 Opt-out</b> of processing for targeted advertising, the sale of
          personal data, or profiling in furtherance of decisions that produce
          legal or similarly significant effects concerning you;<br></br>
          <br></br>
          <b>1.6</b> Dashtoon will not discriminate against you and/or charge
          you for exercising any of these rights, which is further in line with
          your rights under the VCDPA. You may request up to twice annually and
          after that if Dashtoon is satisfied that the request is manifestly
          unfounded, excessive, or repetitive, Dashtoon may charge you a
          reasonable fee to cover the administrative costs of complying with the
          request or decline to act on the request.<br></br>
          <br></br>
          <b>1.7</b> To exercise your rights, contact us by emailing at the
          E-mail ID mentioned in Section 18.2 (Customer Services). To opt out of
          the use of cookies on our sites for interest-based advertising
          purposes, follow the instructions in this Privacy Policy.<br></br>
          <br></br>
          <b>1.8</b> We will acknowledge receipt of your request within 3
          (three) business days, and provide a substantive response within 45
          calendar days, or inform you of the reason and extension period (up to
          90 days) in writing.<br></br>
          <br></br>
          <b>1.9</b> In the event that you are dissatisfied by the decision, you
          may appeal within 15 (fifteen) days. We will acknowledge receipt of
          your request within 3 (three) business days and provide a substantive
          response within 60 business days. In the event that Dashtoon does not
          wish to entertain the appeal by the you, you have the right to
          approach the Attorney General of Virginia.<br></br>
          <br></br>
        </p>
        <h2>Colorado Privacy Act (CPA)</h2>
        <p>
          If You are a User in Colorado, this Addendum applies to you. Except as
          otherwise modified by this Addendum, all provisions of the above
          Privacy Policy shall remain in full force and effect.
        </p>
        <h3>1. Your rights under the CPA:</h3>
        <p>
          Under the CPA, you have the right to:
          <b>1.1 Access</b> personal data that a business processes about you;
          <br></br>
          <br></br>
          <b>1.2 Correct inaccuracies</b> in that data, taking into account the
          nature of the data and the purpose of the processing;<br></br>
          <br></br>
          <b>1.3 Delete</b> personal data provided or obtained about you,
          subject to certain exceptions<br></br>
          <br></br>
          <b>1.4 Obtain a copy</b> of your personal data that they previously
          provided to Dashtoon in a portable and, to the extent technically
          feasible, readily usable format;<br></br>
          <br></br>
          <b>1.5 Opt-out</b> of processing for targeted advertising, the sale of
          personal data, or profiling in furtherance of decisions that produce
          legal or similarly significant effects concerning you;<br></br>
          <br></br>
          <b>1.6</b> Dashtoon shall not discriminate against you for exercising
          any of these rights, which is further in line with your rights under
          the CPA. After the first request, Dashtoon may charge such amount as
          may be required to process such requests;<br></br>
          <br></br>
          <b>1.7</b> To exercise your rights, contact us by emailing at the
          E-mail ID mentioned in Section 18.2 (Customer Services). . To opt out
          of the use of cookies on our sites for interest-based advertising
          purposes, follow the instructions in this Privacy Policy.<br></br>
          <br></br>
          <b>1.8</b> We will acknowledge receipt of your request within 3
          (three) business days, and provide a substantive response within 45
          (forty five) calendar days, thereafter you shall have the right to
          appeal within 15 (fifteen) business days.<br></br>
          <br></br>
          <b>1.9</b> On receipt of your appeal, Dashtoon shall provide a
          substantive response within 45 (forty-five) calendar days or inform
          you of the reason and extension period of an additional 60 (sixty)
          days (total up to 105 (one hundred and five) days) in writing. In the
          event that you are dissatisfied, you have the right to approach the
          Attorney General of Colorado.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
