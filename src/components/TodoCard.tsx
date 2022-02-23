import React from 'react'

interface Props {
    todo: string;
}
const TodoCard: React.FC<Props> = ({ todo }) => {
    return (
        <div>TodoCard</div>
    )
}

export default TodoCard