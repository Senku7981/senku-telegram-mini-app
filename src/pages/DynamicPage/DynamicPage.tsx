// src/pages/DynamicPage/DynamicPage.tsx

import React from 'react';
import { useParams } from 'react-router-dom';

export const DynamicPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <h1>Dynamic Page</h1>
            <p>ID: {id}</p>
        </div>
    );
};

