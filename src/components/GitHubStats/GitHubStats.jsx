// src/components/GitHubStats/GitHubStats.jsx
import { useState, useEffect } from 'react';
import './GitHubStats.css';

function GitHubStats({ username }) {
    // 1. We need 3 states when dealing with APIs: Data, Loading, and Error.
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. useEffect runs side-effects
    useEffect(() => {
        async function fetchStats() {
            try {
                setLoading(true);
                // Talk to the GitHub API Waiter
                const response = await fetch(`https://api.github.com/users/${username}`);
                
                if (!response.ok) throw new Error('User not found');
                
                const data = await response.json();
                setStats(data); // Save the data to state!
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // Stop the loading spinner either way
            }
        }

        fetchStats();
    }, [username]); // ONLY run this when the component loads, or if 'username' prop changes!

    // 3. Conditional Rendering based on state
    if (loading) return <p>Loading GitHub stats...</p>;
    if (error) return <p style={{color: 'red'}}>Error: {error}</p>;
    if (!stats) return null;

    // 4. If we made it here, we have the data!
    return (
        <div className="github-stats">
            <img src={stats.avatar_url} alt="GitHub Avatar" width="100" style={{borderRadius: '50%'}} />
            <div className="stats-info">
                <h3>{stats.name || username}</h3>
                <p>Public Repos: <strong>{stats.public_repos}</strong></p>
                <p>Followers: <strong>{stats.followers}</strong></p>
            </div>
        </div>
    );
}

export default GitHubStats;