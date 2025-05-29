const ROUTE = {
  MAIN: "/",
  LOGIN: "/login",
  SOCIAL_LOGIN_LOADING: "/social-login-loading",
  COURSE: "/course",
  COURSE_SEARCH_RESULT: ({
    mountainName,
    sort = "my",
  }: {
    mountainName: string;
    sort?: string;
  }) => `/course/${mountainName}?sort=${sort}`,
  MY_PAGE: "/my-page",
  MY_INFO: "/my-page/my-info",
  HIKING_LOG: "/my-page/hiking-log",
  COURSE_BOOKMARK: "/my-page/course-bookmark",
};

export default ROUTE;
