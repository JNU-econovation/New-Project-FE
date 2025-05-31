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
  FAQ: "/my-page/faq",
  INQUIRY: "/my-page/inquiry",
  INQUIRY_HISTORY: "/my-page/inquiry-history",
  CHECK_TERMS: "/my-page/check-terms",
  NOTIFICATION_SETTINGS: "/my-page/notification-settings",
  CHANGE_PASSWORD: "/my-page/change-password",
};

export default ROUTE;
