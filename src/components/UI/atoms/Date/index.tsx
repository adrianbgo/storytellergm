"use client";

import React from "react";
import { format, parseISO } from "date-fns";

interface IDate {
  dateString: string;
}

const Date: React.FC<IDate> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLL d, yyyy")}</time>;
};

export default Date;
