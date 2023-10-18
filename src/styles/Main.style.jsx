import styled from 'styled-components'
import Main from '../components/Main'

export const MainStyle = styled(Main)`
    display: grid;
    place-items: center;
    & p:first-child{
        font-size: 10rem;
        font-weight: 500;
        & sup{
            position: absolute;
            font-size: 2rem;
        }
    }
`