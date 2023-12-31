import styled from 'styled-components'
import Main from '../components/Main'

export const MainStyle = styled(Main)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 80vh; */
    & p{
        text-align: center;
    }
    & p:first-child{
        font-size: 10rem;
        font-weight: 500;
        & sup{
            position: absolute;
            font-size: 2rem;
        }
    }
    & p:nth-child(2){
        font-size: 2rem;
    }
    & p:nth-child(3){
        font-size: 2.4rem;
    }
`