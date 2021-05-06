import React from "react";

import { Markdown } from "../utils/Markdown";

function UpdatePreview(props) {
  const { text } = props;

  return <Markdown text={text} />;
}

export { UpdatePreview };
