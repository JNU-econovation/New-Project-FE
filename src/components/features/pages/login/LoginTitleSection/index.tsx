import LoginLogoIcon from "@icons/LoginLogoIcon";
import StarIcon from "@icons/StarIcon";
import Flex from "@shared/layout/Flex";
import Text from "@shared/ui/Text";

export default function LoginTitleSection() {
  return (
    <section>
      <Flex flexDirection="flex-col" alignItems="items-center" gap={12}>
        <Flex
          flexDirection="flex-row"
          alignItems="items-end"
          gap={3}
          maxWidth="max-w-fit"
        >
          <Flex flexDirection="flex-col" maxWidth="max-w-fit">
            <Text fontWeight="font-bold" className="text-3xl w-fit">
              그럼,
            </Text>
            <Text fontWeight="font-bold" className="text-3xl w-fit">
              모험을 시작해볼까요?
            </Text>
          </Flex>
          <StarIcon />
        </Flex>
        <LoginLogoIcon alt="로그인 페이지 로고" />
      </Flex>
    </section>
  );
}
