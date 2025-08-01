"use client";

import Prefetcher from "@entities/Prefetcher";
import useCoursesOfMountainPrefetch from "@hooks/feature/query/prefetch/useCoursesOfMountainPrefetch";

export default function CoursePrefetcher() {
  return (
    <Prefetcher
      hooks={[
        {
          prefetchHook: useCoursesOfMountainPrefetch,
          params: {
            mountainId: "1",
            sortBy: "length",
          },
        },
        {
          prefetchHook: useCoursesOfMountainPrefetch,
          params: {
            mountainId: "1",
            sortBy: "difficulty",
          },
        },
      ]}
    />
  );
}
