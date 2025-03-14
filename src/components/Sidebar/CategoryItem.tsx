import React from "react";

interface CategoryItemProps {
  icon: React.ElementType;
  name: string;
  onClick?: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  icon: Icon,
  name,
  onClick,
}) => {
  return (
    <div
      className="dark:text-white flex items-center gap-2 p-2 text-black cursor-pointer hover:bg-gray-300 rounded-lg transition"
      onClick={onClick}
    >
      <Icon size={24} />
      <span>{name}</span>
    </div>
  );
};

export default CategoryItem;
