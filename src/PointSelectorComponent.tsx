import { useState } from "react"
import { Listbox, Transition } from "@headlessui/react"

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
]

function PointSelector() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      {({ open }) => (
        <>
          <Listbox.Button>{selectedPerson.name}</Listbox.Button>
          {/*
            Use the Transition + open render prop argument to add transitions.
          */}
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {/*
              Don't forget to add `static` to your Listbox.Options!
            */}
            <Listbox.Options static>
              {people.map((person) => (
                <Listbox.Option key={person.id} value={person}>
                  {person.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  )
}

export default PointSelector
