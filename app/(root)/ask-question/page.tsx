import QuestionForm from "@/components/forms/QuestionForm";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AskQuestion = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
      <div className="mt-9">
        <QuestionForm
          type="create"
          mongoUserId={JSON.stringify(mongoUser?._id)}
          questionDetails=""
        />
      </div>
    </div>
  );
};

export default AskQuestion;
