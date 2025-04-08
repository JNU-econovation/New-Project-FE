import Spacing from "@/components/common/shared/layout/Spacing";
import Button from "@/components/common/shared/ui/Button";
import Input from "@/components/common/shared/ui/Input";
import Text from "@/components/common/shared/ui/Text";

export default function EmailAuthSection() {
  return (
    <>
      <Text fontSize="text-3xl" fontWeight="font-bold">
        메일 인증
      </Text>

      <Spacing size={8} />

      <>
        <Text fontWeight="font-bold">이메일</Text>
        <Spacing size={1} />
        <div className="relative">
          <Input
            type="email"
            placeholder="이메일"
            color="primary"
            size="primary"
          />
          <div className="absolute right-5 top-3">
            <Button color="white" size="sm">
              <Text fontWeight="font-semibold" className="font-semibold">
                인증 요청
              </Text>
            </Button>
          </div>
        </div>
      </>

      <Text
        fontSize="text-sm"
        fontWeight="font-medium"
        color="text-error-message"
      >
        존재하지 않는 이메일입니다.
      </Text>

      <Spacing size={6} />

      <>
        <Text fontWeight="font-bold">인증번호</Text>
        <Spacing size={1} />
        <div className="relative">
          <Input
            type="number"
            placeholder="인증번호"
            color="primary"
            size="primary"
          />
          <span className="absolute right-7 top-4">04:59</span>
        </div>
      </>

      <Spacing size={8} />

      <Button color="black" size="lg">
        확인하기
      </Button>
    </>
  );
}
