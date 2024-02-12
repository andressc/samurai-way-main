import {FlexWrapper} from "../Styled/Components";
import React, {FC} from "react";
import {Button} from "../Button/Button";

export type PropsType = {
    currentPage: number
    maxButtons: number
    totalPages: number
    setCurrentPage: (page: number) => void
}

export const Paginator: FC<PropsType> = ({
                                             currentPage,
                                             maxButtons,
                                             setCurrentPage,
                                             totalPages
                                         }) => {

    const generatePageNumbers = () => {
        const pageNumbers = []
        const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2))
        const endPage = Math.min(totalPages, startPage + maxButtons - 1)

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i)
        }

        return pageNumbers
    }

    const buttons: JSX.Element[] = generatePageNumbers().map(v => <Button key={v} title={v}
                                                                          className={v === currentPage ? "active" : ""}
                                                                          onClick={setCurrentPage}/>)

    return (<FlexWrapper $gap={10} $justify="center">
        {buttons}
    </FlexWrapper>)
}