import { setCookie } from "cookies-next";

import {
  Dialog,
  DialogClose,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const UnblurDialog = ({ open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Show New Content</DialogTitle>
          <DialogDescription>
            Are you sure you want to show new content? This will unblur all new
            items in the 1.6 update. You can always change this in your{" "}
            <Link
              href="/account"
              className="underline hover:text-neutral-400 hover:dark:text-neutral-300"
            >
              account settings
            </Link>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-3 sm:gap-0">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              onClick={() => {
                setCookie("show_new_content", true, {
                  domain: parseInt(process.env.NEXT_PUBLIC_DEVELOPMENT!)
                    ? "localhost"
                    : "stardew.app",
                });
              }}
            >
              Show New Content
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};