import React from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';

const Query = () => {
    const { id } = useParams();
    const [queryData, setQueryData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchQuery = async () => {
            try {
                const response = await fetch(`/api/queries/${id}`);
                const data = await response.json();
                setQueryData(data);
            } catch (error) {
                console.error('Error fetching query:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuery();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!queryData) {
        return <div>Query not found.</div>;
    }

    return (
        <div>
            <h1>{queryData.title}</h1>
            <Post query={queryData} />
        </div>
    );
};

export default Query;