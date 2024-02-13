import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {InformationItem} from "../../../../components/AboutUser/information/InformationItem";
import '@testing-library/jest-dom'

const component = <InformationItem title="title" aboutMe="aboutMe"
                                   setStatus={() => {
                                   }}/>

describe("informationItem", () => {

    test('При отрисовке статус должен быть как из пропсов', async () => {
        const {queryByText} = render(component)
        expect(queryByText(/title/i)).toBeInTheDocument()
    })

    test('При отрисовке инпут должен быть скрыт', async () => {
        const {queryByRole} = render(component)
        expect(queryByRole('textbox')).toBeNull()
    })

    test('при двойном клике должен открыться инпут', async () => {
        const {queryByRole, queryAllByRole} = render(component)

        let div = queryAllByRole('generic')
        fireEvent.doubleClick(div[2])

        expect(queryByRole('textbox')).not.toBeNull()
    })

    test('При клике за пределами инпут он должен закрыться', async () => {
        const {queryByRole, queryAllByRole, getByRole} = render(component)

        let div = queryAllByRole('generic')
        fireEvent.doubleClick(div[2])
        fireEvent.blur(getByRole('textbox'))

        expect(queryByRole('textbox')).toBeNull()
    })

    test('При клике за пределами инпут должна вызваться передаваемая в пропс функция', async () => {

        const mockSetStatus = jest.fn()

        const {queryAllByRole, getByRole} = render(<InformationItem title="title" aboutMe="aboutMe"
                                                                    setStatus={mockSetStatus}/>)

        let div = queryAllByRole('generic')
        fireEvent.doubleClick(div[2])
        fireEvent.blur(getByRole('textbox'))

        expect(mockSetStatus.mock.calls.length).toBe(1)
    })
})