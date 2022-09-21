import { client } from "../client";
import { useEffect, useState } from "react";

function useDataFetch() {
  const [movies, setMovies] = useState([]);

  const cleanUpData = (unCleanData) => {
    const cleanData = unCleanData.map((field) => {
      const { sys, fields } = field;
      const { id } = sys;
      const fieldTitle = fields.title;
      const fieldImage = fields.image.fields.file.url;
      const fieldImageQuer = fields.imagequer.fields.file.url;
      const fieldDescription = fields.description;
      const fieldRuntime = fields.runtime;
      const fieldFsk = fields.fsk;
      const fieldGenre = fields.genre;
      const fieldDirectors = fields.directors;
      const fieldCast = fields.cast;
      const fieldScreenwriter = fields.screenwriter;
      const fieldYearOfPuplication = fields.yearOfPublication;
      const fieldRating = fields.rating;
      const fieldId = fields.id;

      const updatedField = {
        id,
        fieldTitle,
        fieldImage,
        fieldImageQuer,
        fieldDescription,
        fieldRuntime,
        fieldFsk,
        fieldGenre,
        fieldDirectors,
        fieldCast,
        fieldScreenwriter,
        fieldYearOfPuplication,
        fieldRating,
        fieldId,
      };
      return updatedField;
    });
    setMovies(cleanData);
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovies = async () => {
    try {
      const response = await client.getEntries();
      const responseData = response.items;
      cleanUpData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return movies;
}

export default useDataFetch;
