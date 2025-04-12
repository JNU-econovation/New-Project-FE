import Flex from "@/components/common/shared/layout/Flex";
import Spinner from "@/components/common/shared/ui/Spinner";

export default function SpinnerSection() {
  return (
    <section className="h-screen">
      <Flex
        flexDirection="flex-row"
        justifyContent="justify-center"
        alignItems="items-center"
        className="h-full"
      >
        <Spinner size={"md"} />
      </Flex>
    </section>
  );
}
