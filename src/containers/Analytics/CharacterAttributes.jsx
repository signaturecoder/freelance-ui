import React, { Fragment } from "react";
import { StrokeLine } from "../../components";

export default function CharacterAttributes({ attribute }) {
  return (
    <Fragment>
      <StrokeLine
        title="Total Characters"
        color="#02A515"
        fillPercentage={attribute.total_character}
      />
      <StrokeLine title="Male" color="#02A515" fillPercentage={attribute.male}/>
      <StrokeLine title="Female" color="#02A515" fillPercentage={attribute.female} />
      <StrokeLine
        title="Dominate Character"
        color="#02A515"
        fillPercentage={attribute.dominate_character}
      />
    </Fragment>
  );
}


