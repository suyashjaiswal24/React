import * as React from 'react'

interface FreeAPIRandomUserResponse {
    success: boolean;
    statusCode: number;
    message: string;
    data: {
        id: number;
        gender: string;
        email: string;
        phone: string;
        cell: string;
        nat: string;
        name: { title: string; first: string; last: string };
        dob: { date: string; age: number };
        registered: { date: string; age: number };
        picture: { large: string; medium: string; thumbnail: string };
        location: {
            city: string;
            state: string;
            country: string;
            postcode: number;
            street: { number: number; name: string };
            coordinates: { latitude: string; longitude: string };
            timezone: { offset: string; description: string };
        };
        login: {
            uuid: string;
            username: string;
            password: string;
            salt: string;
            md5: string;
            sha1: string;
            sha256: string;
        };
    };
}

//Custom hook to fetch random user data from the Free API
export function useRandomUser() {
    const [user, setUser] = React.useState<null | FreeAPIRandomUserResponse['data']>();
    const [isFetching, setIsFetching] = React.useState(false);
    const [error, setError] = React.useState<null | string>(null);

    async function fetchRandomUser() {
        setIsFetching(true);
        setError(null); // Reset error state before fetching
        try {
            const rawResponse = await fetch('https://api.freeapi.app/api/v1/public/randomusers/user/random', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setError(null); // Reset error state before fetching
            const response = await rawResponse.json() as FreeAPIRandomUserResponse;
            if (response.data && response.success) {
                setUser(response.data);
            }
        } catch (error) {
            console.error('Error fetching random user:', error);
            setError('Failed to fetch random user. Please try again later.');
        }
        finally {
            setIsFetching(false);
        }
    }


    return { user, fetchRandomUser, isFetching, error }; //returning object(not array)
}
