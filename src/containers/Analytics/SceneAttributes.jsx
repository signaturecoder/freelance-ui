import React, { Fragment } from "react";
import { StrokeLine } from "../../components";


export default function SceneAttributes({ attribute }) {
  return (
    <Fragment>
      <StrokeLine
        title="Total scenes"
        color="#DDC22D"
        fillPercentage={attribute.no_scenes}
      />
      <StrokeLine
        title="Interior"
        color="#FCA13A"
        fillPercentage={attribute.int_scenes}
      />
      <StrokeLine
        title="Exterior"
        color="#FF7676"
        fillPercentage={attribute.ext_scenes}
      />
      <StrokeLine
        title="% of day scenes"
        color="#FCA13A"
        fillPercentage={attribute.perc_day}
      />
    </Fragment>
  );
}
