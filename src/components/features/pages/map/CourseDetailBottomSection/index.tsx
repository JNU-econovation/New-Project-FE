import PositionBottom from "@shared/layout/PositionBottom";
import Spacing from "@shared/layout/Spacing";
import BottomSheet from "@shared/ui/BottomSheet";
import Button from "@shared/ui/Button";

export default function CourseDetailBottomSection() {
  return (
    <section>
      <PositionBottom>
        <div className="px-6">
          <BottomSheet>
            <div className="flex items-center justify-center">
              <span className="border px-4 py-1 rounded-2xl">증심사</span>
              <span className="border px-4 py-1 rounded-2xl">증심사</span>
              <span className="border px-4 py-1 rounded-2xl">증심사</span>
            </div>
            <Spacing size={4} />

            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>icon</span>
                  <span>41km</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>icon</span>
                  <span>41km</span>
                </div>
              </div>
            </div>
            <Spacing size={4} />
            <div className="h-36 bg-green-200" />
          </BottomSheet>
          <Spacing size={4} />
          <Button fullWidth>산행 시작</Button>
        </div>
      </PositionBottom>
    </section>
  );
}
