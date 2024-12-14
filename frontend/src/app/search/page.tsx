"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

type Props = {};

const search = (props: Props) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  return <div className="text-black">{query}</div>;
};

export default search;
