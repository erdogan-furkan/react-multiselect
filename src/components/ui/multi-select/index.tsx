import { FC, useState } from "react";

type Item = {
  value: string;
  label: string;
};

interface Props {
  items: Array<Item>;
}

const MultiSelect: FC<Props> = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState<Array<Item["value"]>>([]);

  const handleOnClickItem = (value: Item["value"]) => [
    setSelectedItems((currentSelectedItems) => {
      const currentItemIndex = currentSelectedItems.indexOf(value);

      if (currentItemIndex === -1) {
        currentSelectedItems.push(value);
      } else {
        currentSelectedItems.splice(currentItemIndex, 1);
      }

      return currentSelectedItems;
    }),
  ];

  const sortedItems = items.sort((a, b) => {
    if (selectedItems.includes(a.value) || selectedItems.includes(b.value))
      return -1;
    else return 1;
  });

  const renderItems = sortedItems.map((item) => {
    const isSelectedItem = selectedItems.includes(item.value);

    return (
      <li
        key={item.value}
        className={`${isSelectedItem && "selected"}`}
        onClick={handleOnClickItem.bind(this, item.value)}
      >
        <span></span>
        <p>{item.label}</p>
      </li>
    );
  });

  return (
    <div>
      <ul>{renderItems}</ul>
    </div>
  );
};

export default MultiSelect;
