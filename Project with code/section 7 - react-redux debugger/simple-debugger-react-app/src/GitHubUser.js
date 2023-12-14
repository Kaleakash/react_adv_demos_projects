import React, { useState, useEffect } from 'react';

const GitHubUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('https://api.github.com/users/octocat');
                const userData = await response.json();
                setUser(userData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user:', error);
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <h1>{user.login}</h1>
            <img src={user.avatar_url} alt={user.login} style={{ width: '100px', height: '100px' }} />
            <p>Followers: {user.followers}</p>
        </div>
    );
};

export default GitHubUser;
