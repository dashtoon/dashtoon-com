export enum TrackingEvents {
    showOpen = 'showOpen',
    episodeOpen = 'episodeOpen',
    backToShow = 'backToShow',
    publishShow = 'publishShow',
    navigationClick= 'navigationClick',
    publishEpisode = 'publishEpisode',
    userLogin = 'userLogin',
    userSignup = 'userSignup',
    discordButtonClicked = 'discordButtonClicked',
    buttonClicked = 'buttonClicked',
    homeScreenOpened = 'homeScreenOpened',
    careerScreenOpened = 'careerScreenOpened',
    createScreenOpened = 'createScreenOpened',
    companyScreenOpened= 'companyScreenOpened',
    buttonClickedStudioPage = 'buttonClickedStudioPage',
    redirectUserToStudio = 'redirectUserToStudio',
    termsAndConditionsOpened = 'termsAndConditionsOpened',
    privacyPolicyOpened = 'privacyPolicyOpened',
    bugBountyOpened = 'bugBountyOpened',

    //perf
    webVitals = 'webVitals',
}

export enum SendToTypes {
    t2i = 't2i',
    i2i = 'i2i',
    inpaint = 'inpaint',
    controlnet_t2i = 'controlnet_t2i',
    controlnet_i2i = 'controlnet_i2i',
    controlnet_inpaint = 'controlnet_inpaint',
    upscale = 'upscale',
}