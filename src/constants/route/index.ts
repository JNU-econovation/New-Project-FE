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
};

export default ROUTE;
