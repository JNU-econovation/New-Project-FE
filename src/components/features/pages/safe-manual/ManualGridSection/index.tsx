import ManualAnimalIcon from "@icons/ManualAnimalIcon";
import ManualDistressIcon from "@icons/ManualDistressIcon";
import ManualPainManIcon from "@icons/ManualPainManIcon";
import ManualTemperatureIcon from "@icons/ManualTemperatureIcon";
import Spacing from "@shared/layout/Spacing";

export default function ManualGridSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 rounded-lg shadow break-keep">
        <span className="text-main-green font-bold text-lg text-center">
          신체 부상
        </span>
        <Spacing size={8} />
        <ManualPainManIcon
          alt="신체 부상"
          width={61}
          height={61}
          className="self-center mx-auto"
        />
        <Spacing size={8} />
        <p className="text-sm">
          외부 충격에 의한 일반적인 부상에 대한 응급조치
        </p>
      </div>
      <div className="p-4 rounded-lg shadow break-keep">
        {/* <Text align>신체 부상</Text> */}
        <span className="text-main-green font-bold text-lg text-center">
          체온 및 대사 이상
        </span>
        <Spacing size={8} />
        <ManualTemperatureIcon
          alt="체온 및 대사 이상"
          width={61}
          height={61}
          className="self-center mx-auto"
        />
        <Spacing size={8} />
        <span className="text-sm leading-0">
          체온 저하 또는 탈수 등 체내 이상 징후 대응법
        </span>
      </div>
      <div className="p-4 rounded-lg shadow break-keep">
        <span className="text-main-green font-bold text-lg text-center">
          동물 및 자연환경 피해
        </span>
        <Spacing size={2} />
        <ManualAnimalIcon
          alt="동물 및 자연환경 피해"
          width={61}
          height={61}
          className="self-center mx-auto"
        />
        <Spacing size={8} />
        <span className="text-sm leading-0">
          야생동물과 외부 환경에 의한 부상 대응
        </span>
      </div>
      <div className="p-4 rounded-lg shadow break-keep">
        <span className="text-main-green font-bold text-lg text-center">
          조난 및 고립
        </span>
        <Spacing size={8} />
        <ManualDistressIcon
          alt="조난 및 고립"
          width={61}
          height={61}
          className="self-center mx-auto"
        />
        <Spacing size={8} />
        <span className="text-sm leading-0">
          길을 잃거나 고립된 상황에서의 대응
        </span>
      </div>
    </div>
  );
}
