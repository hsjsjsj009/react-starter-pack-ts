import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import {Router} from "react-router-dom";


test('example test',() => {
    const exampleRepoMock = jest.fn(() => 1)
    const loadData = jest.fn()
    jest.doMock("../../../repository/example/hooks",() => {
        return {
            __esModule: true,
            useExampleRepo: exampleRepoMock
        }
    })

    jest.doMock("./hooks",() => {
        return {
            __esModule:true,
            useLoadData:loadData
        }
    })

    const readData = jest.fn(() => {
        return {numberData:1,textData:"asdasd"}
    })

    jest.doMock("../../../usecase/exampleUC",() => {
        return {
            __esModule:true,
            RecordData:jest.fn(),
            ReadData:readData
        }
    })


    return import("./index").then(Module => {
        const hist = createMemoryHistory()
        render(<Router history={hist}>
            <Module.default/>
        </Router>)

        expect(exampleRepoMock).toBeCalled()
        expect(loadData).toBeCalled()
        expect(loadData).lastCalledWith(1)
        expect(readData).toBeCalled()
        expect(readData).lastCalledWith(1)

        const linkElement = screen.getByText(`Data Example Repo {Number data = 1, Text data = asdasd}`)
        expect(linkElement).toBeInTheDocument();
    })


})

