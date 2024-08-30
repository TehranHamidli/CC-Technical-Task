import React, { useEffect, useState } from "react";
import styles from "./CategoryItem.module.scss";
import Text from "../../common/Text/Text";

interface CategoryItemProps {
  title: string;
  imageUrl: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ title, imageUrl }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    fetch(imageUrl)
      .then((response) => response.text())
      .then((data) => setSvgContent(data));
  }, [imageUrl]);

  return (
    <div className={styles.categoryItem}>
      <div
        className={styles.image}
        dangerouslySetInnerHTML={{ __html: svgContent || "" }}
      />
      <Text weight="regular" color="primary">
        {title}
      </Text>
    </div>
  );
};

export default CategoryItem;
