import { useEffect, useState } from "react";

export const useFetchPhotos = () => {
    const [photos, setPhotos] = useState([]);

    const getPhotos = async () => {
        const response = await fetch("https://www.csscolorsapi.com/api/colors/group/Blue");
        
        const data = await response.json();

        setPhotos(data);
    };

    useEffect(() => {
        getPhotos();
    }, []);

    console.log(photos);

    return { photos };
};