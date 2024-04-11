import { Button } from '@/components/button'
import * as FileInput from '@/components/form/file-input'
import * as Input from '@/components/form/input'
import { Select } from '@/components/form/select'
import { SelectItem } from '@/components/form/select/select-item'
import { Textarea } from '@/components/form/textarea'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { PageTabs } from '../../components/page-tabs'
import { CountrySelect } from './country-select'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <PageTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Updater your personal details here
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>
        <form
          id="settings"
          className="dark:divide-zinc-2700 mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control defaultValue="Ricardo"></Input.Control>
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-zinc-700 lg:sr-only dark:text-zinc-300"
                >
                  Last Name
                </label>
                <Input.Root>
                  <Input.Control
                    id="lastName"
                    defaultValue="Monteiro"
                  ></Input.Control>
                </Input.Root>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              E-mail
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="size-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control defaultValue="email"></Input.Control>
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Role
            </label>
            <Input.Root>
              <Input.Control defaultValue="CTO"></Input.Control>
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Country
            </label>
            <CountrySelect />
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Timezone
            </label>
            <Select value="" placeholder="Select a timezone">
              <SelectItem
                label="Pacific Standard Time (PST)"
                value="Pacific Standard Time (PST)"
              />
              <SelectItem
                label="Eastern Standard Time (EST)"
                value="Eastern Standard Time (EST)"
              />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select value="" placeholder="" defaultValue="normal">
                  <SelectItem
                    label="Normal text"
                    defaultChecked
                    value="normal"
                  />
                  <SelectItem label="Rich editor" value="rich" />
                </Select>
                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="size-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="size-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="size-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="size-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered className="size-4 text-zinc-500" />
                  </Button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="portfolio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
