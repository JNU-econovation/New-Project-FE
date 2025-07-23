import type { CourseDifficulty } from "@/types/course";
import useBookmarkMutation from "@hooks/feature/query/useBookmarkMutation";
import CourseList from "@shared/ui/CourseList";

interface CourseListWithBookmarkMutateProps {
  id: string;
  name: string;
  duration: number;
  length: number;
  difficulty: CourseDifficulty;
  bookmark: boolean;
  onSetStared?: () => void;
  onResetStared?: () => void;
}

export default function CourseListWithBookmarkMutate({
  id,
  bookmark,
  ...props
}: CourseListWithBookmarkMutateProps) {
  const { mutate: postBookmark } = useBookmarkMutation();
  // const deleteBookmark = (courseId: string) => {
  // console.log(courseId);
  // };

  return (
    <CourseList
      {...props}
      stared={bookmark}
      onSetStared={() => postBookmark(id)}
      // onResetStared={() => deleteBookmark(id)}
      onResetStared={() => null}
    />
  );
}
