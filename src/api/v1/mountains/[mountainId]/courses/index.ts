import authenticatedApi from "@/api/_instances/authenticatedApi";
import { CourseDifficulty } from "@/types/course";

export const COURSES_OF_MOUNTAIN = (mountainId: string) =>
  `api/v1/mountains/${mountainId}/courses`;

interface Course {
  id: string;
  name: string;
  length: number;
  duration: number;
  difficulty: CourseDifficulty;
  bookmark: boolean;
}

interface GetCoursesOfMountainResponse {
  courses: Course[];
}

export const getCoursesOfMountainApi = async (mountainId: string) => {
  const response = await authenticatedApi<GetCoursesOfMountainResponse>({
    method: "get",
    url: COURSES_OF_MOUNTAIN(mountainId),
  });

  return response.data;
};
