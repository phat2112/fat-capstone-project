import { useEffect, useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

import FoodTab from "./foodTab";
import FoodCard from "./foodCard";
import { FOOD_LIST, TAB_LIST } from "./food";

const Food = () => {
  const [foodList, setFoodList] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setFoodList(FOOD_LIST);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const onChangeTab = (index) => {
    setActiveTab(index);

    const currentCategory = TAB_LIST[index].value;

    const currentFood = currentCategory
      ? FOOD_LIST.filter((food) => food.category === currentCategory)
      : FOOD_LIST;

    setFoodList(currentFood);
  };

  return (
    <Flex p="20" flexDirection="column" alignItems="center">
      <Heading textAlign="center">Dishes</Heading>
      <FoodTab onChangeTab={onChangeTab} tabIndex={activeTab} />
      {foodList.length ? (
        foodList.map((food) => <FoodCard key={food.name} food={food} />)
      ) : (
        <Spinner size="xl" />
      )}
    </Flex>
  );
};

export default Food;
