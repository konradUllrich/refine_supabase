"use client";

import { NumberField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export default function BlogPostShow() {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  console.log(queryResult);

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <NumberField value={record?.id ?? ""} />
      <Title level={5}>{"name"}</Title>
      <TextField value={record?.name} />
    </Show>
  );
}
