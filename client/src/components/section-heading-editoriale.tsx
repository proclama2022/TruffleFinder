interface SectionHeadingProps {
  index: string;
  normal: string;
  italic: string;
  dark?: boolean;
  trailing?: React.ReactNode;
}

export function SectionHeadingEditoriale({ index, normal, italic, dark, trailing }: SectionHeadingProps) {
  const borderColor = dark ? "border-[#FFFBF3]" : "border-[#2A1F14]";
  const textColor = dark ? "text-[#FFFBF3]" : "text-[#2A1F14]";
  const idxColor = dark ? "text-[#C68A3E]" : "text-[#33461F]";
  const emColor = dark ? "text-[#C68A3E]" : "text-[#C68A3E]";

  return (
    <div
      className={`flex items-baseline gap-6 mb-14 md:mb-16 border-b-2 ${borderColor} pb-6 flex-wrap justify-between`}
    >
      <div className="flex items-baseline gap-6">
        <span className={`font-grotesk text-sm font-bold ${idxColor}`}>{index}</span>
        <h2
          className={`font-fraunces font-medium m-0 ${textColor}`}
          style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1, letterSpacing: "-0.02em" }}
        >
          {normal} <em className={`font-medium not-italic italic ${emColor}`}>{italic}</em>
        </h2>
      </div>
      {trailing}
    </div>
  );
}
