import React from "react";
import ReactMarkdown from "react-markdown";
import "../../styles/components/Markdown.scss";

function Markdown(props) {
  const { text } = props;
  return <ReactMarkdown className="react-markdown" children={text} />;
}

export { Markdown };
