import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  likeForTech,
  loadTechs,
  selectTechList,
  selectTechLoadError,
  selectTechLoading,
} from "../redux/techSlice";

const Technologies = () => {
  const technologies = useSelector(selectTechList);
  const loading = useSelector(selectTechLoading);
  const loadError = useSelector(selectTechLoadError);

  const dispatch = useDispatch();

  const handleLike = (storyId) => {
    dispatch(likeForTech(storyId));
  };

  React.useEffect(() => {
    dispatch(loadTechs());
  }, [dispatch]);

  return loading ? (
    <p>loading...</p>
  ) : loadError ? (
    <p style={{ color: "red" }}>{loadError}</p>
  ) : (
    <ul>
      {technologies.map((tech) => (
        <li key={tech.id}>
          <span>
            {tech.name}
          </span>
          <button onClick={() => handleLike(tech.id)}>Like</button>
          <i>{tech.like}</i>
        </li>
      ))}
    </ul>
  );
};

export default Technologies;
