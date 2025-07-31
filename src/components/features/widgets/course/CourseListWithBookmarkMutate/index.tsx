import type { CourseDifficulty } from "@/types/course";
import useBookmarkMutation from "@hooks/feature/query/mutate/useBookmarkMutation";
import useDeleteBookmarkMutation from "@hooks/feature/query/mutate/useDeleteBookmarkMutation";
import useCoursePathwayPrefetch from "@hooks/feature/query/prefetch/useCoursePathwayPrefetch";
import CourseList from "@shared/ui/CourseList";

interface CourseListWithBookmarkMutateProps {
  id: string;
  name: string;
  duration: number;
  length: number;
  difficulty: CourseDifficulty;
  bookmark: boolean;
  image?: string;
  onSetStared?: () => void;
  onResetStared?: () => void;
}

export default function CourseListWithBookmarkMutate({
  id,
  bookmark,
  image,
  ...props
}: CourseListWithBookmarkMutateProps) {
  useCoursePathwayPrefetch({ courseId: id });
  const { mutate: postBookmark } = useBookmarkMutation();
  const { mutate: deleteBookmark } = useDeleteBookmarkMutation();

  return (
    <CourseList
      {...props}
      imageSrc={image ?? ""}
      stared={bookmark}
      onSetStared={() => postBookmark(id)}
      onResetStared={() => deleteBookmark(id)}
    />
  );
}
