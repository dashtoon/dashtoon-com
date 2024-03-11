import {auth, signInAnonymouslyAndGetToken } from "../../firebaseConfig";
import {useContext, useEffect } from "react";
import {getCDNImageUrl} from "../../services/cdnImage";


import {trackEvent} from "../../Utils/Analytics";
import {TrackingEvents} from "../../Constants/TrackingEvents";

import styles from './AuthorsProgramMobile.module.css';
import {AuthContext} from "../../Provider/AuthProvider";
import NavbarMobile from "../../Components/NavbarMobile";
import FooterMobile from "../../Components/FooterMobile";


const AuthorsProgramMobile = () => {
    const authCurrent = useContext(AuthContext);

    useEffect(() => {
        const checkAuthAndTrackEvent = async () => {
            await auth.authStateReady();
            if (!auth.currentUser) {
                await signInAnonymouslyAndGetToken();
            }
        };

        checkAuthAndTrackEvent();
    }, [authCurrent]);


    const handleButtonClick = (buttonName: string) => {

        const formElement = document.getElementById('creatorForm-mobile');
        formElement!.scrollIntoView({ behavior: 'smooth' });

    };

    return (
            <div>
                <div className={styles.creatorsContainerMobile}>
                    <NavbarMobile></NavbarMobile>

                    {/* Heading Section */}
                    <div className={styles.headingSectionCreatorsMobile}>

                        <h2 className={styles.headingTextCreatorsMobile}>
                            Convert your novel into a webcomic. For Free!
                        </h2>
                        <p>
                            <strong>With our DashAuthors Program, we will help you turn your Novels into stunning Webcomics for our readers across the globe.
                                No costs for you. Competitive royalties.</strong>
                        </p>
                        <button className={styles.createDashtoonButtonMobile}
                                onClick={() => handleButtonClick('Apply Now')}> Apply Now
                        </button>

                        <img
                            className={styles.headingImageMobile}
                            src={getCDNImageUrl('https://content.dashtoon.ai/assets/AuthorsProgrammeBanner.png', '1920')}
                            alt="Authors Program"
                        />
                    </div>

                    <div className={styles.perksSectionMobile} id={'perks-mobile'}>
                        <h2 className={styles.perksHeadingMobile} style={{ marginBottom: '-40px' }}>Perks and benefits</h2>
                        <div className={styles.perksContainerMobile}>
                            <div className={styles.photoFrameMobile}>
                                <img className={styles.imageHolderMobile} alt="Authors Program"
                                     src={getCDNImageUrl('https://content.dashtoon.ai/assets/PublishAndEarnWithDashtoon.png', '290')} />
                                <p className={styles.captionContainerMobile}>Publish and earn with Dashtoon</p>
                                <p className={styles.joinOurCreatorsMobile}>
                                    Start earning within 6 months when the webcomic adaptation of your novel is launched. Zero cost of production for you. Competitive royalties.
                                </p>
                            </div>
                            <div className={styles.photoFrameMobile}>
                                <img className={styles.imageHolderMobile} alt="Authors Program"
                                     src={getCDNImageUrl('https://content.dashtoon.ai/assets/ReadersAcrossTheGlobe.png', '290')} />
                                <p className={styles.captionContainerMobile}>Global Promotion and Marketing Support</p>
                                <p className={styles.joinOurCreatorsMobile}>
                                    Readers across the globe. Your comic will also be promoted across multiple platforms globally.
                                </p>
                            </div>
                        </div>
                        <div className={styles.perksContainerMobile}>
                            <div className={styles.photoFrameMobile}>
                                <img className={styles.imageHolderMobile} alt="Authors Program"
                                     src={getCDNImageUrl('https://content.dashtoon.ai/assets/ProfessionalTeam.png', '290')} />
                                <p className={styles.captionContainerMobile}>Production Guarantee</p>
                                <p className={styles.joinOurCreatorsMobile}>
                                    A dedicated professional team of comic writers, graphic artists and marketers will work with you to bring your novel to life through the visual medium of webcomics within 6 months. Production is guaranteed.
                                </p>
                            </div>
                            <div className={styles.photoFrameMobile}>
                                <img className={styles.imageHolderMobile} alt="Authors Program"
                                     src={getCDNImageUrl('https://content.dashtoon.ai/assets/HassleFreeProcess.png', '290')} />
                                <p className={styles.captionContainerMobile}>Hassle Free Process</p>
                                <p className={styles.joinOurCreatorsMobile}>
                                    We have a simplified process and contract only for digital web comics. No derivative rights involved.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0 20px',
                        marginBottom: '50px',
                        marginTop: '50px'
                    }}>
                        <h2 className={styles.perksHeadingMobile}> Get Started in 3 Steps</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'center' }}>
                                <div className={styles.stepNumberMobile}> 1</div>
                                <div className={styles.stepHeadingMobile}> Apply Now</div>
                                <div className={styles.stepTextMobile}>Fill up the short form below with your details and we will get back to you. Alternatively, you can reach out to us on licensing@dashtoon.com </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'center' }}>
                                <div className={styles.stepNumberMobile}> 2</div>
                                <div className={styles.stepHeadingMobile}> Selection</div>
                                <div className={styles.stepTextMobile}>We will review your novel and get back to you within 2-4 working days.w</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'center' }}>
                                <div className={styles.stepNumberMobile}> 3</div>
                                <div className={styles.stepHeadingMobile}> Getting started</div>
                                <div className={styles.stepTextMobile}>Post contract closure, we will work with you to adapt your novel into a webcomic and it will be published within 6 months</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.signUpSectionMobile} id={'creatorForm-mobile'}>
                        <div className={styles.perksHeadingMobile}> Apply now for the DashAuthors Program</div>
                        <div style={{ padding: '0', overflow: 'scroll', justifySelf: 'center', alignSelf: 'center', borderRadius: '8px', border: '0px transparent' }}>
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLScT3qHQsqCC0LuYg0jGeX3bV4_JhjyFIkZ2o-SSnE2e4WbSsA/viewform?embedded=true"
                                width="300" height="400" />
                        </div>
                    </div>
                </div>
                <FooterMobile></FooterMobile>
            </div>
    );
};

export default AuthorsProgramMobile;