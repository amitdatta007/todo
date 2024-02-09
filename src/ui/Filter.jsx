import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  { name: 'Default' },
  { name: 'Piority (High to Low)' },
  { name: 'Piority (Low to High)' },
]

export default function Filter() {
  const [selected, setSelected] = useState(people[0])

  return (
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-[200px] md:w-56 cursor-default rounded-lg py-2 pl-4 pr-4 text-left border-2 border-secondary/20 text-sm md:text-base">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <ChevronUpDownIcon
                className="h-5 w-5 text-secondary"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none  ${
                      active ? 'bg-primary/30 text-primary' : 'text-secondary'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate py-2 px-4 ${
                          selected ? 'font-medium text-primary bg-primary/30' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
  )
}
