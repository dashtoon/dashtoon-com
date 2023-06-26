import React, { useEffect } from 'react';
import Footer from '../../Components/Footer/Footer';
import './BugBounty.css';

const BugBounty = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <>
      <div className='bug-bounty-container'>
        <h1>Bug Bounty</h1>
        <h2>Policy</h2>
        <p>
          Dashtoon is on a mission to re-invent how comics creation and
          consumption, using generative AI technology. We want to disrupt and
          expand the creator economy around comic creation. Our vision sets us
          on a path to being the best in AI research, product design, content
          creation, and building the most innovative creator community.
          <br></br>
          <br></br>
          Dashtoon welcomes security researchers to submit vulnerabilities in an
          ethical/responsible manner. Security researchers can send security
          vulnerabilities at email handle soc@dashtoon.com
          <br></br>
        </p>
        <h2>Program Rules</h2>
        <p>
          By participating in the Dashtoon bug bounty program, you agree to
          provide reports with sufficient detail and reproducible steps. If the
          report is not detailed enough to reproduce the issue, the issue will
          not be eligible for a reward. Submit one vulnerability per the report,
          unless you need to chain vulnerabilities to provide impact.When
          duplicates occur, we only award the first report that was received
          (provided that it can be fully reproduced).Multiple vulnerabilities
          caused by one underlying issue will be awarded one bounty.Social
          engineering (e.g. phishing, vishing, smishing) is prohibited. Make a
          good faith effort to avoid privacy violations, destruction of data, or
          interruption or degradation of our service. Dashtoon employees are not
          permitted to participate in this bug bounty program. In case of any
          privacy violations, destruction of data or interruption or degradation
          of data or any breach of the terms and conditions of this bug bounty
          program, Dashtoon reserves its right to take appropriate action and /
          or report to regulatory authorities. Further no person or entity which
          has any form of pending criminal cases shall be eligible to
          participate in the program. Dashtoon shall be entitled to seek
          necessary information / documents / declaration in this regard before
          disbursal of bug bounty rewards.
        </p>
        <h2>Response Targets</h2>
        <p>
          Dashtoon will make the best effort to meet the following service level
          agreement (SLAs) for hackers participating in our program:
        </p>
        <h3>‍Type of Response (SLA in business days)</h3>
        <p>
          First Response - 2 days <br></br> Time to Triage - 3 days <br></br>{' '}
          Time to Bounty -14 days <br></br> Time to Resolution - depends on
          severity and complexity
          <br></br>
          <br></br>
          We’ll do our best to keep you informed about our progress throughout
          the process.
        </p>
        <h2>Scope</h2>
        <p>
          The current scope is limited to: <br></br> dashtoon.com <br></br>{' '}
          studio.dashtoon.ai <br></br>
          Dashtoon Android/iOS application
        </p>
        <h2>Rewards Structure</h2>
        <p>
          <b>Low</b> upto INR 5,000 <br></br> ‍<b>Medium</b> upto INR 10,000{' '}
          <br></br>
          <b>‍High</b> upto INR 30,000 <br></br>‍<b>Critical</b> upto INR 60,000
          <br></br>
          <br></br>
          By default, we categorise reports with the CVSS v3.0 calculator.
          However, we may increase or decrease the severity given by the
          calculator, as for certain types of vulnerabilities, the calculator
          score does not reflect the reality very well. We shall endeavour to
          define and pay bounties within 30 days after verifying the severity of
          the issue, or when the issue is resolved.
        </p>
        <h2>Program Access Requirements</h2>
        <p>
          While doing security assessment, we request all researchers to append
          below headers in requests: X-Dashtoon-BugBounty: [your email address]
        </p>
        <h2>Out of scope vulnerabilities</h2>
        <p>
          The following issues are considered out of scope: ‍<br></br>
          <br></br>
          Clickjacking on pages with no sensitive actions <br></br>
          Cross-Site Request Forgery (CSRF) on unauthenticated forms or forms
          with no sensitive actions <br></br>
          Attacks requiring MITM or physical access to a user's device <br></br>
          Previously known vulnerable libraries without a working Proof of
          Concept <br></br>
          Comma Separated Values (CSV) injection without demonstrating a
          vulnerability <br></br>
          Missing best practices in SSL/TLS configuration Any activity that
          could lead to the disruption of our service (DoS) <br></br>
          Content spoofing and text injection issues without showing an attack
          vector/without being able to modify HTML/CSS <br></br>
          Rate limiting or brute force issues on non-authentication endpoints{' '}
          <br></br>
          Missing best practices in Content Security Policy <br></br>
          Missing HttpOnly or Secure flags on cookies <br></br>
          Missing email best practices (Invalid, incomplete or missing
          SPF/DKIM/DMARC records, etc.) <br></br>
          Vulnerabilities only affecting users of outdated or unpatched browsers
          [Less than 2 stable versions behind the latest released stable
          version] <br></br>
          Software version disclosure / Banner identification issues /
          Descriptive error messages or headers (e.g. stack traces, application
          or server errors) <br></br>
          Public Zero-day vulnerabilities that have had an official patch for
          less than 1 month will be awarded on a case by case basis. <br></br>
          Tabnabbing <br></br>
          Open redirect - unless an additional security impact can be
          demonstrated <br></br>
          Issues that require unlikely user interaction e.g. installing the
          malicious app into a user’s device.
        </p>
        <h2>Prohibited Activities</h2>
        <p>
          DDoS <br></br>
          Gaining access to user accounts and modifying the information is
          strictly prohibited. You should always use your own user accounts
          across Dashtoon to showcase/find the vulnerability. Refrain from
          testing on any user account which doesn’t belong to you. <br></br>
          Don’t dump any information of users/sellers using a vulnerability that
          has been discovered.
        </p>
        <h2>Disclosure Policy</h2>
        <p>
          We don’t allow public disclosures. Please get written permission from
          our team before any disclosure. Public disclosures are at Dashtoon's
          discretion only.
        </p>
        <h2>Suggestions</h2>
        <p>
          ‍Have suggestions about this policy? Send us a note on swith the
          subject “Suggestion on bug bounty program”. Suggestions on the reward
          amounts will be ignored. Anything else is gladly welcomed.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default BugBounty;
