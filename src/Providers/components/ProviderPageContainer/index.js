import React, { useState, useEffect } from 'react'
import { ProviderPage } from '../ProviderPage'
import { providersApi } from '../../api/index'
import { Loading } from '../../../global/components/'
// hooks
import { useModalState } from '../../../global/hooks/useModalState'
import { useHandleState } from '../../../global/hooks/useHandleState'

// component
export function ProviderPageContainer ({ match }) {
  // modals
  const {
    modalIsOpen: addServiceIsOpen,
    handleModal: handleAddService
  } = useModalState()
  const {
    modalIsOpen: editServiceIsOpen,
    handleModal: handleEditService
  } = useModalState()

  const {
    modalIsOpen: addProductIsOpen,
    handleModal: handleAddProduct
  } = useModalState()
  const {
    modalIsOpen: editProductIsOpen,
    handleModal: handleEditProduct
  } = useModalState()

  // States
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  // Form values of AddIncome and EditIncome
  const { state, addFormValueToState } = useHandleState({})

  const providerId = match.params.providerId

  useEffect(() => {
    async function fetchData () {
      try {
        const data = await providersApi.read(providerId)
        setData(data)
        setError(null)
        setLoading(false)
        setLoading(false)
        console.log(data)
      } catch (err) {
        console.log(err)
        setError(err)
      }
    }
    fetchData()
  })

  if (loading) return <Loading />
  if (error) {
    return (
      <div>
        <h1>
          Hubo un error{' '}
          <span role='img' aria-label='Monkey'>
            🙊
          </span>
        </h1>
        <p>{error.message}</p>
      </div>
    )
  }
  return (
    <ProviderPage
      provider={data}
      formValues={state}
      onChange={addFormValueToState}
      addServiceIsOpen={addServiceIsOpen}
      handleAddService={handleAddService}
      editServiceIsOpen={editServiceIsOpen}
      handleEditService={handleEditService}
      addProductIsOpen={addProductIsOpen}
      handleAddProduct={handleAddProduct}
      editProductIsOpen={editProductIsOpen}
      handleEditProduct={handleEditProduct}
    />
  )
}
