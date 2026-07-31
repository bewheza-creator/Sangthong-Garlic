"use server";

import { supabaseAdmin } from "@/utils/supabase/admin";
import { revalidatePath } from "next/cache";

export async function getAdminUsers() {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY in .env.local");
  }

  const { data: users, error } = await supabaseAdmin.auth.admin.listUsers();
  
  if (error) {
    throw new Error(error.message);
  }

  return users.users;
}

export async function createAdminUser(username: string, password: string) {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY in .env.local");
  }

  // Ensure it's treated as an email
  const email = username.includes("@") ? username : `${username}@admin.com`;

  const { data, error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/users");
  return data.user;
}

export async function deleteAdminUser(id: string) {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY in .env.local");
  }

  const { error } = await supabaseAdmin.auth.admin.deleteUser(id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/users");
  return true;
}

export async function updateAdminUser(id: string, newPassword?: string, newUsername?: string) {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY in .env.local");
  }

  const updates: any = {};
  if (newPassword) updates.password = newPassword;
  if (newUsername) {
    updates.email = newUsername.includes("@") ? newUsername : `${newUsername}@admin.com`;
  }

  if (Object.keys(updates).length === 0) return true;

  const { data, error } = await supabaseAdmin.auth.admin.updateUserById(id, updates);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/users");
  return data.user;
}
