import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'

interface SelectInputProps {
  options: string[]
  defaultValue?: string
  placeholder?: string
  onChange?: (value: string) => void
  className?: string
}

export default function SelectInput({ 
  options, 
  defaultValue = options[0], 
  placeholder = "Select an option",
  onChange,
  className = ""
}: SelectInputProps) {
  const [selected, setSelected] = useState<string>(defaultValue)

  const handleChange = (value: string) => {
    setSelected(value)
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <div className={className}>
      <Listbox value={selected} onChange={handleChange}>
        <ListboxButton
          className={clsx(
            'relative block w-full rounded-lg py-1.5 pr-8 pl-3 text-left text-sm/6 text-white border-2',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
          )}
          style={{ 
            background: 'linear-gradient(135deg, #46f0a7ff 0%, #39e397ff 100%)',
            borderColor: '#1ab06f'
          }}
        >
          {selected || placeholder}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[--button-width] rounded-xl border p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none z-50',
            'transition duration-100 ease-in data-leave:data-closed:opacity-0'
          )}
          style={{ 
            background: 'linear-gradient(135deg, #afe4cdff 0%, #878d8aff 100%)',
            borderColor: '#0d8a54'
          }}
        >
          {options.map((option, index) => (
            <ListboxOption
              key={index}
              value={option}
              className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
            >
              <CheckIcon className="invisible size-4 fill-white group-data-selected:visible" />
              <div className="text-sm/6 text-white">{option}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}