"use server";

import { supabaseClient } from "@utility/supabase-client";

export async function uploadFile(formData: FormData) {
  const file = formData.get("file") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const r = await supabaseClient.storage
    .from("userFiles")
    .upload("open/" + file.name, file);

  console.log(r);
}
