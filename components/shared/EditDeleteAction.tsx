"use client";
import { deleteAnswer } from "@/lib/actions/answer.action";
import { deleteQuestion } from "@/lib/actions/question.actions";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { toast } from "../ui/use-toast";

interface Props {
  type: string;
  itemId: string;
}

const EditDeleteAction = ({ type, itemId }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/question/edit/${JSON.parse(itemId)}`);
  };

  const handleDelete = async () => {
    if (type === "Question") {
      // Delete the quesiton
      await deleteQuestion({
        questionId: JSON.parse(itemId),
        path: pathname,
      });
      return toast({
        title: `Question deleted`,
        description: `Your question has been successfully deleted`,
        variant: "destructive",
      });
    } else if (type === "Answer") {
      // Delete the answer
      await deleteAnswer({
        answerId: JSON.parse(itemId),
        path: pathname,
      });
      return toast({
        title: `Answer deleted`,
        description: `Your answer has been successfully deleted`,
        variant: "destructive",
      });
    }
  };
  return (
    <div className="flex items-center justify-end gap-3 max-sm:w-full">
      {type === "Question" && (
        <Image
          src="/assets/icons/edit.svg"
          alt="edit"
          width={14}
          height={14}
          className="cursor-pointer object-contain"
          onClick={handleEdit}
        />
      )}

      <Image
        src="/assets/icons/trash.svg"
        alt="delete"
        width={14}
        height={14}
        className="cursor-pointer object-contain"
        onClick={handleDelete}
      />
    </div>
  );
};

export default EditDeleteAction;
