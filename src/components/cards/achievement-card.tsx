import Image from "next/image";

import type { Achievement } from "@/types/items";

import { cn } from "@/lib/utils";
import { NewItemBadge } from "../new-item-badge";

interface Props {
  achievement: Achievement;
  additionalDescription?: string;
  completed: boolean;
  show?: boolean;
  setPromptOpen?: any;
}

function isNewAchievement(achievement: Achievement) {
  return achievement.id >= 40;
}

export const AchievementCard = ({
  achievement,
  additionalDescription,
  completed,
  show,
  setPromptOpen,
}: Props) => {
  /* -------------------- clickable classes (not used yet) -------------------- */
  /*
  let checkedClass = completed
    ? "border-green-900 bg-green-500/20 hover:bg-green-500/30 dark:bg-green-500/10 hover:dark:bg-green-500/20 hover:cursor-pointer"
    : "border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:cursor-pointer";
  */
  let checkedClass = completed
    ? "border-green-900 bg-green-500/20 dark:bg-green-500/10"
    : "border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950";

  return (
    <div
      className={cn(
        "relative flex select-none items-center space-x-3 rounded-lg border px-5 py-4  text-neutral-950 shadow-sm transition-colors dark:text-neutral-50",
        checkedClass,
      )}
      onClick={(e) => {
        if (isNewAchievement(achievement) && !show && !completed) {
          e.preventDefault();
          setPromptOpen?.(true);
          return;
        }
      }}
    >
      {isNewAchievement(achievement) && <NewItemBadge>✨ 1.6</NewItemBadge>}
      <div
        className={cn(
          "flex items-center space-x-3 truncate text-left",
          isNewAchievement(achievement) && !show && !completed && "blur-sm",
        )}
      >
        <Image
          src={achievement.iconURL}
          alt={achievement.name}
          className="rounded-sm"
          width={48}
          height={48}
        />
        <div className={"min-w-0"}>
          <p className="truncate font-medium">{achievement.name}</p>
          <p className="truncate text-sm text-neutral-500 dark:text-neutral-400">
            {achievement.description + (additionalDescription ?? "")}
          </p>
        </div>
      </div>
    </div>
  );
};
