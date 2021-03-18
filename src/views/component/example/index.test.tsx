import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import {Router} from 'react-router-dom'
import {ExampleComp} from "./index";

test("example index",() => {
    const history = createMemoryHistory()
    render(<Router history={history}>
        <ExampleComp data={"test"}/>
    </Router>)
    const linkElement = screen.getByText("test")
    expect(linkElement).toBeInTheDocument()
})