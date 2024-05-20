import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({
  id,
  key,
  image,
  company,
  title,
  subtitle,
  description,
}) => {
  const baseStyles = {
    ProjectItemListText: {
      // Your base styles for the project item container
      padding: "1rem",
      height: "auto",
      background: "#f3f3f3",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
    },
    // Other base styles as needed
  };

  const additionalStyles = description
    ? { paddingBottom: "3.5rem" }
    : { height: "20vh" };

  // Merge the base styles with additional styles
  const mergedStyles = {
    ...baseStyles.ProjectItemListText,
    ...additionalStyles,
  };

  return (
    <Link to={`/projects/${id}`}>
      <div key={key} className="ProjectItemList" style={styles.ProjectItemList}>
        {/* Image */}
        <img src={image} alt="Project" style={styles.image} />

        {/* Content */}

        <div className="ProjectItemListText" style={mergedStyles}>
          {/* Title */}
          <h4
            className="uppercase font-Gilroy-semibold font-extrabold text-base"
            style={styles.listItemTitle}
          >
            {company}
          </h4>

          {/* title */}
          {title && (
            <h2
              className="text-2xl font-medium tracking-wide"
              style={styles.listItemSubtitle}
            >
              {title}
            </h2>
          )}

          {/* subtitle */}
          <h2
            className="font-Gilroy-regular font-medium text-2xl tracking-wide"
            style={styles.listItemDesc}
          >
            {subtitle}
          </h2>

          {/* Optional Span Text */}
          {description && (
            <span
              className="font-Gilroy-regular font-light text-sm tracking-wide"
              style={styles.listItemSpanD}
            >
              {description}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

const styles = {
  ProjectItemList: {
    // Styles for the project item container
    border: "2.5px solid #001878",
    width: "335px",
    borderRadius: "5px",
    height: "auto",
  },
  image: {
    width: "100%",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
    objectFit: "cover",
    aspectRatio: 16 / 12,

    // Other styles for the image
  },

  listItemTitle: {
    color: "#d33333",
  },
  listItemSubtitle: {
    color: "#011877",
    fontSize: "1.2rem",
  },
  listItemDesc: {
    color: "#011877",
    fontSize: "1.2rem",
    paddingBottom: "1rem",
  },
  listItemSpanD: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    fontSize: "1rem",
  },
};

export default ProjectItem;
