import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root{
    
    }

    @media (min-width:721px) and (max-width:1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media(max-width:720px){
        html{
            font-size: 87.5%;
        }
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        color: var(--text);
    }

    body, input, textarea, button, select {
        font: 400 1rem "Inter", sans-serif;
        border-radius: 4px;
    }

    /* input {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    } */

    button, a{
        cursor: pointer;
    }



`