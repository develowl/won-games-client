import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import React, { useState } from 'react'
import * as S from './styles'

export type ItemProps = {
  title: string
  name: string
  type: 'checkbox' | 'radio' | string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

type Values = {
  [field: string]: boolean | string
}

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const ExploreSidebar = ({
  items,
  initialValues = {},
  onFilter
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)

  const handleFilter = () => {
    onFilter(values)
  }

  const handleChange = (name: string, value: string | boolean) => {
    setValues((s) => ({
      ...s,
      [name]: value
    }))
  }

  return (
    <S.Wrapper>
      {items.map((item) => (
        <React.Fragment key={item.title}>
          <Heading lineBottom lineColor={'secondary'} size={'small'}>
            {item.title}
          </Heading>
          {item.type === 'checkbox' &&
            item.fields.map((field) => (
              <Checkbox
                key={field.name}
                name={field.name}
                labelFor={field.name}
                label={field.label}
                isChecked={!!values[field.name]}
                onCheck={(v) => handleChange(field.name, v)}
              />
            ))}

          {item.type === 'radio' &&
            item.fields.map((field) => (
              <Radio
                key={field.name}
                name={item.name}
                id={field.name}
                label={field.label}
                labelFor={field.name}
                value={field.name}
                defaultChecked={field.name === values[item.name]}
                onChange={() => handleChange(item.name, field.name)}
              />
            ))}
        </React.Fragment>
      ))}
      <Button fullWidth size={'medium'} onClick={handleFilter}>
        Filtrar
      </Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar
