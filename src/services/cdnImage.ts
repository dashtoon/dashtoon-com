const cdnUrl = 'https://dashtoon.ai/cdn-cgi/image/';
export const getCDNImageUrl = (url: string, width: string | undefined) => {
    if (!url.includes(cdnUrl) && !url.startsWith('blob')) {
        // If the URL does not include cdnUrl, add it with or without width
        return width
            ? `${cdnUrl}fit=scale-down,width=${width}/${url}`
            : `${cdnUrl}fit=scale-down/${url}`;
    } else if (width) {
        // If the URL includes cdnUrl and width is provided, insert width into the URL
        const urlWithoutCdn = url.replace(cdnUrl, '');
        return `${cdnUrl}fit=scale-down,width=${width}${urlWithoutCdn}`;
    } else {
        // If the URL includes cdnUrl and width is not provided, return the URL as is
        return url;
    }
};