import React from "react";
import { luminTest } from "./utils/utils";
import { MarkedSpan } from "../types/annotate-types";

export interface MarkProps<T> {
  key: string;
  content: string;
  start: number;
  end: number;
  onClick: (arg: T) => void;
  tag?: string;
  color?: string;
  className?: string;
  index?: number;
}

const Mark = <T extends MarkedSpan>({
  color,
  className,
  end,
  start,
  onClick,
  content,
  tag,
}: MarkProps<T>) => {
  const lumin = color ? luminTest(color) : false;
  return (
    <></>
  );
};

export default Mark;
