import { Tabs, TabList, Tab } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { TAB_LIST } from "./food";

const FoodTab = ({ onChangeTab, tabIndex }) => {
  return (
    <Tabs onChange={onChangeTab} variant="unstyled" tabIndex={tabIndex}>
      <TabList>
        {TAB_LIST.map((tab) => (
          <Tab
            _selected={{ color: "white", bg: "#203A3B" }}
            key={tab.value}
            borderRadius="8"
            m="4"
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};

FoodTab.propTypes = {
  onChangeTab: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
};

export default FoodTab;
