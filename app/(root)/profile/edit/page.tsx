import ProfileForm from "@/components/forms/ProfileForm";
import { getUserById } from "@/lib/actions/user.action";
import { ParamsProps } from "@/types";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const EditProfile = async ({ params }: ParamsProps) => {
  const { userId } = auth();

  if (!userId) return null;

  const mongoUser = await getUserById({ userId });

  return (
    <>
      <h1 className="h1-bold text-dark300_light900">Edit Profile</h1>

      <div className="mt-9">
        <ProfileForm clerkId={userId} user={JSON.stringify(mongoUser)} />
      </div>
    </>
  );
};

export default EditProfile;
