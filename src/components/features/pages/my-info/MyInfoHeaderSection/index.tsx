import Text from "@/components/common/shared/ui/Text";
import ROUTE from "@/constants/route";
import Link from "next/link";

export default function MyInfoHeaderSection() {
  return (
    <header className="border-b border-gray-30 flex flex-col items-center relative">
      <Link href={ROUTE.MY_PAGE}>
        <Text fontSize="text-2xl" className="absolute left-5">
          {"<"}
        </Text>
      </Link>
      <Text fontSize="text-2xl" className="pb-3">
        내 정보
      </Text>
    </header>
  );
}
