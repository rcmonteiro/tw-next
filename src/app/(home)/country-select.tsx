'use client'

import { Select } from '@/components/form/select'
import { SelectItem } from '@/components/form/select/select-item'
import { countries } from '@/utils/countries'
import { useState } from 'react'

export function CountrySelect() {
  const [value, setValue] = useState('')

  function handleCountrySelected(value: string) {
    setValue(value)
  }

  return (
    <Select
      placeholder="Select a country"
      template="flags"
      name="country"
      value={value}
      onValueChange={handleCountrySelected}
    >
      {Object.entries(countries).map(([code, title]) => {
        return <SelectItem key={code} value={code} label={title} />
      })}
    </Select>
  )
}
