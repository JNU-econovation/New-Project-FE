import {
  COURSES_OF_MOUNTAIN,
  getCoursesOfMountainApi,
} from "@api/v1/mountains/[mountainId]/courses";
import { useSuspenseQuery } from "@tanstack/react-query";

const useCoursesOfMountainQuery = (mountainId: string) => {
  return useSuspenseQuery({
    queryKey: [COURSES_OF_MOUNTAIN(mountainId)],
    queryFn: () => getCoursesOfMountainApi(mountainId),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 60, // 1 hour
  });
};

export default useCoursesOfMountainQuery;
