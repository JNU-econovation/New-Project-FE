"use client";

import useRouteBridge from "@/hooks/bridge/useRouteBridge";
import SearchInput from "@shared/ui/SearchInput";
import { FocusEvent, useCallback } from "react";

export default function CourseSearchBarSection() {
  const routeToCourseSearch = useRouteBridge({
    path: "course-search",
    routeType: "push",
  });

  const onFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      e.preventDefault();
      e.currentTarget.blur();
      routeToCourseSearch();
    },
    [routeToCourseSearch]
  );

  return (
    <section>
      <SearchInput placeholder="코스 지점 직접 검색" onFocus={onFocus} />
    </section>
  );
}
