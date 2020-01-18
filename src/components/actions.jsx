import React from 'react';
import Button from "./UI/button";

const Actions = (props) => {
    const {filter, setFilter} = props;

    return (
        <div className="actions">
            <Button classes={filter === 'all' ? 'active' : ''}
                    onClick={() => setFilter('all')}
            >All</Button>
            <Button classes={filter === 'completed' ? 'active' : ''}
                    onClick={() => setFilter('completed')}
            >Completed</Button>
            <Button classes={filter === 'incompleted' ? 'active' : ''}
                    onClick={() => setFilter('incompleted')}
            >Incompleted</Button>
        </div>
    );
};

export default Actions;
