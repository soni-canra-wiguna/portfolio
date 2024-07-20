import LoadingButton from "@/components/loading-button"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { Trash } from "lucide-react"
import { useState } from "react"

export default function DeleteArticle({ id }: { id: string }) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const queryClient = useQueryClient()

  const {
    mutate: deleteArticle,
    isPending,
    isError,
  } = useMutation({
    mutationFn: async () => {
      await axios.delete(`/api/blogs/${id}`)
    },
    onSuccess: () => {
      toast({
        description: "article was deleted!!",
        variant: "destructive",
      })
      setIsDialogOpen(false)
      queryClient.invalidateQueries({ queryKey: ["blogArticles"] })
    },
    onError: () => {
      setIsDialogOpen(false)
      toast({
        description: "something went wrong, try again!!",
      })
    },
  })

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <button className="flex w-full items-center gap-2 px-3 py-2 transition-all duration-300 hover:bg-secondary hover:text-primary">
          <Trash className="size-4 text-inherit" /> delete
        </button>
      </DialogTrigger>
      <DialogContent className="bg-input">
        <DialogHeader>
          <DialogTitle>Delete Article</DialogTitle>
          <DialogDescription>
            Are you sure you want delete this article?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="justify-end">
          <Button onClick={() => setIsDialogOpen(false)} variant="secondary">
            No
          </Button>
          <LoadingButton
            loading={isPending}
            disabled={isPending}
            onClick={() => deleteArticle()}
            variant="destructive"
          >
            Delete
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
