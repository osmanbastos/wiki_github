import React from 'react'
import { ItemContainer } from './style'

function ItemRepo() {
  return (
    <ItemContainer>
        <h3>Osman</h3>
        <p>dio/osman</p>
        <a href='#'>Ver Repositorio</a><br />
        <a href='#' className='remove'>Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
