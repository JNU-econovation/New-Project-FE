import {
  COURSES_OF_MOUNTAIN,
  getCoursesOfMountainApi,
} from "@/api/v1/mountains/[mountainId]/courses";
import { useQuery } from "@tanstack/react-query";

const useCoursesOfMountainQuery = (mountainId: string) => {
  return useQuery({
    queryKey: [COURSES_OF_MOUNTAIN(mountainId)],
    queryFn: () => getCoursesOfMountainApi(mountainId),
  });
};

export default useCoursesOfMountainQuery;
