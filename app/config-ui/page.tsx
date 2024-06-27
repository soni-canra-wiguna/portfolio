"use client"

import MaxWidthWrapper from "@/components/max-width-wrapper"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CustomTooltip from "@/components/custom-tooltip"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import DrawerDemo from "./drawer-demo"
import { toast } from "@/components/ui/use-toast"

export default function ConfigUI() {
  return (
    <MaxWidthWrapper className="flex min-h-screen flex-col gap-10 pb-20 pt-10">
      <ColorsComp />
      <ButtonComp />
      <CardComp />
      <InputComp />
      <DialogComp />
      <ResizableComp />
      <DrawerDemo />
      <ToastComp />
    </MaxWidthWrapper>
  )
}

const WrapperUI = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-medium capitalize text-title">{title}</h1>
      {children}
    </div>
  )
}

const ColorsComp = () => {
  return (
    <WrapperUI title="colors">
      <div className="flex flex-wrap items-center gap-6">
        {/* background */}
        <CustomTooltip title="background">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-background`}
          />
        </CustomTooltip>
        {/* foreground */}
        <CustomTooltip title="foreground">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-foreground`}
          />
        </CustomTooltip>
        {/* primary */}
        <CustomTooltip title="primary">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-primary`}
          />
        </CustomTooltip>
        <CustomTooltip title="primary hover">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-primary-hover`}
          />
        </CustomTooltip>
        <CustomTooltip title="primary foreground">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-primary-foreground`}
          />
        </CustomTooltip>
        {/* secondary */}
        <CustomTooltip title="secondary">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-secondary`}
          />
        </CustomTooltip>
        <CustomTooltip title="secondary hover">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-secondary-hover`}
          />
        </CustomTooltip>
        <CustomTooltip title="secondary foreground">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-secondary-foreground`}
          />
        </CustomTooltip>
        {/* white */}
        <CustomTooltip title="white">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-white`}
          />
        </CustomTooltip>
        <CustomTooltip title="white hover">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-white-hover`}
          />
        </CustomTooltip>
        {/* card */}
        <CustomTooltip title="card">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-card`}
          />
        </CustomTooltip>
        <CustomTooltip title="card hover">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-card-hover`}
          />
        </CustomTooltip>
        <CustomTooltip title="card foreground">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-card-foreground`}
          />
        </CustomTooltip>
        {/* popover */}
        <CustomTooltip title="popover">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-popover`}
          />
        </CustomTooltip>
        <CustomTooltip title="popover hover">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-popover-hover`}
          />
        </CustomTooltip>
        <CustomTooltip title="popover foreground">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-popover-foreground`}
          />
        </CustomTooltip>
        {/* muted */}
        <CustomTooltip title="muted">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-muted`}
          />
        </CustomTooltip>
        <CustomTooltip title="muted foreground">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-muted-foreground`}
          />
        </CustomTooltip>
        {/* accent */}
        <CustomTooltip title="accent">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-accent`}
          />
        </CustomTooltip>
        <CustomTooltip title="accent foreground">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-accent-foreground`}
          />
        </CustomTooltip>
        {/* destructive */}
        <CustomTooltip title="destructive">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-destructive`}
          />
        </CustomTooltip>
        <CustomTooltip title="destructive foreground">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-destructive-foreground`}
          />
        </CustomTooltip>
        {/* title */}
        <CustomTooltip title="title">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-title`}
          />
        </CustomTooltip>
        {/* paragraph */}
        <CustomTooltip title="paragraph">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-paragraph`}
          />
        </CustomTooltip>
        {/* border */}
        <CustomTooltip title="border">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-border`}
          />
        </CustomTooltip>
        <CustomTooltip title="border hover">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-border-hover`}
          />
        </CustomTooltip>

        {/* input */}
        <CustomTooltip title="input">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-input`}
          />
        </CustomTooltip>
        <CustomTooltip title="input hover">
          <div
            className={`bg-input-hover flex size-20 items-center justify-center rounded-2xl border border-secondary/50`}
          />
        </CustomTooltip>
        {/* ring */}
        <CustomTooltip title="ring">
          <div
            className={`flex size-20 items-center justify-center rounded-2xl border border-secondary/50 bg-ring`}
          />
        </CustomTooltip>
      </div>
    </WrapperUI>
  )
}

const ButtonComp = () => {
  return (
    <WrapperUI title="button">
      <div className="flex flex-wrap items-center gap-4">
        <Button className="hover:bg-secondary-hover" variant="secondary">
          secondary
        </Button>
        <Button className="" variant="outline">
          outline
        </Button>
        <Button className="" variant="destructive">
          destructive
        </Button>
        <Button className="" variant="ghost">
          ghost
        </Button>
        <Button className="" variant="link">
          link
        </Button>
        <Button>primary</Button>
      </div>
    </WrapperUI>
  )
}

const CardComp = () => {
  return (
    <WrapperUI title="card">
      <div className="flex items-center gap-10">
        <Card className="size-[400px]">
          <CardHeader>
            <CardTitle>title ard</CardTitle>
            <CardDescription>description card</CardDescription>
          </CardHeader>
          <CardContent>body card</CardContent>
          <CardFooter>footer card</CardFooter>
        </Card>
      </div>
    </WrapperUI>
  )
}

const InputComp = () => {
  return (
    <WrapperUI title="input">
      <div className="flex flex-col gap-2.5">
        <Label>email</Label>
        <div className="relative w-full max-w-md">
          <Input placeholder="email..." className="px-6" />
        </div>
      </div>
    </WrapperUI>
  )
}

const DialogComp = () => {
  return (
    // <WrapperUI title="dialog/modal">
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-medium capitalize text-title">
        dialog/modal
      </h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-max">
            Edit Profile
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>

    // </WrapperUI>
  )
}

const ResizableComp = () => {
  return (
    <WrapperUI title="resizable">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[500px] max-w-6xl rounded-lg border"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </WrapperUI>
  )
}

const ToastComp = () => {
  return (
    <WrapperUI title="toaster">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
              variant: "default",
            })
          }}
        >
          default toaster
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
              variant: "destructive",
            })
          }}
        >
          destructive toaster
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
              variant: "success",
            })
          }}
        >
          success toaster
        </Button>
      </div>
    </WrapperUI>
  )
}
