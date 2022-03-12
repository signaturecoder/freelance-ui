import React, { Fragment, useState } from "react";
import MasterTab from "../HocComponent/masterTab";
import Title from "../HocComponent/Title";
import OverView from "./OverView";
import Analytics from "../DialogueAnalytics/Analytics"
import EntryAndExit from "./EntryAndExit"
import SocialRelations from "./SocialRelations"

function CharacterAnalytics() {
  const [value, setValue] = useState(0);
  const headers = [
    { label: "Overview" },
    { label: "Entry & Exit" },
    { label: "Social Relations" },
    { label: "Analytics" },
  ];
  const body = [
    { component: <OverView /> },
    { component: <EntryAndExit/> },
    { component: <SocialRelations/> },
    { component: <Analytics/> },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <Title title="Character Analytics" />
      <MasterTab
        headers={headers}
        value={value}
        handleChange={handleChange}
        body={body}
      />
    </Fragment>
  );
}

export default CharacterAnalytics;
