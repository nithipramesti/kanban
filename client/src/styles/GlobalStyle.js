import { createGlobalStyle } from "styled-components/macro";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
${variables};

html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    width: 100%;
}

.app {
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: var(--light-grey);

    .nav-side {
        width: 250px;
        background-color: white;
    }

    main {
        width: 100%;
    }

    h1,h2,h3,h4,p {
        margin: 0;
        margin-bottom: 24px;
    }

    h2 {
        font-size: 18px;
        
    }

    p {
        font-size: 13px;
        line-height: 23px;
    }

    h3 {
        font-size: var(--fz-hd-m);
        line-height: var(--lh-hd-m);
        font-weight: 600;
        margin-bottom: 8px;
    }

    p.body-m{
        font-size: var(--fz-bd-m);
        line-height: var(--lh-bd-m);
        font-weight: 600;
    }

    .task-container {
    display: flex;
    padding: 50px;
}

.status-column {
    width: 280px;
    margin-right: 24px;
}

.status-title {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2.4px;
    display: flex;
    align-items: center;
    color: var(--medium-grey);
    margin-bottom: 24px;

    &::before {
        content: '';
        display: inline-block;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        margin-right: 10px;
        background-color: var(--main-purple-hover);
    }
}
}


`;

export default GlobalStyle;
