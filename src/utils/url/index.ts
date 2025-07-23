export const updateSearchParams = ({
  href,
  searchParamName,
  paramValue,
}: {
  href: string;
  searchParamName: string;
  paramValue: string | null | undefined;
}) => {
  try {
    const url = new URL(href);

    // 파라미터 값 설정 (null이나 undefined면 삭제)
    if (paramValue === null || paramValue === undefined) {
      url.searchParams.delete(searchParamName);
    } else {
      url.searchParams.set(searchParamName, paramValue);
    }

    return url.toString();
  } catch (error) {
    console.error("Invalid URL:", href);
    console.error("Error details:", error);
    return href; // 원본 반환
  }
};
