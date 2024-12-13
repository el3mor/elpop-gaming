import { Skeleton } from "@/components/ui/skeleton";

const GamePageSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="space-y-2">
        <div className="flex justify-between">
        <Skeleton className="h-4 w-[40%]" />
        <Skeleton className="h-4 w-[20%]" />

        </div>
        <Skeleton className="h-4 w-[20%]" />
      </div>
      <Skeleton className="h-[30rem] w-full rounded-xl mt-8" />
      <div>
      <Skeleton className=" h-4 w-[70%] rounded-xl mt-8" />
      <Skeleton className=" h-4 w-[50%] rounded-xl mt-8" />
      <Skeleton className=" h-4 w-[30%] rounded-xl mt-8" />

      </div>
    </div>
  );
};

export default GamePageSkeleton;
