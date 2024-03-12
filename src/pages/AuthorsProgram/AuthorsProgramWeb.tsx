
import NavbarWeb from "../../Components/NavbarWeb";
import {auth, signInAnonymouslyAndGetToken } from "../../firebaseConfig";
import {useContext, useEffect } from "react";
import {getCDNImageUrl} from "../../services/cdnImage";
import FooterWeb from "../../Components/FooterWeb";

import styles from './AuthorsProgramWeb.module.css';
import {trackEvent} from "../../Utils/Analytics";
import {TrackingEvents} from "../../Constants/TrackingEvents";

const AuthorsProgramWeb = () => {
    useEffect(() => {
        const checkAuthAndTrackEvent = async () => {
            await auth.authStateReady();
            if (!auth.currentUser) {
                await signInAnonymouslyAndGetToken();
            }
        };

        checkAuthAndTrackEvent();
    }, []);


    const handleButtonClick = (buttonName: string) => {

        const formElement = document.getElementById('creatorForm');
        formElement!.scrollIntoView({ behavior: 'smooth' });

    };


    return (
        <div>
            <div className={styles.CreatorsContainer}>
               <NavbarWeb currentPage={'authors'}></NavbarWeb>

                {/* Heading Section */}
                <div className={styles.headingSectionCreators}>

                    <h2 className={styles.headingTextCreators}>
                        Convert your Novels into Webcomics. For Free!
                    </h2>
                    <p>
                        <strong>With our DashAuthors Program, we will help you turn your novels into stunning webcomics for our readers across the globe.
                            No costs for you. Competitive royalties.
                        </strong>
                    </p>
                    <button className={styles.createDashtoonButton}
                            onClick={() => handleButtonClick('Apply Now')}> Apply Now
                    </button>

                    <img
                        className={styles.headingImage}
                        src={getCDNImageUrl('https://content.dashtoon.ai/assets/AuthorsProgrammeBanner.png', '1920')}
                        alt="Authors Program"
                    />
                </div>

                <div className={styles.perksSection} id={'perks'}>
                    <h2 className={styles.perksHeading} style={{marginBottom: '-40px'}}>Perks and benefits</h2>
                    <div className={styles.perksContainer}>
                        <div className={styles.photoFrame}>
                            <img className={styles.imageHolder} alt="Authors Program"
                                 src={getCDNImageUrl('https://content.dashtoon.ai/assets/PublishAndEarnWithDashtoon.png', '465', '280')}/>
                            <p className={styles.captionContainer}>Publish and earn with Dashtoon</p>
                            <p className={styles.joinOurCreators}>
                                Start earning within 6 months when the webcomic adaptation of your novel is launched. Zero cost of production for you. Competitive royalties.

                            </p>
                        </div>
                        <div className={styles.photoFrame}>
                            <img className={styles.imageHolder} alt="Authors Program"
                                 src={getCDNImageUrl('https://content.dashtoon.ai/assets/ReadersAcrossTheGlobe.png', '465', '280')}/>
                            <p className={styles.captionContainer}>Global Audience and Promotion</p>
                            <p className={styles.joinOurCreators}>
                                Readers across the globe. Your comic will also be promoted across multiple platforms globally.
                            </p>
                        </div>
                    </div>
                    <div className={styles.perksContainer}>
                        <div className={styles.photoFrame}>
                            <img className={styles.imageHolder} alt="Authors Program"
                                 src={getCDNImageUrl('https://content.dashtoon.ai/assets/ProfessionalTeam.png', '465', '280')}/>
                            <p className={styles.captionContainer}>Production Guarantee</p>
                            <p className={styles.joinOurCreators}>
                                A dedicated professional team of comic writers, graphic artists and marketers will work with you to bring your novel to life through the visual medium of webcomics within 6 months. Production is guaranteed.

                            </p>
                        </div>
                        <div className={styles.photoFrame}>
                            <img className={styles.imageHolder} alt="Authors Program"
                                 src={getCDNImageUrl('https://content.dashtoon.ai/assets/HassleFreeProcess.png', '465', '280')}/>
                            <p className={styles.captionContainer}>Hassle Free Process
                            </p>
                            <p className={styles.joinOurCreators}>
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
                    padding: '0 208px',
                    marginBottom: '150px',
                    marginTop: '150px'
                }}>
                    <h2 className={styles.perksHeading}> Get Started in 3 Steps</h2>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '64px'}}>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'left'}}>
                            <div className={styles.stepNumber}> 1</div>
                            <div className={styles.stepHeading}> Apply Now</div>
                            <div className={styles.stepText}>Fill up the short form below with your details and we will get back to you. Alternatively, you can reach out to us on licensing@dashtoon.com

                            </div>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'left'}}>
                            <div className={styles.stepNumber}> 2</div>
                            <div className={styles.stepHeading}> Selection</div>
                            <div className={styles.stepText}>We will review your novel and get back to you within 2-4 working days.

                            </div>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'left'}}>
                            <div className={styles.stepNumber}> 3</div>
                            <div className={styles.stepHeading}> Getting started</div>
                            <div className={styles.stepText}>Post contract closure, we will work with you to adapt your novel into a webcomic and it will be published within 6 months

                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.signUpSection} id={'creatorForm'}>
                    <div className={styles.perksHeading}> Apply Now for the DashAuthors Program
                    </div>
                    <div style={{padding: '0', overflow: 'scroll', justifySelf: 'center', alignSelf: 'center'}}>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLScT3qHQsqCC0LuYg0jGeX3bV4_JhjyFIkZ2o-SSnE2e4WbSsA/viewform?embedded=true"
                            width="800px"
                            height="800px"
                            frameBorder="0"
                            title="Google Form"
                        />
                    </div>
                </div>
            </div>
            <FooterWeb></FooterWeb>
        </div>
    );
};

export default AuthorsProgramWeb;