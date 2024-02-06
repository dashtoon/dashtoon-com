export enum TrackingEvents {
    showOpened = 'showOpened',
    episodeOpened = 'episodeOpened',
    backToShow = 'backToShow',
    publishShow = 'publishShow',
    publishEpisode = 'publishEpisode',
    userLogin = 'userLogin',
    userSignup = 'userSignup',
    newComicClicked = 'newComicClicked',
    detailsNextButtonClicked = 'detailsNextButtonClicked',
    seriesTitleEntered = 'seriesTitleEntered',
    seriesDescriptionEntered = 'seriesDescriptionEntered',
    seriesGenreSelected = 'seriesGenreSelected',
    seriesTropeSelected = 'seriesTropeSelected',
    styleThumbnailClicked = 'styleThumbnailClicked',
    styleConfirmed = 'styleConfirmed',
    styleNextButtonClicked = 'styleNextButtonClicked',
    thumbnailUploaded = 'thumbnailUploaded',
    createEpisode1ButtonClicked = 'createEpisode1ButtonClicked',
    uploadEpisode1ButtonClicked = 'uploadEpisode1ButtonClicked',
    uploadEpisodeButtonClicked = 'uploadEpisodeButtonClicked',
    uploadImageCanvas = 'uploadImageCanvas',
    generateEpisodeButtonClicked = 'generateEpisodeButtonClicked',
    comicEditButtonClicked = 'comicEditButtonClicked',
    comicListItemOpened = 'comicListItemOpened',
    episodeListItemOpened = 'episodeListItemOpened',
    episodeEditButtonClicked = 'episodeEditButtonClicked',
    t2iGenerateButtonClicked = 't2iGenerateButtonClicked',
    t2iThumbnailGenerateButtonClicked = 't2iThumbnailGenerateButtonClicked',
    i2iGenerateButtonClicked = 'i2iGenerateButtonClicked',
    pwwGenerateButtonClicked = 'pwwGenerateButtonClicked',
    inpaintGenerateButtonClicked = 'inpaintGenerateButtonClicked',
    instructPix2PixGenerateButtonClicked = 'instructPix2PixGenerateButtonClicked',
    upscalerGenerateButtonClicked = 'upscalerGenerateButtonClicked',
    discordButtonClicked = 'discordButtonClicked',
    buyCoinsButtonClicked = 'buyCoinsButtonClicked',
    favoriteImageClicked = 'favoriteImageClicked',
    imageRatingClicked = 'imageRatingClicked',
    objectErasedOnImage = 'objectErasedOnImage',
    generateImage = 'generateImage',
    generateThumbnailImage = 'generateThumbnailImage',
    saveImage = 'saveImage',
    downloadImage = 'downloadImage',
    sendTo = 'sendTo',
    // characters
    characterEdited = 'characterEdited',
    characterTrained = 'characterTrained',
    characterPublished = 'characterPublished',
    characterAdded = 'characterAdded',
    charactedAddedToShow = 'characterAddedToShow',
    characterNameModified = 'characterNameModified',
    characterRemovedFromShow = 'characterRemovedFromShow',
    createCharacterButton = 'createCharacterButton',
    viewCharacterInTrainingButton = 'viewCharacterInTrainingButton',
    viewCharacterLibraryTrainingButton = 'viewCharacterLibraryTrainingButton',
    characterCreationPageNextButton = 'characterCreationPageNextButton',
    characterCreationPageBackButton = 'characterCreationPageBackButton',
    characterCreationTrainCharacterButton = 'characterCreationTrainCharacterButton',
    characterCreationAPISuccess = 'characterCreationAPISuccess',
    characterCreationUploadImage = 'characterCreationUploadImage',
    // character end
    showDetailsOpenModal = 'showDetailsOpenModal',
    showDetailsCloseModal = 'showDetailsCloseModal',
    showDetailsModalTabChange = 'showDetailsModalTabChange',
    characterViewModalChanges = 'characterViewModalChanges',

    disabledButtonClicked = 'disabledButtonClicked',
    segmentRequest = 'segmentRequest',
    nsfwCount = 'nsfwCount',
    uploadImageToLibrary = 'uploadImageToLibrary',
    promptLibrarySearch = 'promptLibrarySearch',
    imageLibrarySearch = 'imageLibrarySearch',
    selectImageFromLibrary = 'selectImageFromLibrary',
    imageLibrarySearchButtonClicked = 'imageLibrarySearchButtonClicked',
    editMultiInpaintSegments = 'editMultiInpaintSegments',
    imageGenerationFailed = 'imageGenerationFailed',
    imageGenerationRequestFailed = 'imageGenerationRequestFailed',
    pinnedImageClicked = 'pinnedImageClicked',
    unpinnedImageClicked = 'unpinnedImageClicked',
    rightClickMenu = 'rightClickMenu',
    autoInpaintButtonClick = 'autoInpaintButtonClick',
    scheduleEpisode = 'scheduleEpisode',
    sizeLimitExceeded = 'sizeLimitExceeded',
    imageLoaded = 'imageLoaded',
    imageLoadFailed = 'imageLoadFailed',
    imageGenerationTime = 'imageGenerationTime',
    refreshScreen = 'refreshScreen',
    selectedBugType = 'selectedBugType',
    bugReport = 'bugReport',
    openLibrary = 'openLibrary',
    clickCreateLibrary = 'clickCreateLibrary',
    clickSendToLibrary = 'clickSendToLibrary',
    clickSendToCreateLibrary = 'clickSendToCreateLibrary',
    dragFromLibrary = 'dragFromLibrary',
    clickOnOpenCollection = 'clickOnOpenCollection',
    clickOnOpenAllCollections = 'clickOnOpenAllCollections',
    clickOnOpenHistory = 'clickOnOpenHistory',
    clickOnOpenFavorites = 'clickOnOpenFavorites',
    clickOnOpenPinned = 'clickOnOpenPinned',
    clickOnOpenDownloadedImages = 'clickOnOpenDownloadedImages',
    searchLibraryCollections = 'searchLibraryCollections',
    createCollection = 'createCollection',
    // deprecated
    liveMode = 'liveMode',
    buttonClicked = 'buttonClicked',
    canvasModeChanged = 'canvasModeChanged',
    toolbarButtonClicked = 'toolbarButtonClicked',
    frameMenuTabClicked = 'frameMenuTabClicked',
    rightMenuToolClicked = 'rightMenuToolClicked',
    colorChanged = 'colorChanged',
    strokeSizeChanged = 'strokeSizeChanged',
    upscaleButtonClicked = 'upscaleButtonClicked',
    removeBackgroundButtonClicked = 'removeBackgroundButtonClicked',
    magicEraserButtonClicked = 'magicEraserButtonClicked',
    maskModeChanged = 'maskModeChanged',
    autoInpaintButtonClicked = 'autoInpaintButtonClicked',
    imageAppliedToCanvas = 'imageAppliedToCanvas',
    imageAppliedToCanvasFromLiveMode = 'imageAppliedToCanvasFromLiveMode',
    imageGenerationLiveModeSentToQueue = 'imageGenerationLiveModeSentToQueue',
    imageGeneratedFromLiveMode = 'imageGeneratedFromLiveMode',
    liveModeError = 'liveModeError',
    fontSizeChanged = 'fontSizeChanged',
    fontChanged = 'fontChanged',
    dragBubble = 'dragBubble',
    dragImageFromHistory = 'dragImageFromHistory',
    dropImageFromHistory = 'dropImageFromHistory',
    dropBubble = 'dropBubble',
    popularShowClicked = 'popularShowClicked',
    youtubeTutorialClicked = 'youtubeTutorialClicked',
    dashExplorerShowClicked = 'dashExplorerShowClicked',
    socialIconClicked = 'socialIconClicked',
    homeScreenOpened = 'homeScreenOpened',
    showCreated = 'showCreated',
    infoButtonClicked = 'infoButtonClicked',
    // ftue
    ftueGetStarted = 'ftueGetStarted',
    ftueNext = 'ftueNext',
    ftueBack = 'ftueBack',
    ftueDone = 'ftueDone',
    ftueSkip = 'ftueSkip',

    // text enhancer
    enhancePrompt = 'enhancePrompt',

    //perf
    webVitals = 'webVitals',

    // expression for generations
    useExpressionDropdown = 'useExpressionDropdown',

    //thumbnails
    setAsThumbnail = 'setAsThumbnail',
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