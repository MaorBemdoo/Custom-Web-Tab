import styled from 'styled-components'
import Main from '../components/Main'

export const MainStyle = styled(Main)`
    display: grid;
    place-items: center;
    & p:first-child{
        font-size: 3rem;
        font-weight: 700;
    }
`