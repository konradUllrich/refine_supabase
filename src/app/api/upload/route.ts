import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "node:fs/promises";
import { supabaseClient } from "@utility/supabase-client";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;

    const r = await supabaseClient.storage
      .from("userFiles")
      .upload(file.name, file);

    console.log(r);

    revalidatePath("/");

    return NextResponse.json({ status: "success" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });

  }
}