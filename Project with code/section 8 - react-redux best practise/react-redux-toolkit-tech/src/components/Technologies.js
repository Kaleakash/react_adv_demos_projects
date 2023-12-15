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
          <a onClick={() => handleLike(tech.id)}>
          <img src="data:image/jpeg;base64,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"
          width="50px" height="50px"/>
          </a>
          <i>{tech.like}</i>
        </li>
      ))}
    </ul>
  );
};

export default Technologies;
