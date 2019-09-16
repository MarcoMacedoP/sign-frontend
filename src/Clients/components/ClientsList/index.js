// Components
import React from 'react'
import { Link } from 'react-router-dom'
import { LongCard, ComponentList } from '../../../global/components'

// hooks
import { useRedirect } from '../../../global/hooks/useRedirect'
// styled-Components
import { LongList } from '../../../global/styles/Lists'

export const ClientsList = ({ match }) => {
  const { setRedirect, renderRedirect } = useRedirect('/app/clients/add')
  const onClick = () => setRedirect(true)
  return (
    <ComponentList title='Clientes' onClick={onClick}>
      <LongList>
        {[1, 2, 3, 4].map((id) => (
          <Link to={`${match.path}${id}`} key={id}>
            <LongCard />
          </Link>
        ))}
      </LongList>
      {renderRedirect()}
    </ComponentList>
  )
}
