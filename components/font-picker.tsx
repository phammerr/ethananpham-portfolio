"use client"

import { useState } from "react"
import { Dialog } from "@base-ui/react/dialog"
import { RadioGroup } from "@base-ui/react/radio-group"
import { Radio } from "@base-ui/react/radio"
import { cn } from "@/lib/utils"

const fonts = [
  {
    value: "var(--font-inter), sans-serif",
    label: "Inter",
    meta: "Sans-serif · Humanist",
  },
  {
    value: "Arial, sans-serif",
    label: "Arial",
    meta: "Sans-serif · Grotesque",
  },
  {
    value: "'Times New Roman', Times, serif",
    label: "Times New Roman",
    meta: "Serif · Transitional",
  },
]

export function FontPicker() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(fonts[0].value)
  const [pending, setPending] = useState(fonts[0].value)

  function handleOpenChange(next: boolean) {
    if (next) setPending(selected)
    setOpen(next)
  }

  function apply() {
    setSelected(pending)
    document.body.style.fontFamily = pending
    setOpen(false)
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger
        className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Change font"
      >
        [Aa]
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 w-72 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-card p-5 shadow-lg outline-none">
          <div className="mb-4 flex items-center justify-between">
            <Dialog.Title className="font-mono text-sm font-medium">
              Font
            </Dialog.Title>
            <Dialog.Close
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Dialog.Close>
          </div>

          <RadioGroup
            value={pending}
            onValueChange={setPending}
            className="flex flex-col gap-2"
          >
            {fonts.map((font) => (
              <Radio.Root
                key={font.value}
                value={font.value}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded border px-3 py-2.5 outline-none transition-colors",
                  "data-[checked]:border-foreground/40 data-[checked]:bg-muted",
                  "border-border hover:bg-muted/50 data-[checked]:hover:bg-muted",
                )}
              >
                <span className="flex size-3.5 shrink-0 items-center justify-center rounded-full border border-muted-foreground">
                  <Radio.Indicator
                    keepMounted
                    className="size-1.5 rounded-full bg-foreground opacity-0 data-[checked]:opacity-100 transition-opacity"
                  />
                </span>
                <span className="flex-1">
                  <span
                    className="block text-sm font-medium text-foreground"
                    style={{ fontFamily: font.value }}
                  >
                    {font.label}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {font.meta}
                  </span>
                </span>
                <span
                  className="text-lg text-muted-foreground"
                  style={{ fontFamily: font.value }}
                  aria-hidden="true"
                >
                  Aa
                </span>
              </Radio.Root>
            ))}
          </RadioGroup>

          <div className="mt-4 flex justify-end gap-2">
            <Dialog.Close className="rounded border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              Cancel
            </Dialog.Close>
            <button
              onClick={apply}
              className="rounded border border-foreground/20 bg-primary px-3 py-1.5 font-mono text-xs text-primary-foreground transition-colors hover:bg-primary/80"
            >
              Apply
            </button>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
