import { config } from '../Config/Config';
import { auth } from '../firebaseConfig';
const baseUrl = config.baseUrl;

export const getPathWithPlaceholders = (path: string) => {
    // Define a mapping of known prefixes to their placeholders
    const placeholders: { [key: string]: string } = {
        SHO: '{showId}',
        EPI: '{episodeId}',
        CHA: '{characterId}',
        // Add more mappings as needed
    };

    // Replace segments based on the defined placeholders
    return path.replace(/[A-Za-z0-9_-]+/g, match => {
        // Check if the segment is purely numeric
        if (/^\d+$/.test(match)) {
            return '{imageId}';
        }

        // Check if the segment starts with one of the known prefixes
        for (const prefix in placeholders) {
            if (match.startsWith(prefix)) {
                return placeholders[prefix];
            }
        }

        return match;
    });
};

class HttpClient {

    static async uploadFile(
        path: string,
        file: File,
        onProgress: (progress: number) => void
    ): Promise<any> {
        return new Promise(async (resolve, reject) => {
            const idToken = auth.currentUser ? await auth.currentUser.getIdToken() : null;

            const xhr = new XMLHttpRequest();

            // Handle the upload progress
            xhr.upload.onprogress = event => {
                if (event.lengthComputable) {
                    const progress = (event.loaded / event.total) * 100;
                    onProgress(progress);
                }
            };

            // Response received
            xhr.onload = () => {
                // trackAPICallTimeEvent(path, xhr.status, 'POST', newUUID);
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(JSON.parse(xhr.responseText));
                }
            };

            // Handle network errors
            xhr.onerror = () => {
                reject('Network error');
            };

            // Set up request
            xhr.open('POST', `${baseUrl}${path}`);

            // Set headers
            if (idToken) {
                xhr.setRequestHeader('Authorization', `Bearer ${idToken}`);
            }
            // Note: Additional headers can be set here if needed

            // Create FormData and append file
            const formData = new FormData();
            formData.append('file', file);

            // Send request
            xhr.send(formData);
        });
    }
    static async post(path: string, body: any, additionalHeaders: {} = {}): Promise<any> {
        const idToken = auth.currentUser ? await auth.currentUser.getIdToken() : null;
        const finalPath = `${baseUrl}${path}`
        // console.log(finalPath);
        const response = await fetch(finalPath, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                ...(idToken ? { Authorization: `Bearer ${idToken}` } : {}),
                ...additionalHeaders,
            },
            body: JSON.stringify(body),
        });
        if (response.ok) {
            return await response.json();
        } else {
            // console.log(response);
            const message = await response.json();
            throw Error(message.message);
        }
    }

    static async get(path: string, additionalHeaders: {} = {}): Promise<any> {
        const idToken = auth.currentUser ? await auth.currentUser.getIdToken() : null;
        const finalPath = `${baseUrl}${path}`
        // console.log(idToken);
        const response = await fetch(finalPath, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                ...(idToken ? { Authorization: `Bearer ${idToken}` } : {}),
                ...additionalHeaders,
                'Accept': 'application/json'
            },
        });
        if (!response.ok) {
            throw new Error("Network error")
        }
        if (response.status === 200) {
            return await response.json();
        }
        return response;

    }
    // private static async getAuthorizationHeader(): Promise<string> {
    //     if (!auth.currentUser) {
    //         throw new Error('No user currently signed in');
    //     }
    //     const idToken = await auth.currentUser.getIdToken();
    //     return `Bearer ${idToken}`;
    // }

}

export default HttpClient;