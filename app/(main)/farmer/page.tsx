import { Divider } from "@/components/catalyst/divider";
import { Heading } from "@/components/catalyst/heading";
import { InfoCard } from "@/components/custom/cards/info";
import { SpeakerWaveIcon } from "@heroicons/react/16/solid";

export default function FarmerPage() {
  return (
    <div className="flex w-full flex-wrap items-end justify-between gap-4">
      <>
        <Heading>Farmer Info</Heading>
        <Divider />
      </>
      <div className="flex flex-row flex-wrap w-1/3 ">
        <InfoCard Icon={SpeakerWaveIcon} title="Name" description="Farmer" />
        <InfoCard Icon={SpeakerWaveIcon} title="Farm" description="Farmer" />
        <InfoCard
          Icon={SpeakerWaveIcon}
          title="Playtime"
          description="Farmer"
        />
        <InfoCard
          Icon={SpeakerWaveIcon}
          title="Money Earned"
          description="Farmer"
        />
        <InfoCard
          Icon={SpeakerWaveIcon}
          title="Farmer Level"
          description="Farmer"
        />
        <InfoCard
          Icon={SpeakerWaveIcon}
          title="Quests Completed"
          description="Farmer"
        />
        <InfoCard
          Icon={SpeakerWaveIcon}
          title="Stardrops Found"
          description="Farmer"
        />
      </div>
    </div>
  );
}
