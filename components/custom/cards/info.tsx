import { Strong, Text } from "@/components/catalyst/text";

interface Props {
  title: string;
  description?: string;
  Icon?: any;
  sourceURL?: string;
  children?: React.ReactNode;
  minVersion?: string;
  show?: boolean;
}

export function InfoCard({
  title,
  description,
  Icon,
  sourceURL,
  children,
  minVersion,
  show,
}: Props) {
  return (
    <div className="relative py-4 ">
      <div className="flex items-center space-x-3 truncate ">
        {Icon && <Icon className="h-6 w-6 dark:text-white" />}
        <div className="min-w-0 flex-1">
          <Strong className="truncate">{title}</Strong>
          <Text className="truncate">{description}</Text>
        </div>
      </div>
    </div>
  );
}
