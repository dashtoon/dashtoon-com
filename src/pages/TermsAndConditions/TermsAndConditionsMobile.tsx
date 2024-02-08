import React, {useEffect, useState} from 'react';
import Footer from '../../Components/FooterWeb';
import './TermsAndConditions.css';
import FooterMobile from "../../Components/FooterMobile";
import NavbarMobile from "../../Components/NavbarMobile";
import NavbarWeb from "../../Components/NavbarWeb";

const TermsAndConditionsMobile = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    return (
        <>
            <div className='terms-and-conditions-container '>
                <div style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
                    <NavbarMobile></NavbarMobile>
                </div>
                <h1>Terms-and-conditions</h1>
                <h2>END USER LICENSE AGREEMENT AND TERMS OF USE</h2>
                <p>
                PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING THE SERVICES
                    OFFERED BY DASHTOON (WHICH TERM SHALL INCLUDE DASHVERSE CORP AND/OR
                    ANY OF ITS AFFILIATES). THESE TERMS OF USE SET FORTH THE LEGALLY
                    BINDING TERMS AND CONDITIONS FOR YOUR USE OF THE WEBSITE AT
                    https://www.dashtoon.com ("THE SITE") AND THE SERVICES, FEATURES,
                    CONTENT, APPLICATIONS OR WIDGETS OFFERED BY DASHTOON (INCLUDING THE
                    SITE, <b>"SERVICE"</b>).
                </p>
                <h3>Acceptance of Terms</h3>
                <p>
                    By registering for and/or using the Service in any manner, including
                    but not limited to visiting or browsing the Site, you agree to all of
                    the terms and conditions contained herein ("Terms of Use") and all
                    other operating rules, policies and procedures that may be published
                    from time to time on the Site by Dashtoon, each of which is
                    incorporated by reference and each of which may be updated by Dashtoon
                    from time to time without notice to you in accordance with the terms
                    set out under the "Modification of Terms of Use" section below. In
                    addition, some services offered through the Service may be subject to
                    additional terms and conditions specified by Dashtoon from time to
                    time; your use of such services is subject to those additional terms
                    and conditions, which are incorporated into these Terms of Use by this
                    reference. These Terms of Use apply to all users of the Service,
                    including, without limitation, users who are contributors of content,
                    information, and other materials or services on the Site, individual
                    users of the Service, venues that access the Service, and users that
                    have a page on the Service.
                </p>
                <h3>Access</h3>
                <p>
                    Subject to these Terms of Use, Dashtoon may offer to provide the
                    Service, as described more fully on the Site, and which are selected
                    by you, solely for your own use, and not for the use or benefit of any
                    third party. Services shall include, but not be limited to, any
                    services Dashtoon performs for you, any applications or widgets
                    offered by Dashtoon that you download from the Site or, subject to the
                    terms set out under the "Third party Sites and Services" section
                    below, from third party application stores (e.g., iTunes® store, or
                    Google Apps Marketplace) authorized by Dashtoon, as well as the
                    offering of any materials displayed or performed on or through the
                    Services (including Content (as defined below)).
                </p>
                <h3>Registration and Eligibility</h3>
                <p>
                    You are required to register with Dashtoon to browse the Site and view
                    Content and represent, warrant and covenant that you provide Dashtoon
                    with accurate and complete registration information (including, but
                    not limited to a user name (<b>"User Name"</b>), e-mail address and/or
                    mobile telephone number and a password you will use to access the
                    Service) and to keep your registration information accurate and
                    up-to-date. Failure to do so shall constitute a breach of these Terms
                    of Use, which may result in immediate termination of your Dashtoon
                    account. We recommend, but do not require, that you use your own name
                    as your User Name so your friends can recognize you more easily. You
                    shall not:
                    <br></br>
                    <br></br>
                    <ul>
                        <li>
                            Create any account for anyone other than yourself without such
                            person's permission
                        </li>
                        <li>
                            Use a username that is the name of another person with the intent
                            to impersonate that person
                        </li>
                        <li>
                            Use a username or Dashtoon account that is subject to any rights
                            of a person other than you without appropriate authorization
                        </li>
                        <li>
                            Use a username that is a name that is otherwise offensive, vulgar
                            or obscene or otherwise unlawful
                        </li>
                    </ul>
                    Dashtoon reserves the right to refuse registration of, or cancel a
                    User Name in its sole discretion. You are solely responsible and
                    liable for activity that occurs on your account and shall be
                    responsible for maintaining the confidentiality of your Dashtoon
                    password. You shall never use another user's account without such
                    other user's prior express permission. You will immediately notify
                    Dashtoon in writing of any unauthorized use of your account, or other
                    account related security breach of which you are aware.<br></br>
                    <br></br>
                    You represent and warrant that if you are an individual, you are of
                    legal age to form a binding contract, or that if you are registering
                    on behalf of an entity, that you are authorized to enter into, and
                    bind the entity to, these Terms of Use and register for the Service.
                    The Service is not available to individuals who are younger than 13
                    years old and in no event, to individuals who are not competent to
                    contract as per the laws applicable in their jurisdiction. If you are
                    a minor, you agree to access the Service only under the supervision of
                    your parent or guardian. Dashtoon may, in its sole discretion, refuse
                    to offer the Service to any person or entity and change its
                    eligibility criteria at any time.<br></br>
                    <br></br>
                    You are solely responsible for ensuring that these Terms of Use are in
                    compliance with all laws, rules and regulations applicable to you and
                    the right to access the Service is revoked where these Terms of Use or
                    use of the Service is prohibited and, in such circumstances, you agree
                    not to use or access the Site or Services in any way.<br></br>
                    <br></br>
                    If you use a mobile device, please be aware that your carrier's normal
                    rates and fees, such as text messaging and data charges, will still
                    apply. In the event you change or deactivate your mobile telephone
                    number, you agree that you will update your account information on the
                    Services within 48 hours to ensure that your messages are not sent to
                    the person who acquires your old number.<br></br>
                    <br></br>
                </p>
                <h3>Content</h3>
                <p>
                    All Content, whether publicly posted or privately transmitted, is the
                    sole responsibility of the person who originated such Content.
                    Dashtoon cannot guarantee the authenticity of any Content or data
                    which users may provide about themselves. You acknowledge that all
                    Content accessed by you using the Service is at your own risk and you
                    will be solely responsible and liable for any damage or loss to you or
                    any other party resulting therefrom. For purposes of these Terms of
                    Use, the term "Content" includes, without limitation, any location
                    information, webcomics, and digitized comic books, including single
                    issues and trade publications, ‘highlights’, video clips, audio clips,
                    comics, animation, responses, information, data, text, photographs,
                    software, scripts, graphics, and interactive features generated,
                    provided, or otherwise made accessible by Dashtoon on or through the
                    Service. Content added, created, uploaded, submitted, distributed,
                    posted or otherwise obtained through the Service by users, including
                    Content that is added to the Service in connection with users linking
                    their accounts to third party websites and services, is collectively
                    referred to as, "<b>User Submissions</b>".
                </p>
                <h3>Dashtoon Content</h3>
                <p>
                    The Service may contain Content specifically provided by Dashtoon or
                    its partners and such Content is protected by copyrights, trademarks,
                    service marks, patents, trade secrets or other proprietary rights and
                    laws, as applicable. You shall abide by and maintain all copyright
                    notices, information, and restrictions contained in any Content
                    accessed through the Service.<br></br>
                    <br></br>
                    Subject to these Terms of Use, Dashtoon grants each user of the Site
                    and/or Service a worldwide, non-exclusive, non-sub licensable and
                    non-transferable license to access and view /listen to the Content,
                    solely for personal, non-commercial use. Use, reproduction,
                    modification, distribution or storage of any Content for other than
                    personal, non-commercial use is expressly prohibited without prior
                    written permission from Dashtoon, or from the copyright holder
                    identified in such Content's copyright notice, as applicable. You
                    shall not sell, license, rent, or otherwise use or exploit any Content
                    for commercial (whether or not for profit) use or in any way that
                    violates any third party right.<br></br>
                    <br></br>
                    The Content will be made available to you through different modes, at
                    Dashtoon’s discretion, for viewing at your discretion at a time chosen
                    by you and download for offline access by You. In the case of
                    downloadable Content, please note that: (a) the downloads are
                    temporary in order to allow you to access the Content within a
                    specified period of time and you shall not attempt to or actually make
                    a permanent copy of the Content in any manner or form, and (b) not all
                    Content may be available for download for offline access. Please note
                    that the availability of, and Your ability to access, the Content or
                    some part of Services, (a) is subject to Dashtoon’s sole discretion
                    and (b) may be dependent upon your geographical location and (c) is on
                    the condition that not all Content or Services will be available to
                    all viewers. On account of the nature of the Internet, this Site and
                    the Services may also be accessed in various geographical locations;
                    and you hereby agree and acknowledge that you are accessing this Site
                    and availing of the Services, at your own risk, choice and initiative
                    and you agree and undertake to ensure that your use of the Site and
                    the Services complies with all applicable laws including the local
                    laws in your jurisdiction. Further, such Services and Content may vary
                    from place to place, time to time and device to device and would be
                    subject to various parameters such as specifications, device, internet
                    availability and speed, bandwidth, etc. You agree and acknowledge that
                    Dashtoon may monitor or use certain technologies for monitoring of
                    activities, as separately explained in Dashtoon’s Privacy Policy
                    accessible at https://www.dashtoon.com/privacy-policy. To facilitate
                    your listening and access, the Services can be packaged by Dashtoon
                    through different models such as (a) free of charge which may include
                    advertisements or commercials or (b) a pay-per-view model with or
                    without advertisements/commercials or (c) with a combination of the
                    foregoing on the Site. Note that some Content, when accessed, will
                    show advertisements even in the pay-per-view model.<br></br>
                    <br></br>
                </p>
                <h3>Payments</h3>
                <p>
                    Some of the Content made available on the Site can be availed only by
                    registered users ("**Premium User**") who opt to pay for such Content
                    using one or more Payment Method(s). To become a Premium User, you may
                    be required to provide certain personal information to Dashtoon and
                    may be required to make payments of the applicable charges ("**Premium
                    Charges**") through a debit card, credit card, internet banking or
                    through, e- prepaid wallet or other payment method accepted by
                    Dashtoon ("**Payment Method(s)**") that you opted for during
                    registration. Dashtoon will be using third party payment gateways to
                    process and facilitate the payment of your Premium Charges.<br></br>
                    <br></br>
                    Dashtoon shall have the discretion to make Content available to you on
                    not more than one end user device concurrently.<br></br>
                    <br></br>
                    Any personal data whether provided by you as a part of the payments
                    process, or collected automatically when you use the Service will be
                    governed by Dashtoon’s Privacy Policy accessible
                    at https://www.dashtoon.com/privacy-policy.<br></br>
                    <br></br>
                    You also understand and acknowledge that Dashtoon only facilitates the
                    third-party payment gateway for processing of payments. This facility
                    is managed by the third-party payment gateway provider and you are
                    required to follow all the terms and conditions of such third-party
                    payment gateway provider.<br></br>
                    <br></br>
                    You are responsible for the accuracy and authenticity of the payment
                    information provided by you, including the bank account number/credit
                    card details and any other information requested during the payment
                    process. You represent and warrant that you have the right to use any
                    credit card or other payment information that you submit. You agree
                    and acknowledge that Dashtoon shall not be liable and in no way be
                    held responsible for any losses whatsoever, whether direct, indirect,
                    incidental or consequential, including without limitation any losses
                    due to delay in processing of payment instruction or any credit card
                    fraud.
                    <br></br>
                    <br></br>
                    You can file any complaint related to payment processing on the Site
                    and the same will be forwarded to the concerned third-party payment
                    gateway provider for redressal.<br></br>
                    <br></br>
                    Upon payment being received by Dashtoon through any of the Payment
                    Methods, Dashtoon shall make the relevant Content available to you
                    through any of the approved modes of delivery that Dashtoon adopts.
                    <br></br>
                    <br></br>
                    Dashtoon reserves the right to change, terminate or otherwise amend
                    the Content pricing, at its sole discretion and at any time. Such
                    amendments shall be effective upon posting on the Site and your
                    continued use of the Service shall be deemed to be your conclusive
                    acceptance of such amendments<br></br>
                    <br></br>
                    Dashtoon reserves the right to change, supplement, alter or remove any
                    of the Content as it deems fit. Dashtoon does not guarantee the
                    availability of specific Content or a minimum Content.<br></br>
                    <br></br>
                </p>
                <h3>Shipping, Returns and Refunds policy</h3>
                <p>
                    To the extent permitted by applicable law, payments are non-refundable
                    and we do not provide refunds or credits for any partial membership
                    period or unused Content. Please visit the ‘My Accounts’ section to
                    cancel your subscription at any time. Since our Content is provided
                    digitally, the same is deemed to be delivered or ‘used’ when you avail
                    of a subscription. We do not offer shipping or returns on our Content.
                </p>
                <h3>User Submissions</h3>
                <p>
                    We may use your User Submissions in a number of different ways in
                    connection with the Site, Service and Dashtoon’s business as Dashtoon
                    may determine in its sole discretion, including but not limited to,
                    publicly displaying it, reformatting it, incorporating it into
                    marketing materials, advertisements and other works, creating
                    derivative works (including adaptations) from it, promoting it,
                    distributing it, and allowing other users to do the same in connection
                    with their own websites, media platforms, and applications ("**Third
                    Party Media**"). By submitting User Submissions on the Site or
                    otherwise through the Service, you hereby do and shall grant Dashtoon
                    a worldwide, non- exclusive, royalty-free, fully paid, sub licensable
                    and transferable license to use, copy, edit, modify, reproduce,
                    distribute, adapt, translate, prepare derivative works of, display,
                    perform, and otherwise fully exploit the User Submissions in
                    connection with the Site, the Service and Dashtoon's (and its
                    successors and assigns') business, including without limitation for
                    promoting and redistributing part or all of the Site (and derivative
                    works thereof) or the Service in any media formats and through any
                    media channels (including, without limitation, third party websites
                    and feeds). You also hereby do and shall grant each user of the Site
                    and/or the Service, including Third Party Media, a non-exclusive
                    license to access your User Submissions through the Site and the
                    Service, and to use, edit, modify, reproduce, distribute, prepare
                    derivative works of, display and perform such User Submissions in
                    connection with their use of the Site, Service and Third Party Media.
                    For clarity, the foregoing license grant to Dashtoon does not affect
                    your other ownership or license rights in your User Submission(s),
                    including the right to grant additional licenses to the material in
                    your User Submission(s), unless otherwise agreed in writing with
                    Dashtoon.<br></br>
                    <br></br>
                    You represent and warrant that you have all rights to grant such
                    license to us without infringement or violation of any third party
                    rights, including without limitation, any privacy rights, publicity
                    rights, copyrights, contract rights, or any other intellectual
                    property or proprietary rights.<br></br>
                    <br></br>
                    You understand that all information publicly posted or privately
                    transmitted through the Site is the sole responsibility of the person
                    from which such Content originated; that Dashtoon will not be liable
                    for any errors or omissions in any Content; and that Dashtoon cannot
                    guarantee the identity of any other users with whom you may interact
                    in the course of using the Service.<br></br>
                    <br></br>
                    You should be aware that the opinions expressed in the Content in User
                    Submissions are theirs alone and do not reflect the opinions of
                    Dashtoon. Dashtoon is not responsible for the accuracy of any of the
                    information supplied in User Submissions or in relation to any
                    comments that are posted.<br></br>
                    <br></br>
                    You should bear in mind that circumstances change and that information
                    that may have been accurate at the time of posting will not
                    necessarily remain so.<br></br>
                    <br></br>
                    When you delete your User Submissions, they will be removed from the
                    Service. However, you understand that any removed User Submissions may
                    persist in backup copies for a reasonable period of time (but
                    following removal will not be shared with others) or may remain with
                    users who have previously accessed or downloaded your User
                    Submissions.<br></br>
                    <br></br>
                </p>
                <h3>Rules and Conduct</h3>
                <p>
                    As a condition of use, you promise not to use the Service for any
                    purpose that is prohibited by these Terms of Use. You are responsible
                    for all of your activity in connection with the Service.<br></br>
                    <br></br>
                    Additionally, you shall abide by all applicable local, state, national
                    and international laws and regulations and, if you represent a
                    business, any advertising, marketing, privacy, or other
                    self-regulatory code(s) applicable to your industry.<br></br>
                    <br></br>
                    By way of example, and not as a limitation, you shall not (and shall
                    not permit any third party to) either (a)take any action or (b)upload,
                    download, post, submit or otherwise distribute or facilitate
                    distribution of any Content on or through the Service, including
                    without limitation any User Submission, that:<br></br>
                    <br></br>
                    <ul>
                        <li>
                            belongs to another person and to which the user does not have any
                            right;
                        </li>
                        <li>
                            is defamatory, obscene, pornographic, paedophilic, invasive of
                            another’s privacy, including bodily privacy, insulting or
                            harassing on the basis of gender, libellous, racially or
                            ethnically objectionable, relating or encouraging money laundering
                            or gambling, or otherwise inconsistent with or contrary to the
                            laws in force;
                        </li>
                        <li>is harmful to child;</li>
                        <li>
                            infringes any patent, trademark, copyright or other proprietary
                            rights;
                        </li>
                        <li>violates any law for the time being in force;</li>
                        <li>
                            deceives or misleads the addressee about the origin of the message
                            or knowingly and intentionally communicates any information which
                            is patently false or misleading in nature but may reasonably be
                            perceived as a fact;
                        </li>
                        <li>impersonates another person;</li>
                        <li>
                            threatens the unity, integrity, defence, security or sovereignty
                            of the United States of America, friendly relations with foreign
                            states, or public order, or causes incitement to the commission of
                            any cognizable offence or prevents investigation of any offence or
                            is insulting other nation;
                        </li>
                        <li>
                            contains software virus or any other computer code, file or
                            program designed to interrupt, destroy or limit the functionality
                            of any computer resource;
                        </li>
                        <li>
                            is patently false and untrue, and is written or published in any
                            form, with the intent to mislead or harass a person, entity or
                            agency for financial gain or to cause any injury to any person.
                        </li>
                    </ul>
                    Dashtoon does not guarantee that any Content or User Submissions (as
                    defined above) will be made available on the Site or through the
                    Service. Dashtoon has no obligation to monitor the Site, Service,
                    Content, or User Submissions. However, Dashtoon reserves the right to
                    (i) remove, suspend, edit or modify any Content in its sole
                    discretion, including without limitation any User Submissions at any
                    time, without notice to you and for any reason (including, but not
                    limited to, upon receipt of claims or allegations from third parties
                    or authorities relating to such Content or if Dashtoon is concerned
                    that you may have violated these Terms of Use), or for no reason at
                    all and (ii) to remove, suspend or block any User Submissions from the
                    Service. Dashtoon also reserves the right to access, read, preserve,
                    and disclose any information as Dashtoon reasonably believes is
                    necessary to (i) satisfy any applicable law, regulation, legal process
                    or governmental request, (ii) enforce these Terms of Use, including
                    investigation of potential violations hereof, (iii) detect, prevent,
                    or otherwise address fraud, security or technical issues, (iv) respond
                    to user support requests, or (v) protect the rights, property or
                    safety of Dashtoon, its users and the public.If you see something
                    inappropriate, use the "Report Content" option to alert us so that we
                    can take immediate action as needed.
                </p>
                <h3>Technical Failures</h3>
                <p>
                    It is possible that you may face disruptions, including, but not
                    limited to errors, disconnections or interferences in communication in
                    the internet services, software or hardware that you have used to
                    avail our services. Dashtoon is not responsible for such factors in
                    the disruption or interruption in the services and you take full
                    responsibility with complete knowledge for any risk of loss or damages
                    caused due to interruption of services for any such reasons.
                </p>
                <h3>Advertisements, Third Party Sites and Services</h3>
                <p>
                    Some of the Dashtoon Services are supported by advertising revenue and
                    may display advertisements, promotions, and links to third-party
                    websites. You hereby agree that Dashtoon may place such advertising
                    and promotions on the Dashtoon Services or on, about, or in
                    conjunction with your Content, including User Submissions. The manner,
                    mode and extent of such advertising and promotions are subject to
                    change without specific notice to you.<br></br>
                    <br></br>
                    The Service may permit you to link to other websites, services or
                    resources on the Internet, and other websites, services or resources
                    may contain links to the Site. When you access third party websites,
                    you do so at your own risk. These other websites are not under
                    Dashtoon’s control, and you acknowledge that Dashtoon is not
                    responsible or liable for the content, functions, accuracy, legality,
                    appropriateness or any other aspect of such websites or resources. The
                    inclusion of any such link does not imply endorsement by Dashtoon or
                    any association with its operators. You further acknowledge and agree
                    that Dashtoon shall not be responsible or liable, directly or
                    indirectly, for any damage or loss caused or alleged to be caused by
                    or in connection with the use of or reliance on any such Content,
                    goods or services available on or through any such website or
                    resource.<br></br>
                    <br></br>
                </p>
                <h3>Termination</h3>
                <p>
                    Dashtoon may terminate your access to all or any part of the Service
                    at any time, with or without cause, with or without notice, effective
                    immediately, which may result in the forfeiture and destruction of all
                    information associated with your membership. If you wish to terminate
                    your account, you may do so by contacting us as per Dashtoon’s
                    Communications – Customer Services mentioned below. Any fees,
                    including Premium Charges, paid hereunder are non-refundable. All
                    provisions of these Terms of Use which by their nature should survive
                    termination shall survive termination, including, without limitation,
                    ownership provisions, warranty disclaimers, indemnity and limitations
                    of liability.
                </p>
                <h3>Warranty Disclaimer</h3>
                <p>
                    Save to the extent required by law, Dashtoon has no special
                    relationship with or fiduciary duty to you. You acknowledge that
                    Dashtoon has no control over, and no duty to take any action
                    regarding: which users gain access to the Service; what Content you
                    access via the Service; what effects the Content may have on you; how
                    you may interpret or use the Content; or what actions you may take as
                    a result of having been exposed to the Content.<br></br>
                    <br></br>
                    You release Dashtoon from all liability for you having acquired or not
                    acquired Content through the Service. The Service may contain, or
                    direct you to websites containing, information that some people may
                    find offensive or inappropriate. Dashtoon makes no representations
                    concerning any Content contained in or accessed through the Service,
                    and Dashtoon will not be responsible or liable for the accuracy,
                    copyright compliance, legality or decency of material contained in or
                    accessed through the Service and cannot be held liable for any
                    third-party claims, losses or damages.<br></br>
                    <br></br>
                    You release us from all liability relating to your connections and
                    relationships with other users. You understand that we do not, in any
                    way, screen users, nor do we inquire into the backgrounds of users or
                    attempt to verify their backgrounds or statements. We make no
                    representations or warranties as to the conduct of users or the
                    veracity of any information users provide. In no event shall we be
                    liable for any damages whatsoever, whether direct, indirect, general,
                    special, compensatory, consequential, and/or incidental, arising out
                    of or relating to the conduct of you or anyone else in connection with
                    the Services, including, without limitation, bodily injury, emotional
                    distress, and any damages resulting in any way from communications or
                    meetings with users or persons you may otherwise meet through the
                    Services. As such, you agree to take reasonable precautions and
                    exercise the utmost personal care in all interactions with any
                    individual you come into contact with through the Services,
                    particularly if you decide to meet such individuals in person. For
                    example, you should not, under any circumstances, provide your
                    financial information (e.g., credit card or bank account numbers) to
                    other individuals.<br></br>
                    <br></br>
                    THE SITE, SERVICE AND CONTENT ARE PROVIDED "AS IS", "AS AVAILABLE" AND
                    ARE PROVIDED WITHOUT ANY REPRESENTATIONS OR WARRANTIES OF ANY KIND,
                    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
                    WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR
                    A PARTICULAR PURPOSE, AND ANY WARRANTIES IMPLIED BY ANY COURSE OF
                    PERFORMANCE OR USAGE OF TRADE, ALL OF WHICH ARE EXPRESSLY DISCLAIMED,
                    SAVE TO THE EXTENT REQUIRED BY LAW.<br></br>
                    <br></br>
                    DASHTOON, AND ITS TEAM, DIRECTORS, EMPLOYEES, AGENTS, REPRESENTATIVES,
                    SUPPLIERS, PARTNERS AND CONTENT PROVIDERS DO NOT WARRANT THAT: (A) THE
                    SERVICE WILL BE SECURE OR AVAILABLE AT ANY PARTICULAR TIME OR
                    LOCATION; (B) ANY DEFECTS OR ERRORS WILL BE CORRECTED; (C) ANY CONTENT
                    OR SOFTWARE AVAILABLE AT OR THROUGH THE SERVICE IS FREE OF VIRUSES OR
                    OTHER HARMFUL COMPONENTS; OR (D) THE RESULTS OF USING THE SERVICE WILL
                    MEET YOUR REQUIREMENTS. YOUR USE OF THE WEBSITE, SERVICE AND CONTENT
                    IS SOLELY AT YOUR OWN RISK. SOME STATES / COUNTRIES DO NOT ALLOW
                    LIMITATIONS ON IMPLIED WARRANTIES, SO THE ABOVE LIMITATIONS MAY NOT
                    APPLY TO YOU.
                    <br></br>
                    <br></br>
                </p>
                <h3>Indemnification</h3>
                <p>
                    You shall defend, indemnify, and hold harmless Dashtoon, its
                    affiliates and each of its and its affiliates' employees, contractors,
                    directors, suppliers and representatives from all losses, costs,
                    actions, claims, damages, expenses (including reasonable legal costs)
                    or liabilities, that arise from or relate to your use or misuse of, or
                    access to, the Site, Service, Content or otherwise from your User
                    Submissions, violation of these Terms of Use, or infringement by you,
                    or any third party using the your account, of any intellectual
                    property or other rights of any person or entity (save to the extent
                    that a court of competent jurisdiction holds that such claim arose due
                    to an act or omission of Dashtoon). Dashtoon reserves the right to
                    assume the exclusive defense and control of any matter otherwise
                    subject to indemnification by you, in which event you will assist and
                    cooperate with Dashtoon in asserting any available defences.
                </p>
                <h3>Limitation of Liability</h3>
                <p>
                    ALL LIABILITY OF DASHTOON, ITS DIRECTORS, EMPLOYEES, AGENTS,
                    REPRESENTATIVES, PARTNERS, SUPPLIERS OR CONTENT PROVIDERS HOWSOEVER
                    ARISING FOR ANY LOSS SUFFERED AS A RESULT OF YOUR USE THE SITE,
                    SERVICE, CONTENT OR USER SUBMISSIONS IS EXPRESSLY EXCLUDED TO THE
                    FULLEST EXTENT PERMITTED BY LAW, SAVE THAT, IF A COURT OF COMPETENT
                    JURISDICTION DETERMINES THAT LIABILITY OF DASHTOON, ITS DIRECTORS,
                    EMPLOYEES, AGENTS, REPRESENTATIVES, PARTNERS, SUPPLIERS OR CONTENT
                    PROVIDERS (AS APPLICABLE) HAS ARISEN, THE TOTAL OF SUCH LIABILITY
                    SHALL BE LIMITED IN AGGREGATE TO ONE HUNDRED UNITED STATES DOLLARS
                    ($100).<br></br>
                    <br></br>
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
                    DASHTOON, NOR ITS DIRECTORS, EMPLOYEES, AGENTS, REPRESENTATIVES,
                    PARTNERS, SUPPLIERS OR CONTENT PROVIDERS, BE LIABLE UNDER CONTRACT,
                    TORT, STRICT LIABILITY, NEGLIGENCE OR ANY OTHER LEGAL OR EQUITABLE
                    THEORY OR OTHERWISE (AND WHETHER OR NOT DASHTOON, ITS DIRECTORS,
                    EMPLOYEES, AGENTS, REPRESENTATIVES, PARTNERS, SUPPLIERS OR CONTENT
                    PROVIDERS HAD PRIOR KNOWLEDGE OF THE CIRCUMSTANCES GIVING RISE TO SUCH
                    LOSS OR DAMAGE) WITH RESPECT TO THE SITE, SERVICE, CONTENT OR USER
                    SUBMISSIONS FOR:<br></br>
                    <br></br>
                    <ul>
                        <li>INDIRECT OR CONSEQUENTIAL LOSSES OR DAMAGES</li>
                        <li>LOSS OF ACTUAL OR ANTICIPATED PROFITS</li>
                        <li>LOSS OF REVENUE</li>
                        <li>LOSS OF GOODWILL</li>
                        <li>LOSS OF DATA</li>
                        <li>LOSS OF ANTICIPATED SAVINGS</li>
                        <li>WASTED EXPENDITURE</li>
                        <li>COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES</li>
                    </ul>
                    NOTHING IN THESE TERMS OF USE SHALL BE DEEMED TO EXCLUDE OR LIMIT YOUR
                    LIABILITY IN RESPECT OF ANY INDEMNITY GIVEN BY YOU UNDER THESE TERMS
                    OF USE. APPLICABLE LAW MAY NOT ALLOW THE LIMITATION OR EXCLUSION OF
                    LIABILITY OR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE
                    LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU. IN SUCH CASES,
                    DASHTOON’S LIABILITY WILL BE LIMITED TO THE FULLEST EXTENT PERMITTED
                    BY APPLICABLE LAW.
                </p>
                <h3>Governing Law</h3>
                <p>
                    Dashtoon may terminate your access to all or any part of the Service
                    at any time, with or without cause, with or without notice, effective
                    immediately, which may result in the forfeiture and destruction of all
                    information associated with your membership. If you wish to terminate
                    your account, you may do so by contacting us as per Dashtoon’s
                    Communications – Customer Services mentioned below. Any fees,
                    including Premium Charges, paid hereunder are non-refundable. All
                    provisions of these Terms of Use which by their nature should survive
                    termination shall survive termination, including, without limitation,
                    ownership provisions, warranty disclaimers, indemnity and limitations
                    of liability.You agree that all matters relating to the DASHTOON, and
                    the Agreement, and any dispute or claim arising therefrom will be
                    construed in accordance with the laws of the State of Delaware without
                    giving effect to any choice or conflict of law provision or rule. You
                    agree that any legal suit, cause of action or proceeding that may
                    arise out of, or related to this Agreement shall be instituted
                    exclusively In the federal courts of the United States or the courts
                    of the State of Delaware, although we retain the right to bring any
                    suit, action, or proceeding against you for breach of the Agreement in
                    your country of residence or any other relevant country. You waive any
                    and all objections to exercise of jurisdiction over you by such courts
                    and to venue in such courts.<br></br>
                    <br></br>
                    At Company's sole discretion, it may require you to submit any
                    disputes arising from the Agreement, including disputes arising from
                    or concerning their interpretation, violation, invalidity,
                    non-performance, or termination, to final and binding arbitration
                    under the Rules of Arbitration of the American Arbitration Association
                    applying Delaware law. Where permitted under applicable law, you agree
                    that you may bring claims against the Company only in your individual
                    capacity and not as a plaintiff or class member in any purported class
                    or representative action.<br></br>
                    <br></br>
                </p>
                <h3>Integration and Severability</h3>
                <p>
                    These Terms of Use are the entire agreement between you and Dashtoon
                    with respect to the Service and use of the Site, Service, Content or
                    User Submissions, and supersede all prior or contemporaneous
                    communications and proposals (whether oral, written or electronic)
                    between you and Dashtoon with respect to the Site. If any provision of
                    these Terms of Use is found to be unenforceable or invalid, that
                    provision will be limited or eliminated to the minimum extent
                    necessary so that these Terms of Use will otherwise remain in full
                    force and effect and enforceable. The failure of either party to
                    exercise in any respect any right provided for herein shall not be
                    deemed a waiver of any further rights hereunder. Waiver of compliance
                    in any particular instance does not mean that we will waive compliance
                    in the future. In order for any waiver of compliance with these Terms
                    of Use to be binding, Dashtoon must provide you with written notice of
                    such waiver through one of its authorized representatives.
                </p>
                <h3>Modification of Terms of Use</h3>
                <p>
                    Dashtoon reserves the right, at its sole discretion, to modify or
                    replace any of these Terms of Use, or change, suspend, or discontinue
                    the Service (including without limitation, the availability of any
                    feature, database, or content) at any time by posting a notice on the
                    Site or by sending you notice through the Service or via email.
                    Dashtoon may also impose limits on certain features and services or
                    restrict your access to parts or all of the Service without notice or
                    liability. It is your responsibility to check these Terms of Use
                    periodically for changes. Your continued use of the Service following
                    the posting of any changes to these Terms of Use constitutes
                    acceptance of those changes. You shall also be notified of any
                    modifications to these Terms of Use as and when effected or at least
                    once a year.
                </p>
                <h2>Other Provisions</h2>
                <h3>Claims of Copyright or Trademark Infringement</h3>
                <p>
                    Claims of copyright or trademark infringement should be sent to
                    Dashtoon’s designated agent. If you believe that someone is infringing
                    your copyright or trademark rights on Dashtoon, you can report it to
                    us by contacting us as per Dashtoon’s Communications – Legal & Notices
                    mentioned below with a report containing the following information:
                    <ol>
                        <li>
                            your complete contact information (name, mailing address and phone
                            number),
                        </li>
                        <li>
                            A detailed description of the Content on Dashtoon that you claim
                            infringes your copyright or trademark along with details on how it
                            infringes upon your copyright or trademark:
                        </li>
                        <li>The web address (URL) of the infringing content</li>
                        <li>
                            A declaration that you are filing this report in good faith and
                            that all the information provided is accurate and that you are the
                            owner of the copyright and/or trademark:
                        </li>
                    </ol>
                    Please attach your digital signature or physical signature to the
                    report. Within 36 hours of receiving this notice with the above
                    mentioned details, we will take down the allegedly infringing material
                    from public view while we assess the issues identified in your notice.
                    <br></br>
                    <br></br>
                    On completion of the take-down procedure above:
                    <ul>
                        <li>
                            If the complainant is successful in obtaining an order of
                            injunction from a court of competent jurisdiction within 21 days
                            from filing the complaint, the material will be permanently
                            removed from Dashtoon’s website and database upon Dashtoon being
                            provided with a copy of such order;
                        </li>
                        <li>
                            If the complainant is not successful in obtaining an order of
                            injunction from a court of competent jurisdiction within 21 days
                            from receiving notice from the complainant, the material will be
                            made available for public view once again.
                        </li>
                    </ul>
                    Before you submit a report of infringement, you may want to send a
                    message to the person who posted the content. You may be able to
                    resolve the issue without contacting Dashtoon. Please remember, only
                    the copyright/trademark owner or their authorized representative may
                    file a report of infringement. If you believe something on Dashtoon
                    infringes someone else’s copyright/trademark, you may want to let the
                    rights owner know.
                </p>
                <h3>Notice</h3>
                <p>
                    Dashtoon may give notice by means of a general notice on the Services,
                    notification within the Site on your Account, electronic mail to your
                    email address in your Account, or by written communication sent to
                    your address as set forth in your Account. You may give notice to
                    Dashtoon by written communication as per Dashtoon’s Communications –
                    Legal and Notices mentioned below.
                </p>
                <h3>General</h3>
                <p>
                    You may not assign or transfer these Terms of Use in whole or in part
                    without Dashtoon’s prior written approval. You hereby give your
                    approval to Dashtoon for it to assign or transfer these Terms of Use
                    in whole or in part, including to: (i) a subsidiary or affiliate; (ii)
                    an acquirer of Dashtoon’s equity, business or assets; or (iii) a
                    successor by merger. No joint venture, partnership, employment or
                    agency relationship exists between you, Dashtoon or any Third Party
                    Provider as a result of the contract between you and Dashtoon or use
                    of the Services.<br></br>
                    <br></br>
                    If any provision of these Terms of Use is held to be illegal, invalid
                    or unenforceable, in whole or in part, under any law, such provision
                    or part thereof shall to that extent be deemed not to form part of
                    these Terms of Use but the legality, validity and enforceability of
                    the other provisions in these Terms of Use shall not be affected. In
                    that event, the parties shall replace the illegal, invalid or
                    unenforceable provision or part thereof with a provision or part
                    thereof that is legal, valid and enforceable and that has, to the
                    greatest extent possible, a similar effect as the illegal, invalid or
                    unenforceable provision or part thereof, given the contents and
                    purpose of these Terms of Use. These Terms of Use constitute the
                    entire agreement and understanding of the parties with respect to its
                    subject matter and replaces and supersedes all prior or
                    contemporaneous agreements or undertakings regarding such subject
                    matter. In these Terms of Use, the words "including" and "include"
                    mean "including, but not limited to."
                    <br></br>
                    <br></br>
                </p>
                <h3>Miscellaneous</h3>
                <p>
                    Dashtoon shall not be liable for any failure to perform its
                    obligations hereunder where such failure results from any cause beyond
                    Dashtoon's reasonable control, including, without limitation,
                    mechanical, electronic or communications failure or degradation
                    (including "line-noise" interference). These Terms of Use are personal
                    to you, and are not assignable, transferable or sub licensable by you
                    except with Dashtoon's prior written consent. Dashtoon may assign,
                    transfer or delegate any of its rights and obligations hereunder
                    without consent. No agency, partnership, joint venture, or employment
                    relationship is created as a result of these Terms of Use and neither
                    party has any authority of any kind to bind the other in any respect.
                    <br></br>
                    <br></br>
                    Unless otherwise specified in these Term of Use, all notices under
                    these Terms of Use will be in writing and will be deemed to have been
                    duly given when received, if personally delivered or sent by certified
                    or registered mail, return receipt requested; when receipt is
                    electronically confirmed, if transmitted by facsimile or e-mail; or
                    the day after it is sent, if sent for next day delivery by recognized
                    overnight delivery service.
                </p>
                <p>
                    This is an agreement between you and Dashverse Copr (with its
                    affiliates, "Dashtoon" or "we") regarding the Dashtoon Coins (the
                    "Coins"). Before purchasing or redeeming any Coins, please read these
                    Terms and Conditions, all rules and policies related to the Coins
                    (including any rules or provisions on any product detail page or any
                    help or informational page relating to the Coins), Dashtoon’s Privacy
                    Policy at https://www.dashtoon.com/privacy-policy, and Dashtoon’s
                    Terms of Use
                    at https://www.dashtoon.com/terms-and-conditions (collectively, the
                    "Agreement"). If you receive, purchase, or redeem any Coins, you agree
                    to be bound by the Agreement on behalf of yourself and all members of
                    your household and others who use the Coins or under your account. If
                    you receive, purchase, or redeem any Coins, you agree to be bound by
                    the Agreement on behalf of yourself and all members of your household
                    and others who use the Coins or under your account.
                </p>
                <h2>DASHTOON COINS TERMS AND CONDITIONS</h2>
                <p>
                    Dashtoon may terminate your access to all or any part of the Service
                    at any time, with or without cause, with or without notice, effective
                    immediately, which may result in the forfeiture and destruction of all
                    information associated with your membership. If you wish to terminate
                    your account, you may do so by contacting us as per Dashtoon’s
                    Communications – Customer Services mentioned below. Any fees,
                    including Premium Charges, paid hereunder are non-refundable. All
                    provisions of these Terms of Use which by their nature should survive
                    termination shall survive termination, including, without limitation,
                    ownership provisions, warranty disclaimers, indemnity and limitations
                    of liability.
                </p>
                <h3>1. Coins</h3>
                <p>
                    The Program allows customers to receive and purchase Coins and to
                    redeem those Coins for the purchase of eligible digital products and
                    services we sell through the Dashtoon Platform located at
                    https://www.dashtoon.com (together with all associated websites and
                    mobile applications, “the Platform”). The Platform offers two types of
                    Coins: Coins you purchased from us (“Base Coins”) and Coins we give
                    you for promotional purposes (“Bonus Coins”).
                </p>
                <h3>2. Use of Coins</h3>
                <h4>2.1 Redeeming Coins:</h4>
                <p>
                    Coins may be redeemed only for the purchase of eligible products and
                    services through the Platform. Eligible products and services may
                    change over time. Not all apps and in-app products/services can be
                    purchased using Coins, and not all devices support the use of Coins.
                    When a purchase can be made with Coins, you will see an option to pay
                    with Coins during the purchase process. To make a purchase with Coins,
                    you must pay the entire purchase price for the applicable product
                    which is inclusive of applicable taxes.
                </p>
                <h4>2.2 Purchase of Coins:</h4>
                <p>
                    Coins may be redeemed only for the purchase of eligible products and
                    services through the Platform. Eligible products and services may
                    change over time. Not all apps and in-app products/services can be
                    purchased using Coins, and not all devices support the use of Coins.
                    When a purchase can be made with Coins, you will see an option to pay
                    with Coins during the purchase process. To make a purchase with Coins,
                    you must pay the entire purchase price for the applicable product
                    which is inclusive of applicable taxes.Purchases of Coins will be
                    charged to the 1-Click payment method or any other authorized payment
                    method associated with your account. You may be allowed to purchase
                    Coins through a variety of methods, including any of the subscription
                    or one-time purchase packages offered by us on the Platform. We may
                    (at our discretion) allow you to switch from one subscription plan to
                    another and in such event, the new subscription plan may take effect
                    only after your current plan expires. The Coins may be made available
                    for purchase under various pricing models and price points (at our
                    sole discretion). We may temporarily or in select markets or to select
                    user groups charge higher or lower prices to test pricing levels in an
                    effort to maximize sales or revenue and improve user experience. All
                    purchases of Coins are final. We do not accept returns of Coins except
                    where required by law. Once the Coins have been used/redeemed for a
                    purchase, they cannot be transferred, returned or credited to any
                    other user/subscriber. If you believe any Coins were not properly
                    credited to your account, please contact our customer service for
                    assistance. If we offer discounts on the purchase of Coins, we may
                    modify or discontinue those discounts at any time without notice to
                    you.
                </p>
                <h4>2.3 Bonus Coins:</h4>
                <p>
                    All Coins that are provided without charge (or at a discounted price)
                    in addition to Base Coins are Bonus Coins. This includes any Coins we
                    give you in connection with your purchase of products, your use of our
                    services, or any other promotional activity.
                </p>
                <h4>2.4 Expiration Dates:</h4>
                <p>
                    Base Coins do not expire. We reserve the right to institute an expiry
                    date for Bonus Coins at our discretion, which shall be notified to you
                    through the Platform.
                </p>
                <h4>2.5 Restrictions:</h4>
                <p>
                    Coins cannot be resold, transferred for value or redeemed for cash,
                    except to the extent required by law. Coins in one account may not be
                    transferred to another account. We may limit the number of Coins you
                    can purchase or receive within certain periods of time, or implement
                    other restrictions on the receipt or use of Coins. If we give you
                    Bonus Coins in connection with your purchase of a product and you
                    later return or receive a refund for that product, we may revoke those
                    Bonus Coins. If you have already used those Coins, we may deduct the
                    same number of other Bonus Coins or Base Coins from your account or
                    charge your credit card or other payment instrument for any products
                    you purchased using those Coins.
                </p>

                <h3>3. Software</h3>
                <p>
                    We may make available to you software for your use in connection with
                    the Coins. Terms contained in our Terms of Use
                    (https://www.dashtoon.com/terms-and-conditions) apply to your use of
                    that software.
                </p>
                <h3>4. Cancellation</h3>
                <p>
                    You can cancel your subscription of account at any given time with us
                    as per your discretion. However, you shall continue to have access
                    till the end of your billing cycle. The account will be automatically
                    terminated at the end of the billing cycle
                </p>
                <h3>5. General</h3>
                <h4>5.1 Changes</h4>
                <p>
                    We may change, suspend or discontinue the Coins programme, or any part
                    of it, at any time without notice. In such event, all Coins shall
                    expire with immediate effect
                </p>
                <h4>5.2 Termination Fraud:</h4>
                <p>
                    Your rights under the Agreement and to use the Coins will
                    automatically terminate without notice if you fail to comply with any
                    of the terms of this Agreement. We may also terminate your right to
                    use the Coins at any time, including if we determine your use violates
                    any term of the Agreement or involves any fraud or misuse of the
                    Coins. In case of such termination, you must cease all use of the
                    Coins, and we may immediately revoke your access to the Coins without
                    notice to you. If we determine you fraudulently obtain Coins or use
                    any fraudulently-obtained Coins, we may revoke those Coins and charge
                    your credit card or other payment instrument for any products
                    purchased using those Coins. Our failure to insist upon or enforce
                    your strict compliance with the Agreement will not constitute a waiver
                    of any of our rights. You undertake to provide accurate information in
                    relation to creation of the account and/or provide any subsequent
                    change/ revision of information for which you shall be solely
                    responsible.
                </p>
                <h4>5.3 Amendments:</h4>
                <p>
                    We may amend the Agreement at our sole discretion by posting the
                    revised terms on the Platform. Your continued use of the Coins after
                    any amendment evidences your agreement to be bound by it.
                </p>
                <h4>5.4 Contact Information</h4>
                <p>
                    For communications concerning this Agreement, please write
                    to legal@dashtoon.com
                </p>
                <h4>5.5 Disputes</h4>
                <p>
                    Any dispute or claim arising from or relating to the Agreement or the
                    Coins is subject to the dispute resolution, governing law, disclaimer
                    of warranties and limitation of liability, and all other terms in our
                    Terms of Use at https://www.dashtoon.com/terms-and-conditions.
                </p>
                <h4>5.6 Limitation of Liability</h4>
                <p>
                    Without limiting the disclaimer of warranties and limitation of
                    liability in our Terms of Use, in no event will our total liability to
                    you for all damages arising out of or related to the Coins exceed the
                    amount you paid for any Coins that you have not redeemed. This
                    limitation will apply to you even if the remedies fail of their
                    essential purpose. We are not responsible for any Coins used through
                    your account without your permission.
                </p>

                <h3>DASHTOON COMMUNICATIONS</h3>
                <h4>LEGAL AND NOTICES</h4>
                <p>
                    To send us any notice or for any legal concerns or in case your
                    intellectual property rights have been infringed you may write to us
                    at legal@dashtoon.com .
                </p>
                <h4>CUSTOMER SERVICES</h4>
                <p>
                    For any queries /concerns regarding your account and/or its
                    termination, payments, coins, business purpose or partnerships etc.
                    you may write to us at care@dashtoon.com.
                </p>
                <h4>GRIEVANCE OFFICER</h4>
                <p>
                    In case you have any concerns in relation to the usage and processing
                    of your personal information, content which violates our Privacy
                    Policy/Terms and Conditions then you may contact our Grievance Officer
                    below:<br></br>
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
            </div>
            <FooterMobile />
        </>
    );
};

export default TermsAndConditionsMobile;
