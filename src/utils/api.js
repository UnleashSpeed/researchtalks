export const fetchQueries = async () => {
    const response = await fetch('/api/queries');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const fetchQueryById = async (id) => {
    const response = await fetch(`/api/queries/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const postQuery = async (queryData) => {
    const response = await fetch('/api/queries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(queryData),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const postAnswer = async (queryId, answerData) => {
    const response = await fetch(`/api/queries/${queryId}/answers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(answerData),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};