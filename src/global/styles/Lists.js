import styled from 'styled-components'

export const BigList = styled.ul`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;
  * {
    text-decoration: none;
  }
  margin-bottom: 3rem;
`
export const LongList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  //Selecting <Link> childs
  a {
    margin-top: 1rem;
    width: 100%;
  }
  a:first-child {
    margin-top: 0;
  }
  * {
    text-decoration: none;
  }
`
