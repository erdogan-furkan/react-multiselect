import { FC, useState } from "react";
import classes from "./styles.module.scss";

type Item = {
  value: string;
  label: string;
};

interface Props {
  items: Array<Item>;
  title: string;
}

const MultiSelect: FC<Props> = ({ items, title }) => {
  const [selectedItems, setSelectedItems] = useState<Array<Item["value"]>>([]);

  const handleOnClickItem = (value: Item["value"]) => [
    setSelectedItems((currentSelectedItems) => {
      const selectedItems = [...currentSelectedItems];
      const currentItemIndex = selectedItems.indexOf(value);

      if (currentItemIndex === -1) {
        selectedItems.push(value);
      } else {
        selectedItems.splice(currentItemIndex, 1);
      }

      return selectedItems;
    }),
  ];

  const sortedItems = items.sort((a, b) => {
    if (selectedItems.includes(a.value) && !selectedItems.includes(b.value))
      return -1;
    else return 1;
  });

  const renderItems = sortedItems.map((item) => {
    const isSelectedItem = selectedItems.includes(item.value);

    return (
      <li
        key={item.value}
        className={`${classes.item} ${isSelectedItem && classes.selected}`}
        onClick={handleOnClickItem.bind(this, item.value)}
      >
        <div className={classes.checkbox}>
          <span className={classes.checkboxTic}></span>
        </div>
        <p>{item.label}</p>
      </li>
    );
  });

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>{title}</h1>
      <ul className={classes.itemsWrapper}>{renderItems}</ul>
    </div>
  );
};

export default MultiSelect;
